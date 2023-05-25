import React, { useEffect, useRef } from 'react';
import Chart from 'chart';

const SalesChart = () => {
  const salesChartRef = useRef(null);

  useEffect(() => {
    const ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold',
    };

    const mode = 'index';
    const intersect = true;

    const salesChart = new Chart(salesChartRef.current, {
      type: 'bar',
      data: {
        labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            data: [1000, 2000, 3000, 2500, 2700, 2500, 3000],
          },
          {
            backgroundColor: '#ced4da',
            borderColor: '#ced4da',
            data: [700, 1700, 2700, 2000, 1800, 1500, 2000],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          mode: mode,
          intersect: intersect,
        },
        hover: {
          mode: mode,
          intersect: intersect,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                lineWidth: '4px',
                color: 'rgba(0, 0, 0, .2)',
                zeroLineColor: 'transparent',
              },
              ticks: {
                ...ticksStyle,
                beginAtZero: true,
                callback: function (value) {
                  if (value >= 1000) {
                    value /= 1000;
                    value += 'k';
                  }
                  return '$' + value;
                },
              },
            },
          ],
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
              ticks: ticksStyle,
            },
          ],
        },
      },
    });

    return () => {
      salesChart.destroy();
    };
  }, []);

  return <canvas ref={salesChartRef} id="sales-chart" />;
};

const VisitorsChart = () => {
  const visitorsChartRef = useRef(null);

  useEffect(() => {
    const ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold',
    };

    const mode = 'index';
    const intersect = true;

    const visitorsChart = new Chart(visitorsChartRef.current, {
      type: 'line',
      data: {
        labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
        datasets: [
          {
            type: 'line',
            data: [100, 120, 170, 167, 180, 177, 160],
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            pointBorderColor: '#007bff',
            pointBackgroundColor: '#007bff',
            fill: false,
          },
          {
            type: 'line',
            data: [60, 80, 70, 67, 80, 77, 100],
            backgroundColor: 'transparent',
            borderColor: '#ced4da',
            pointBorderColor: '#ced4da',
            pointBackgroundColor: '#ced4da',
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          mode: mode,
          intersect: intersect,
        },
        hover: {
          mode: mode,
          intersect: intersect,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                lineWidth: '4px',
                color: 'rgba(0, 0, 0, .2)',
                zeroLineColor: 'transparent',
              },
              ticks: {
                ...ticksStyle,
                beginAtZero: true,
                suggestedMax: 200,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
              ticks: ticksStyle,
            },
          ],
        },
      },
    });

    return () => {
      visitorsChart.destroy();
    };
  }, []);

  return <canvas ref={visitorsChartRef} id="visitors-chart" />;
};

const MyComponent = () => {
  return (
    <div>
      <SalesChart />
      <VisitorsChart />
    </div>
  );
};

export default MyComponent
