import React, { Component } from 'react';
import data from 'jhucsse.covid'
import ExpGrowthRateChart from './charts/ExpGrowthRate';
import '../style/App.css';
import { InfoPanel } from './InfoPanel';
import { GrowthRatePie } from './charts/GrowthRatePie';
import { dataManager } from './data/DataManager';
import { groupConfirmedByCountryName, processUntilLastWeekSlice } from './data/Transformations';
import { Layout, Button, Modal } from 'antd';
import { AppHeader } from './Header';
import { Translation } from 'react-i18next';

const { Footer, Content } = Layout;

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
      <Translation>
        {
          t => (
            <Layout className="App">
              <AppHeader />
              <Content className="content">
                <div className="mainContainer">
                  <div className="row">
                    <ExpGrowthRateChart />
                    <InfoPanel title={t('content.expGrowth.title')}>
                      <p>
                        {t('content.expGrowth.content.1')}
                        <br />
                        <br />
                        {t('content.expGrowth.content.2')}
                        <br />
                        <br />
                        {t('content.expGrowth.content.3')}
                        <br />
                        <br />
                        {t('content.expGrowth.content.4')}
                        </p>
                    </InfoPanel>
                  </div>
                  <div className="row">
                    <InfoPanel title={t('content.growthRate.title')}>
                      <p>
                        {t('content.growthRate.content.1')}
                        <br />
                        <br />
                        {t('content.growthRate.content.2')}
                        <br />
                        <br />
                        {t('content.growthRate.content.3')}
                      </p>
                    </InfoPanel>
                    <GrowthRatePie />
                  </div>
                </div>
                <Modal
                  title={t('footer.disclaimer.title')}
                  visible={this.state.modalVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <p>
                    {t('footer.disclaimer.content.1')}
                    <br />
                    <a className="link" rel="noopener noreferrer" target="_blank" href="https://github.com/CSSEGISandData/COVID-19">
                      JHU CSSE 2020
                    </a>.
                    <br />
                    <br />
                    {t('footer.disclaimer.content.2')}
                    <br />
                    <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.medrxiv.org/content/10.1101/2020.03.19.20037192v1">
                      Trend analysis of the COVID-19 pandemic in China and the rest of the world, Albertine Weber, Flavio Iannelli, Sebastian Gonçalves
                    </a>.
                  </p>
                </Modal>
              </Content>
              <Footer className="footer">
                <span>{t('footer.madeBy')}</span>
                <span>
                  <Button type="link" onClick={this.showDataDisclaimer}>
                    {t('footer.disclaimer.title')}
                  </Button>
                </span>
              </Footer>
            </Layout>
          )
        }
      </Translation>
    );
  }
}

export default App;
