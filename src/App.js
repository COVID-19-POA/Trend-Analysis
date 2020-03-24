import React, { Component } from 'react';
import data from 'jhucsse.covid'
import { ExpGrowthRateChart } from './charts/ExpGrowthRate';
import './App.css';
import { InfoPanel } from './InfoPanel';
import { GrowthRatePie } from './charts/GrowthRatePie';

class App extends Component {
  constructor() {
    super();

    this.state = {
      totalCases: 0,
      data: {}
    }
  }

  componentDidMount() {
    data.all().then((covidData) => {
      const parsedData = this.parseData(covidData);
      this.setState({
        totalCases: parsedData[1],
        data: parsedData[0]
      })
    });
  }

  mergeHistory(h1, h2) {
    Object.keys(h1).forEach(day => h2[day] = h2[day] ? h2[day] + h1[day] : h1[day]);
    return h2;
  }

  parseData(covidData) {
    const confirmedData = covidData.confirmed;

    const totalCases = confirmedData.latest;

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
          history: this.mergeHistory(country.history, agg[countryName].history)
        }
      }
      return agg;
    }, {});

    return [countries, totalCases];
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <ExpGrowthRateChart data={this.state.data} />
          <InfoPanel title="Exponential Growth Rate">
            <p>Testamos um ajuste sub-exponencial (linhas pretas) para alguns dos países com maior número de casos. 
              Enquanto os dados de China e Japão se ajustam bem a curva, os de Itália e Alemanha desviam bastante, 
              indicando um comportamento exponencial. 
              <br />
              <br />
              Para China e Japão, a forma como o número de casos vem aumentando condiz com a forma esperada para o crescimento do número de ​removidos (R) ​ao longo do tempo, 
              ao invés de infectados, como normalmente é abordado.</p>
          </InfoPanel>
          <InfoPanel title="Growth Rate per Day">
            <p>
            Na última semana de dados que utilizamos para análise (9/mar - 15/mar), encontramos quea maioria dos países estão tendo um aumento de casos diário entre 20% e 50% - ou seja, 
            se em um dia temos 1000 casos, no dia seguinte vamos ter de 1200 a 1500 casos. 
            Abaixotemos a lista de quais países se encontram em cada categoria.
            </p>
          </InfoPanel>
          <GrowthRatePie data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
