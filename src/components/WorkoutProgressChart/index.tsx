import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Title
} from 'chart.js';

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Title);

const WorkoutChart: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Workout Minutes',
        data: [0, 60, 30, 0, 60, 60, 0],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        pointBorderColor: 'rgba(75,192,192,1)',
        fill: false,
        tension: 0.1
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: true }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Minutes'
        }
      }
    }
  };

  return (
    <div>
      <h2>Weekly Workout Progress</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WorkoutChart;
