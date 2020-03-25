import React, { Component } from 'react';
import { Chart } from '@antv/g2';
import { dataManager } from '../data/DataManager';

export class ExpPrevChart extends Component {
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartSize);
  }

  updateChartSize = () => {
    const element = document.getElementById('expPrevContainer');
    this.chart.changeSize(element.offsetWidth - 10, element.offsetHeight >= 400 ? element.offsetHeight - 10 : 400);
  }

  updateData = (covidData) => {
    console.log(covidData)
    this.chart.changeData(covidData);

    this.chart
      .line()
      .position('day*data')
      .color('name')
      .shape('smooth');

    this.chart.scale('day', {
      alias: 'Future Days'
    });

    this.chart.axis('day', {
      title: {
        offset: 20,
        style: {
          fill: '#aaa'
        }
      }
    });

    this.chart.scale('data', {
      alias: 'Cases'
    });

    this.chart.axis('data', {
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
    const element = document.getElementById('expPrevContainer');

    this.chart = new Chart({
      container: element,
      height: element.offsetHeight >= 400 ? element.offsetHeight - 10 : 400,
      renderer: 'canvas'
    });

    this.updateChartSize();
    dataManager.registerListener('nextWeekPrev', this.updateData);
  }

  render() {
    return (
      <div id="expPrevContainer" className="container" />
    );
  }
}