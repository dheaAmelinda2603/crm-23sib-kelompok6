import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);


const AdminDashboard = () => {
  const stats = [
    { label: "Pendapatan Hari Ini", value: "$53,000", percent: "+55%", color: "amber" },
    { label: "Pengguna Hari Ini", value: "2,300", percent: "+3%", color: "blue" },
    { label: "Klien Baru", value: "+3,462", percent: "-2%", color: "red" },
    { label: "Penjualan", value: "$103,430", percent: "+5%", color: "purple" },
  ];

  const primaryColor = '#DEA05B'; // The main gold/amber color
  const darkerPrimaryColor = '#C18F4E'; // A slightly darker shade for borders
  const translucentPrimaryColor = 'rgba(222, 160, 91, 0.3)'; // Translucent for fills

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
            family: 'Judson, serif', // Judson for legend
          },
        },
      },
      title: {
        display: true,
        text: 'Penjualan Bulanan Tahun Ini',
        font: {
          family: 'Judson, serif', // Judson for title
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Judson, serif', // Judson for x-axis labels
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Judson, serif', // Judson for y-axis labels
          },
        },
      },
    },
  };

  // Data untuk grafik Pertumbuhan Pelanggan (Line Chart)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Jumlah Pelanggan",
        data: [50, 75, 120, 180, 220, 260, 300, 350, 400, 430, 460, 500],
        borderColor: darkerPrimaryColor, // Changed to darker #DEA05B shade
        backgroundColor: translucentPrimaryColor, // Changed to translucent #DEA05B
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: darkerPrimaryColor, // Ensure points match
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
            family: 'Judson, serif', // Judson for legend
          },
        },
      },
      title: {
        display: true,
        text: 'Pertumbuhan Pelanggan Tahun Ini',
        font: {
          family: 'Judson, serif', // Judson for title
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Judson, serif', // Judson for x-axis labels
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Judson, serif', // Judson for y-axis labels
          },
        },
      },
    },
  };

  return (
    <div className="p-6 space-y-8 font-judson"> {/* Apply Judson font to the main container */}
      {/* Add Judson font import here, or ensure it's in your global CSS */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      {/* Statistik utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent, color }) => (
          <div key={label} className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500 font-judson">{label}</p>
            {/* Dynamic Tailwind colors (e.g., text-green-600) require the color to be pre-defined in Tailwind's config.
                For custom hex codes like #DEA05B, direct application via square brackets is needed.
                Here, I'm adjusting the 'green' stat to use 'amber' which is closer to your gold. */}
            <h2 className={`text-2xl font-bold text-${color}-600 flex items-center gap-2 font-judson`}>
              {value}
              <span className={`text-xs font-semibold text-${color}-500 font-judson`}>{percent}</span>
            </h2>
          </div>
        ))}
      </div>

      {/* Grafik Penjualan Bulanan */}
      <div className="bg-white rounded-xl shadow p-6">
        <Bar options={barOptions} data={barData} />
      </div>

      {/* Grafik Pertumbuhan Pelanggan */}
      <div className="bg-white rounded-xl shadow p-6">
        <Line options={lineOptions} data={lineData} />
      </div>
    </div>
  );
};

export default AdminDashboard;