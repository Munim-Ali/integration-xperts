"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import blueLegend from "../../public/images/sales-icon/customer-legend-blue.svg";
import greenLegend from "../../public/images/sales-icon/customer-legend-green.svg";
import Image from "next/image";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CustomerSatisfaction = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    colors: ["#007bff", "#00c853"], // Blue & Green
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.4,
        opacityFrom: 0.3,
        opacityTo: 0,
      },
    },
    markers: {
      size: 5,
      hover: { size: 7 },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: { show: false }, // Hide X-axis labels
      axisBorder: { show: false }, // Hide X-axis border
      axisTicks: { show: false }, // Hide X-axis ticks
    },
    yaxis: {
      labels: { show: false }, // Hide Y-axis labels
      axisBorder: { show: false }, // Hide Y-axis border
      axisTicks: { show: false }, // Hide Y-axis ticks
    },
    grid: { show: false }, // Hide grid lines
    legend: { show: false }, // **Hides the legend**
  };

  const series = [
    {
      name: "Last Month",
      data: [3000, 2800, 2600, 2700, 2900, 3100, 3500, 4000],
    },
    {
      name: "This Month",
      data: [3500, 3300, 3200, 3400, 3600, 3700, 3900, 4500],
    },
  ];

  const totalLastMonth = series[0].data.reduce((a, b) => a + b, 0);
  const totalThisMonth = series[1].data.reduce((a, b) => a + b, 0);

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="area" height={300} />

      <div className="w-full h-[2px] border-t border-[#EDF2F6]"></div>
      <div className="w-full flex flex-row items-center justify-center mt-4">
        <div className="flex flex-row items-start justify-center gap-3 border-r  border-[#BDC9D3] pr-4">
          <Image
            src={blueLegend}
            width={20}
            height={9}
            alt="Last Month"
            className="mt-[7px]"
          />
          <div>
            <h4 className="text-[#96A5B8] text-[14px] capitalize">
              Last Month
            </h4>
            <p className="text-[12px] text-[#222B45] font-medium">
              ${totalLastMonth}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-3 pl-4">
          <Image
            src={greenLegend}
            width={20}
            height={9}
            alt="Last Month"
            className="mt-[7px]"
          />
          <div>
            <h4 className="text-[#96A5B8] text-[14px] capitalize">
              This Month
            </h4>
            <p className="text-[12px] text-[#222B45] font-medium">
              ${totalThisMonth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
