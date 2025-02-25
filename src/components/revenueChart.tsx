"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    colors: ["#0095FF", "#00E096"], // Blue & Green
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      labels: {
        style: { fontFamily: "Arial, sans-serif", fontSize: "12px" },
        rotate: 0,
      },
    },
    yaxis: {
      labels: { style: { fontFamily: "Arial, sans-serif", fontSize: "12px" } },
    },
    legend: {
      position: "bottom",
      fontFamily: "'Poppins', sans-serif",
      //   markers: { width: 5, height: 5 },
    },
    grid: { show: true },
    dataLabels: { enabled: false },
  };

  const series = [
    {
      name: "Online Sales",
      data: [13000, 17000, 5000, 15000, 12000, 16000, 21000],
    },
    {
      name: "Offline Sales",
      data: [12000, 11000, 22000, 6000, 10000, 13000, 11000],
    },
  ];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default RevenueChart;
