import CardWrapper from "@/components/shared/cardWrapper";
import ExportIcon from "../../../public/images/export-Icon.svg";
import sales from "../../../public/images/sales-icon/sales.svg";
import order from "../../../public/images/sales-icon/order.svg";
import sold from "../../../public/images/sales-icon/sold.svg";
import customers from "../../../public/images/sales-icon/customers.svg";
import React from "react";
import Image from "next/image";
import SalesCards from "@/components/salesCards";
import CustomerTrendsChart from "@/components/apexLineChart";
import RevenueChart from "@/components/revenueChart";
import CustomerSatisfaction from "@/components/customerChart";
import TargetChart from "@/components/targetChart";
import ProductsTable from "@/components/productsTable";
import VolumeChart from "@/components/volumeChart";

const Dashboard = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-3 flex-1">
        <CardWrapper width="w-full lg:w-[59%]">
          <div className="w-full flex flex-row items-center justify-between">
            <div>
              <h3 className="text-[18px] font-semibold text-[#05004E]">
                Today’s Sales
              </h3>
              <p className="text-[14px] text-gray font-normal mt-1">
                Sales Summery
              </p>
            </div>
            <div className="">
              <button className="flex flex-row items-center justify-between border gap-1 border-[#C3D3E2] text-[#0F3659] text-[14px] py-2 px-4 rounded-md">
                <Image
                  src={ExportIcon}
                  width={16}
                  height={16}
                  alt="export icon"
                />
                Export
              </button>
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-between gap-3  flex-wrap mt-8">
            <SalesCards
              bgColor="bg-[#FFE2E5]"
              image={sales}
              number="$1k"
              description="Total Sales"
              pnl={8}
            />
            <SalesCards
              bgColor="bg-[#fff4de]"
              image={order}
              number="300"
              description="Total Order"
              pnl={5}
            />
            <SalesCards
              bgColor="bg-[#DCFCE7]"
              image={sold}
              number="5"
              description="Total Sold"
              pnl={5}
            />
            <SalesCards
              bgColor="bg-[#F3E8FF]"
              image={customers}
              number="8"
              description="New Customers"
              pnl={1.2}
            />
          </div>
        </CardWrapper>

        <CardWrapper width="w-full lg:w-[41%]">
          <h3 className="text-[18px] font-semibold text-[#05004E]">
            Visitor Insights
          </h3>
          <div className="w-full">
            <CustomerTrendsChart />
          </div>
        </CardWrapper>
      </section>

      <section className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-3 flex-1 mt-6">
        <CardWrapper width="w-full lg:w-[42%]">
          <h3 className="text-[18px] font-semibold text-[#05004E]">
            Total Revenue
          </h3>
          <div className="w-full">
            <RevenueChart />
          </div>
        </CardWrapper>
        <CardWrapper width="w-full lg:w-[30%]">
          <h3 className="text-[18px] font-semibold text-[#05004E]">
            Customer Satisfaction
          </h3>
          <div className="w-full">
            <CustomerSatisfaction />
          </div>
        </CardWrapper>
        <CardWrapper width="w-full lg:w-[28%]">
          <h3 className="text-[18px] font-semibold text-[#05004E]">
            Target vs Reality
          </h3>
          <div className="w-full">
            <TargetChart />
          </div>
        </CardWrapper>
      </section>

      <section className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-3 flex-1 mt-6">
        <CardWrapper width="w-full lg:w-[42%]">
          <h3 className="text-[18px] font-semibold text-[#05004E]">
            Top Products
          </h3>
          <div className="w-full mt-4">
            <ProductsTable />
          </div>
        </CardWrapper>
        <CardWrapper width="w-full lg:w-[30%]">
          <h3 className="text-[18px] font-semibold text-[#05004E]">
            Sales Mapping by Country
          </h3>
          <div className="w-full"></div>
        </CardWrapper>
        <CardWrapper width="w-full lg:w-[28%]">
          <h3 className="text-[18px] font-semibold text-[#05004E]">
            Volume vs Service Level
          </h3>
          <div className="w-full">
            <VolumeChart />
          </div>
        </CardWrapper>
      </section>
    </>
  );
};

export default Dashboard;
