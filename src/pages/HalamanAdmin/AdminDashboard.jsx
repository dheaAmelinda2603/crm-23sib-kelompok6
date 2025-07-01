import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend,} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register( CategoryScale,LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const stats = [
    { label: "Pendapatan Hari Ini", value: "$53,000", percent: "+55%", color: "amber" },
    { label: "Pengguna Hari Ini", value: "2,300", percent: "+3%", color: "blue" },
    { label: "Klien Baru", value: "+3,462", percent: "-2%", color: "red" },
    { label: "Penjualan", value: "$103,430", percent: "+5%", color: "purple" },
  ];

  const primaryColor = '#DEA05B'; 
  const darkerPrimaryColor = '#C18F4E'; 
  const translucentPrimaryColor = 'rgba(222, 160, 91, 0.3)'; 

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Penjualan (dalam ribuan $)",
        data: [12, 19, 14, 17, 22, 30, 28, 26, 32, 35, 40, 45],
        backgroundColor: primaryColor, 
        borderColor: darkerPrimaryColor, 
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Judson, serif', 
          },
        },
      },
      title: {
        display: true,
        text: 'Penjualan Bulanan Tahun Ini',
        font: {
          family: 'Judson, serif',
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Judson, serif', 
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Judson, serif', 
          },
        },
      },
    },
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Jumlah Pelanggan",
        data: [50, 75, 120, 180, 220, 260, 300, 350, 400, 430, 460, 500],
        borderColor: darkerPrimaryColor,
        backgroundColor: translucentPrimaryColor,
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: darkerPrimaryColor, 
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Judson, serif',
          },
        },
      },
      title: {
        display: true,
        text: 'Pertumbuhan Pelanggan Tahun Ini',
        font: {
          family: 'Judson, serif', 
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Judson, serif', 
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Judson, serif', 
          },
        },
      },
    },
  };

  return (
    <div className="p-6 space-y-8 font-judson"> 
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent, color }) => (
          <div key={label} className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500 font-judson">{label}</p>
            <h2 className={`text-2xl font-bold text-${color}-600 flex items-center gap-2 font-judson`}>
              {value}
              <span className={`text-xs font-semibold text-${color}-500 font-judson`}>{percent}</span>
            </h2>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <Bar options={barOptions} data={barData} />
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <Line options={lineOptions} data={lineData} />
      </div>
    </div>
  );
};

export default AdminDashboard;