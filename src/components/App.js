import React, { Component } from 'react';
import data from 'jhucsse.covid'
import { ExpGrowthRateChart } from './charts/ExpGrowthRate';
import '../style/App.css';
import { InfoPanel } from './InfoPanel';
import { GrowthRatePie } from './charts/GrowthRatePie';
import { dataManager } from './data/DataManager';
import { groupConfirmedByCountryName, processUntilLastWeekSlice } from './data/Transformations';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends Component {
  componentDidMount() {
    data.all().then((covidData) => {
      dataManager.registerDataFromTransformation('base', covidData, groupConfirmedByCountryName);
      dataManager.registerDataFromTransformation('lastWeekSlice', 'base', processUntilLastWeekSlice);
    });
  }

  render() {
    return (
      <Layout className="App">
        <Header className="header">
          <h2>Trend analysis of the COVID-19 pandemic</h2>
        </Header>
        <Content className="content">
          <div className="mainContainer">
            <div className="row">
              <ExpGrowthRateChart />
              <InfoPanel title="Exponential Growth Rate">
                <p>Testamos um ajuste sub-exponencial (linhas pretas) para alguns dos países com maior número de casos.
                Enquanto os dados de China e Japão se ajustam bem a curva, os de Itália e Alemanha desviam bastante,
                indicando um comportamento exponencial.
                <br />
                  <br />
                Para China e Japão, a forma como o número de casos vem aumentando condiz com a forma esperada para o crescimento do número de ​removidos (R) ​ao longo do tempo,
                ao invés de infectados, como normalmente é abordado.</p>
              </InfoPanel>
            </div>
            <div className="row">
              <InfoPanel title="Growth Rate per Day">
                <p>
                  Na última semana de dados que utilizamos para análise (9/mar - 15/mar), encontramos quea maioria dos países estão tendo um aumento de casos diário entre 20% e 50% - ou seja,
                  se em um dia temos 1000 casos, no dia seguinte vamos ter de 1200 a 1500 casos.
                  Abaixo temos a lista de quais países se encontram em cada categoria.
            </p>
              </InfoPanel>
              <GrowthRatePie />
            </div>
          </div>
        </Content>
        <Footer className="footer">
          Made by João Pedro Pianta, Albertine Weber and Sebastian Goncalves
        </Footer>
      </Layout>
    );
  }
}

export default App;
