import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class ActionChart extends Component {
  render() {
    const { data, categories } = this.props;
    const toShow = data.map(stats => Number(stats.close));

    const options =  {
      title: {
          text: 'Accion Ecopetrol'
      },
      xAxis: {
        categories,
      },
      yAxis: {
          title: {
              text: 'Price'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
      plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
        }
    },
      series: [{
          name: 'Price',
          data: toShow,
      }],
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
    };

    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    );
  }
}

export default ActionChart;