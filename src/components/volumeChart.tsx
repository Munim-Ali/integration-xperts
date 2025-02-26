"use client";

import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import Image from "next/image";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const VolumeChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    colors: ["#0095FF", "#00E096"],
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        show: false,
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
      name: "Services",
      data: [400, 600, 550, 500, 350, 400], // Green values
    },
    {
      name: "Volume",
      data: [600, 900, 750, 700, 500, 550], // Blue values
    },
  ];

  const totalService = series[0].data.reduce((a, b) => a + b);
  const totalVolume = series[1].data.reduce((a, b) => a + b);

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="bar" height={300} />
      {/* Legend */}
      <div className="w-full h-[2px] border-t border-[#EDF2F6]"></div>
      <div className="w-full flex flex-row items-center justify-center mt-4">
        <div className="flex flex-row items-start justify-center gap-3 border-r  border-[#BDC9D3] pr-4">
          <div className="w-3 h-3 bg-[#0095FF] rounded-full mt-[5px]"></div>
          <div>
            <h4 className="text-[#96A5B8] text-[14px] capitalize">Volume</h4>
            <p className="text-[12px] text-[#222B45] font-medium">
              ${totalVolume}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-3 pl-4">
          <div className="w-3 h-3 bg-[#00E096] rounded-full mt-[5px]"></div>
          <div>
            <h4 className="text-[#96A5B8] text-[14px] capitalize">Services</h4>
            <p className="text-[12px] text-[#222B45] font-medium">
              ${totalService}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeChart;
