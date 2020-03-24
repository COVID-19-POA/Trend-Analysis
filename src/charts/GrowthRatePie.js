import React, { Component } from 'react';
import regression from 'regression';
import { Chart } from '@antv/g2';

export class GrowthRatePie extends Component {
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartSize);
  }

  updateChartSize = () => {
    const element = document.getElementById('growthRatePieContainer');
    this.chart.changeSize(element.offsetWidth - 10, element.offsetHeight >= 400 ? element.offsetHeight - 10 : 400);
  }

  componentDidUpdate() {
    const parsedData = this.parseData(this.props.data);

    this.chart.changeData(parsedData);

    this.chart
      .interval()
      .position('percent')
      .color('slice')
      .label('percent', {
        content: (data) => {
          return `${data.slice}: ${(data.percent * 100).toFixed(2)}%`;
        },
      })
      .adjust('stack');

    this.chart.interaction('element-active');

    this.chart.coordinate('theta', {
      radius: 0.75,
    });

    this.chart.tooltip({
      showTitle: false,
      showCrosshairs: false,
    });

    this.chart.render();
    this.updateChartSize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateChartSize);
    const element = document.getElementById('growthRatePieContainer');

    this.chart = new Chart({
      container: element,
      height: element.offsetHeight >= 400 ? element.offsetHeight - 10 : 400,
      renderer: 'canvas'
    });

    this.chart.coordinate('theta', {
      radius: 0.75,
    });

    this.updateChartSize();
  }

  parseData(covidData) {
    const percentageRate = (a) => 100 * (Math.exp(a) - 1);
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


    Object.keys(covidData).forEach(countryName => {
      Object.keys(covidData[countryName].history).forEach(date => {
        if (covidData[countryName].history[date] <= 0) {
          delete covidData[countryName].history[date];
        }
      })
      if (covidData[countryName].history.length < 7) {
        delete covidData[countryName]
      } else {
        const historyKeys = Object.keys(covidData[countryName].history);

        historyKeys.sort(function (a, b) {
          a = new Date(a);
          b = new Date(b);
          return a.getTime() - b.getTime();
        });

        const firstDate = new Date(historyKeys[0]);

        const historySlices = historyKeys
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

            return regression.linear(sliceLog).equation[0];
          });

        total += historySlices.length;
        historySlices.forEach((rate) => addToGroup(rate));

      }
    });

    result.forEach(type => {
      delete type.condition;
      type.percent = Number((type.count / total).toFixed(2));
    });

    console.log(result);

    return result;
  }

  render() {
    return (
      <div id="growthRatePieContainer" className="container" />
    );
  }
}