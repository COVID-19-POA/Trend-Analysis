import React, { Component } from 'react';
import { Chart } from '@antv/g2';
import { dataManager } from '../data/DataManager';
import { exponentialGrowthRateByCountry } from '../data/Transformations';

export class ExpGrowthRateChart extends Component {
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartSize);
  }

  updateChartSize = () => {
    const element = document.getElementById('expGrowthContainer');
    this.chart.changeSize(element.offsetWidth - 10, element.offsetHeight >= 400 ? element.offsetHeight - 10 : 400);
  }

  updateData = (covidData) => {
    covidData = exponentialGrowthRateByCountry(covidData);

    this.chart.changeData(covidData);

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
    dataManager.registerListener('base', this.updateData);
  }

  render() {
    return (
      <div id="expGrowthContainer" className="container" />
    );
  }
}