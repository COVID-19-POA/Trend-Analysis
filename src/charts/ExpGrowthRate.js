import React, { Component } from 'react';
import regression from 'regression';
import { Chart } from '@antv/g2';

export class ExpGrowthRateChart extends Component {
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartSize);
  }

  updateChartSize = () => {
    const element = document.getElementById('expGrowthContainer');
    this.chart.changeSize(element.offsetWidth - 10, element.offsetHeight >= 400 ? element.offsetHeight - 10 : 400);
  }

  componentDidUpdate() {
    const parsedData = this.parseData(this.props.data);

    this.chart.changeData(parsedData);

    this.chart
      .line()
      .position('daysSinceFirstCase*expGrowth')
      .color('name')
      .shape('smooth');

    this.chart.scale('daysSinceFirstCase', {
      alias: 'Days from Outbreak'
    });

    this.chart.axis('daysSinceFirstCase', {
      title: {
        offset: 20,
        style: {
          fill: '#aaa'
        }
      }
    });

    this.chart.scale('expGrowth', {
      alias: 'Power-Law Exponent'
    });

    this.chart.axis('expGrowth', {
      title: {
        offset: 20,
        style: {
          fill: '#aaa'
        }
      }
    });

    this.chart.tooltip({
      showTitle: false,
      showCrosshairs: true,
    });

    this.chart.render();
    this.updateChartSize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateChartSize);
    const element = document.getElementById('expGrowthContainer');

    this.chart = new Chart({
      container: element,
      height: element.offsetHeight >= 400 ? element.offsetHeight - 10 : 400,
      renderer: 'canvas'
    });

    this.updateChartSize();
  }

  parseData(covidData) {
    let result = [];

    Object.keys(covidData).forEach(countryName => {
      const historyKeys = Object.keys(covidData[countryName].history).filter(date => {
        return covidData[countryName].history[date] > 0 && covidData[countryName].cases >= 1000;
      });

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

          const regressionResult = regression.linear(sliceLog);

          return {
            name: countryName,
            daysSinceFirstCase: sliceLog[0][0],
            expGrowth: regressionResult.equation[0]
          }
        });

      result = result.concat(historySlices);
    });

    return result;
  }

  render() {
    return (
      <div id="expGrowthContainer" className="container" />
    );
  }
}