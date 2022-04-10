import React from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';


const data = {
    labels: ['Itunes', 'Google Play', 'Amazon', 'Vanilla', 'Visa', 'Apple', 'Steam'],
    datasets: [
        {
            label: 'Physical',
            backgroundColor: 'rgba(217, 188, 41,0.3)',
            borderColor: 'rgba(217,188, 41,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(217, 188, 41,0.8)',
            hoverBorderColor: 'rgba(217, 188, 41,1)',
            borderCapStyle: 'round',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Ecode',
          backgroundColor: 'rgba(123, 138, 22,0.3)',
          borderColor: 'rgba(123, 138, 22,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(123, 138, 22,0.8)',
          hoverBorderColor: 'rgba(123, 138, 22,1)',
          borderCapStyle: 'round',
          data: [12, 15, 40, 22, 56, 85, 20]
        },
    ]
};

class AreaChart extends React.Component {

    render() {
        return (
            <div>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }
}

export default AreaChart;