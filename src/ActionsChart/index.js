import React, { Component } from 'react';
import moment from 'moment';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class ActionChart extends Component {
  render() {
    const { data } = this.props;
    const toShow = data.map(stats => stats.close);
    const days = data.map(stats => moment(stats.timestamp).format('DD-MM-YYYY'));

    const options =  {

      title: {
          text: 'Accion Ecopetrol'
      },
      xAxis: {
        categories: days,
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
          data: [...toShow]
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