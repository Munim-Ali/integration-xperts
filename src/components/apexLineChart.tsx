"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CustomerTrendsChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Loyal Customers",
        data: [320, 300, 280, 250, 270, 310, 340, 360, 100, 300, 290, 280],
      },
      {
        name: "New Customers",
        data: [280, 260, 250, 240, 290, 330, 400, 380, 350, 310, 290, 270],
      },
      {
        name: "Unique Customers",
        data: [250, 320, 310, 270, 260, 290, 350, 370, 340, 310, 300, 280],
      },
    ],
    options: {
      chart: {
        type: "line",
        fontFamily: "'Poppins', sans-serif",
        toolbar: { show: false },
      },
      stroke: {
        curve: "smooth",
        width: 4, // Line thickness
      },

      colors: ["#A700FF", "#EF4444", "#3CD856"],
      markers: {
        size: 0,
        strokeWidth: 2,
        hover: { size: 8 },
      },
      grid: { show: false },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: { fontFamily: "'Poppins', sans-serif", fontSize: "12px" },
        },
      },
      yaxis: {
        labels: {
          style: { fontFamily: "'Poppins', sans-serif", fontSize: "12px" },
          formatter: (value) => (value % 100 === 0 ? value.toString() : ""),
        },
        min: 100,
        max: 400,
        tickAmount: 3,
      },
      legend: {
        position: "bottom",
        fontFamily: "'Poppins', sans-serif",
        markers: { width: 5, height: 5 },
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
    } as ApexOptions,
  });

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={200}
    />
  );
};

export default CustomerTrendsChart;
