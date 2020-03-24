import regression from 'regression';

export function groupConfirmedByCountryName(covidData) {
  const mergeHistory = (h1, h2) => {
    Object.keys(h1).forEach(day => h2[day] = h2[day] ? h2[day] + h1[day] : h1[day]);
    return h2;
  }

  const confirmedData = covidData.confirmed;

  const countries = confirmedData.locations.reduce((agg, country) => {
    const countryName = country.country;
    if (!agg[countryName]) {
      agg[countryName] = {
        name: countryName,
        cases: country.latest,
        history: country.history
      }
    } else {
      agg[countryName] = {
        name: countryName,
        cases: country.latest + agg[countryName].cases,
        history: mergeHistory(country.history, agg[countryName].history)
      }
    }
    return agg;
  }, {});

  return countries;
}

export function processData(preProcess, process, postProcess) {
  return (covidData) => {
    const data = Object.keys(covidData).map(countryName => {
      const preData = preProcess ? preProcess(countryName)(covidData) : countryName;
      return process ? process(countryName)(covidData, preData) : preData;
    })
    return postProcess ? postProcess(data) : data;
  }
}

export function getCountriesWith1000CasesOrMore(countryName) {
  return (covidData) => {
    const historyKeys = Object.keys(covidData[countryName].history).filter(date => {
      return covidData[countryName].history[date] > 0 && covidData[countryName].cases >= 1000;
    });

    historyKeys.sort(function (a, b) {
      a = new Date(a);
      b = new Date(b);
      return a.getTime() - b.getTime();
    });

    return historyKeys;
  }
}

export function getCountriesWith7DaysOrMore(countryName) {
  return (covidData) => {
    const historyKeys = Object.keys(covidData[countryName].history).filter(date => covidData[countryName].history[date] > 0);
    if (historyKeys.length >= 7) {

      historyKeys.sort(function (a, b) {
        a = new Date(a);
        b = new Date(b);
        return a.getTime() - b.getTime();
      });

      return historyKeys;
    } else {
      return [];
    }
  }
}

export function getExpGrowthRateByCountry(countryName) {
  return (covidData, historyKeys) => {
    const firstDate = new Date(historyKeys[0]);

    return historyKeys
      .map((_, index) => historyKeys.slice(index, index + 7))
      .filter(slice => slice.length === 7)
      .map(slice => {
        const sliceLog = slice.map(date => {
          const dateCases = covidData[countryName].history[date];
          const logCases = Math.log(dateCases);

          const caseDate = new Date(date);
          const timeDiff = caseDate.getTime() - firstDate.getTime();
          const timeInDays = timeDiff / (1000 * 3600 * 24);


          return [timeInDays, logCases];
        });

        const regressionResult = regression.linear(sliceLog);

        return {
          name: countryName,
          daysSinceFirstCase: sliceLog[0][0],
          expGrowth: regressionResult.equation[0]
        }
      });
  }
}

export function getLastWeekLogSlice(countryName) {
  return (covidData, historyKeys) => {
    const firstDate = new Date(historyKeys[0]);

    const lastWeek = historyKeys.slice(-7);

    return lastWeek.map(date => {
      const dateCases = covidData[countryName].history[date];
      const logCases = Math.log(dateCases);

      const caseDate = new Date(date);
      const timeDiff = caseDate.getTime() - firstDate.getTime();
      const timeInDays = timeDiff / (1000 * 3600 * 24);


      return [timeInDays, logCases];
    });
  }
}

export function flatResults(parsedData) {
  return [].concat.apply([], parsedData)
}

export function groupByRate(parsedData) {
  const percentageRate = (a) => 100 * ((Math.E ** a) - 1);
  const result = [
    {
      slice: '0% - 10%',
      condition: (a) => percentageRate(a) <= 10,
      count: 0
    },
    {
      slice: '10% - 20%',
      condition: (a) => percentageRate(a) > 10 && percentageRate(a) <= 20,
      count: 0
    },
    {
      slice: '20% - 30%',
      condition: (a) => percentageRate(a) > 20 && percentageRate(a) <= 30,
      count: 0
    },
    {
      slice: '30% - 40%',
      condition: (a) => percentageRate(a) > 30 && percentageRate(a) <= 40,
      count: 0
    },
    {
      slice: '40% - 50%',
      condition: (a) => percentageRate(a) > 40 && percentageRate(a) <= 50,
      count: 0
    },
    {
      slice: '50% - 60%',
      condition: (a) => percentageRate(a) > 50 && percentageRate(a) <= 60,
      count: 0
    },
    {
      slice: '60% - 100%',
      condition: (a) => percentageRate(a) > 60 && percentageRate(a) <= 100,
      count: 0
    },
    {
      slice: '100%>',
      condition: (a) => percentageRate(a) > 100,
      count: 0
    },
  ];

  const addToGroup = (rate) => {
    result.forEach(type => {
      if (type.condition(rate)) {
        type.count++;
      }
    })
  }

  let total = 0;

  parsedData.forEach(logSlice => {
    if (logSlice !== []) {
      const rate = regression.linear(logSlice).equation[0];

      total++;

      addToGroup(rate);
    }
  });

  result.forEach(type => {
    delete type.condition;
    type.percent = Number((type.count / total).toFixed(4));
  });

  return result;
}

export const processUntilLastWeekSlice = processData(getCountriesWith7DaysOrMore, getLastWeekLogSlice);

export const exponentialGrowthRateByCountry = processData(getCountriesWith1000CasesOrMore, getExpGrowthRateByCountry, flatResults);