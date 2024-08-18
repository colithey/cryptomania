import { FC } from 'react';
import Chart from 'react-google-charts';
import style from './LineChart.module.scss';

export interface LineChartProps {
    data: {
        prices: [number, number][],
        market_caps: [number, number][],
        total_volumes: [number, number][]
    }
}

export const LineChart: FC<LineChartProps> = ({ data }) => {

    const chartData = [
        ['Date', 'Price'],
        ...data.prices.map(item => [new Date(item[0]).toLocaleDateString().slice(0, -5), item[1]])
    ]
    const options = {
        chart: {
            title: 'Price Trend',
            subtitle: 'Price over time'
        },
        colors: ['#000'],
        backgroundColor: 'transparent',
        hAxis: {
            textStyle: {
                color: '#000'
            },
            titleTextStyle: {
                color: '#000'
            }
        },
        vAxis: {
            textStyle: {
                color: '#000'
            },
            titleTextStyle: {
                color: '#000'
            }
        },
        legend: {
            textStyle: {
                color: '#000'
            }
        },
        lineWidth: 1,
        pointSize: 4,
    }


    return (
        <div className={style.lineChartContainer}>
            <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={chartData}
            options={options}
        />
        </div>
    );
};
