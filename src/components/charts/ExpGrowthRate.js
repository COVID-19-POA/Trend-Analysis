import React, { Component } from 'react';
import { Chart } from '@antv/g2';
import { dataManager } from '../data/DataManager';
import { exponentialGrowthRateByCountry } from '../data/Transformations';
import { IntegerInput } from '../helpers/IntegerInput';

export class ExpGrowthRateChart extends Component {
  constructor() {
    super();

    this.state = {
      value: 1000
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartSize);
  }

  updateChartSize = () => {
    const parentElement = document.getElementById('expGrowthContainer').parentElement;
    this.chart.changeSize(parentElement.offsetWidth - 10, parentElement.offsetHeight >= 350 ? parentElement.offsetHeight - 42 : 350);
  }

  updateChart = (covidData, filterNumberOfCases = 1000) => {
    covidData = exponentialGrowthRateByCountry(filterNumberOfCases)(covidData);

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
      height: 0,
      renderer: 'canvas'
    });

    dataManager.registerListener('base', this.updateChart);
  }

  onChange = (value) => {
    this.setState({ value });

    // Debounce value to not redraw the chart too many times
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.updateChart(dataManager.getData('base'), value), 200)
  }

  render() {
    return (
      <div className="container">
        <div id="expGrowthContainer" />
        <div className="inpFlex">
          <span>Number of confirmed cases: </span>
          <IntegerInput value={this.state.value} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}