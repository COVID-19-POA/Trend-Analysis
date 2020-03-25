import React, { Component } from 'react';
import { Chart } from '@antv/g2';
import { dataManager } from '../data/DataManager';
import { groupByRate } from '../data/Transformations';

export class GrowthRatePie extends Component {
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartSize);
  }

  updateChartSize = () => {
    const element = document.getElementById('growthRatePieContainer');
    this.chart.changeSize(element.offsetWidth - 10, element.offsetHeight >= 350 ? element.offsetHeight - 42 : 350);
  }

  updateData = (covidData) => {
    covidData = groupByRate(covidData);

    this.chart.changeData(covidData);

    this.chart
      .interval()
      .position('percent')
      .color('slice')
      .label('percent', {
        content: (data) => {
          return `${(data.percent * 100).toFixed(2)}%`;
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
      height: 0,
      renderer: 'canvas'
    });

    this.chart.coordinate('theta', {
      radius: 0.75,
    });

    dataManager.registerListener('lastWeekSlice', this.updateData);
  }

  render() {
    return (
      <div id="growthRatePieContainer" className="container" />
    );
  }
}