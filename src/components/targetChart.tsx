"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import RealitySales from "../../public/images/sales-icon/reality-sales.svg";
import TargetSales from "../../public/images/sales-icon/target-sales.svg";
import Image from "next/image";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TargetChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      height: 400,
      width: "100%",
    },
    colors: ["#4AB58E", "#FFCF00"], // Green & Yellow
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "58%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
      labels: {
        style: {
          fontFamily: "Poppins, sans-serif",
          fontSize: "14px",
          colors: "#727272",
        },
      },
    },
    yaxis: {
      labels: { show: false },
    },
    grid: { show: false },
    legend: { show: false },
    dataLabels: { enabled: false },
  };

  const series = [
    {
      name: "Reality Sales",
      data: [8000, 7500, 7200, 9100, 10300, 10800, 9900],
    },
    {
      name: "Target Sales",
      data: [10000, 9700, 11500, 9800, 13400, 14000, 13500],
    },
  ];

  const realitySales = series[0].data.reduce((a, b) => a + b);
  const targetSales = series[1].data.reduce((a, b) => a + b);

  return (
    <>
      <Chart options={options} series={series} type="bar" />
      <div className="flex flex-row items-center justify-start gap-4 mt-8">
        <Image src={RealitySales} alt="reality sales" width={36} height={36} />
        <div className="flex-1">
          <h3 className="text-[12px] font-semibold text-gray-900">
            Reality Sales
          </h3>
          <p className="text-[10px] font-normal text-[#737791]">Global</p>
        </div>
        <p className="text-[14px] font-medium text-[#27AE60]">{realitySales}</p>
      </div>

      {/* Target Sales */}
      <div className="flex flex-row items-center justify-start gap-4 mt-4">
        <Image src={TargetSales} alt="reality sales" width={36} height={36} />
        <div className="flex-1">
          <h3 className="text-[12px] font-semibold text-gray-900">
            Target Sales
          </h3>
          <p className="text-[10px] font-normal text-[#737791]">Commercial</p>
        </div>
        <p className="text-[14px] font-medium text-[#FFA412]">{targetSales}</p>
      </div>
    </>
  );
};

export default TargetChart;
