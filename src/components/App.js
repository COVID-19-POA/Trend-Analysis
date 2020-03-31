import React, { Component } from 'react';
import data from 'jhucsse.covid'
import { ExpGrowthRateChart } from './charts/ExpGrowthRate';
import '../style/App.css';
import { InfoPanel } from './InfoPanel';
import { GrowthRatePie } from './charts/GrowthRatePie';
import { dataManager } from './data/DataManager';
import { groupConfirmedByCountryName, processUntilLastWeekSlice } from './data/Transformations';
import { Layout, Button, Modal } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  componentDidMount() {
    data.all().then((covidData) => {
      dataManager.registerDataFromTransformation('base', covidData, groupConfirmedByCountryName);
      dataManager.registerDataFromTransformation('lastWeekSlice', 'base', processUntilLastWeekSlice);
    });
  }

  showDataDisclaimer = () => {
    this.setState({ modalVisible: true });
  }

  handleCancel = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <Layout className="App">
        <Header className="header">
          <div className="headerContent">
            <span className="title">Análise sobre as tendências da pandemia de COVID-19</span>
            <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.03.19.20037192v1">
              Artigo
            </a>
          </div>
        </Header>
        <Content className="content">
          <div className="mainContainer">
            <div className="row">
              <ExpGrowthRateChart />
              <InfoPanel title="Taxa de crescimento exponencial">
                <p>
                  A taxa, em percentual de aumento diário de casos, é mostrada na figura da esquerda
                  como uma curva que varia no tempo, a partir do primeiro dia do surto de cada pais.
                <br />
                <br />

                Passando o mouse por cima da uma curva se visualiza o nome do país
                junto com dois números: o da esquerda indica o dia a contar do inicio local da epidemia,
                o da direita o valor da taxa de crescimento desse dia.
                Na janela pode ser definido um filtro numérico, para mostrar os países com
                mais casos que o valor do filtro.

                <br />
                <br />

                Os valores das taxas foram estimados a partir da média em um intervalo de sete dias ao redor do dia.
                (mais detalhes no link do artigo).
                Por isso o último valor de cada curva corresponde a taxa média de três dias atrás.
                O padrão diferente de cada curva é um forte indicativo da forma em que cada pais
                enfrentou e enfrenta a epidemia.
                Destaca-se o pico de Itália no dia 26 (24 Fevereiro 2020) quando a taxa de
                aumento diário chegou a ser de 140%. Isso significa que os casos desse dia duplicaram em apenas 17hs!

                <br />
                <br />

                Com poucas excepções (China, S. Korea ou US) o pico de taxa, geralmente maior que 50%, aparece como
                uma caraterística comum a quase todos os países com mais de 5000 casos até 30 de Março.
                Depois do forte declínio posterior, correspondente a implantação de medidas de mitigação
                como fechamento de escolas e comércios, até quarentenas ou controle de movimento,
                segue uma descida suave (a valores entre 10-20%).
                Na nossa interpretação isso indica a necessidade de medidas mais fortes e de controles mais estritos
                para conseguir o controle da epidemia.
                </p>
              </InfoPanel>
            </div>
            <div className="row">
              <InfoPanel title="Taxa de crescimento por dia">
                <p>
                  No chart da direita podemos ver a distribuição da taxa de crescimento atual
                  entre os países. O tamanho e valor da porção representa o percentual de países
                  com uma taxa dentro de um intervalo, que pode ser visto passando o mouse por cima
                  da porção.

                <br />
                  <br />

                Os países que conseguiram controlar a epidemia (como China e South Korea), se mantendo
                em regime sub-exponencial (ou com Ro &lt; 1), ou estão próximos de controlar (Japão?),
                tem taxas inferiores a 10% (porção azul, 0-10%).
                Porém, quase todos os países estão ou continuam em regime de crescimento exponencial,
                independentemente do data inicial do surto, com valores de taxas acima de 10%.

                <br />
                <br />

                Para se ter uma melhor ideia do significado de uma taxa superior a 10%,
                uma taxa de 20%, por exemplo, significa que o número de casos duplica em menos de 4 dias.
                E que se mantendo por um mês, um país que hoje tem 1000 casos passará a ter 237000!

                </p>
              </InfoPanel>
              <GrowthRatePie />
            </div>
          </div>
          <Modal
            title="Ressalva sobre Uso de Dados"
            visible={this.state.modalVisible}
            footer={null}
            onCancel={this.handleCancel}
          >
            <p>
              Os dados utilizados são atualizados diariamente do Data Repository by Center for 
              Systems Science and Engineering.
              <br />
              <a className="link" rel="noopener noreferrer" target="_blank" href="https://github.com/CSSEGISandData/COVID-19">
              JHU CSSE 2020
              </a>.

              <br />
              <br />

              As analises completas e métodos utilizados estão publicados em
              <br />
              <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.03.19.20037192v1">
              Trend analysis of the COVID-19 pandemic in China and the rest of the world, Albertine Weber, Flavio Iannelli, Sebastian Gonçalves
              </a>.
            </p>
          </Modal>
        </Content>
        <Footer className="footer">
          <span>Feito por João Pedro Pianta, Albertine Weber e Sebastian Gonçalves</span>
          <span>
            <Button type="link" onClick={this.showDataDisclaimer}>
              Ressalva sobre uso de Dados
            </Button>
          </span>
        </Footer>
      </Layout>
    );
  }
}

export default App;
