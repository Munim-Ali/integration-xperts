import React from "react";

const products = [
  {
    id: "01",
    name: "Home Decor Range",
    popularity: 45,
    color: "bg-[#0095FF]",
    bgColor: "bg-[#CDE7FF]",
    textColor: "text-[#0095FF]",
    textBgColor: "bg-[#F0F9FF]",
    borderColor: "border-[#0095FF]",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    popularity: 29,
    color: "bg-[#00E096]",
    bgColor: "bg-[#8CFAC7]",
    textColor: "text-[#00E58F]",
    textBgColor: "bg-[#F0FDF4]",
    borderColor: "border-[#00E58F]",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    popularity: 18,
    color: "bg-[#884DFF]",
    bgColor: "bg-[#C5A8FF]",
    textBgColor: "bg-[#FBF1FF]",
    textColor: "text-[#884DFF]",
    borderColor: "border-[#884DFF]",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    popularity: 25,
    color: "bg-[#FF8F0D]",
    bgColor: "bg-[#FFD5A4]",
    textColor: "text-[#FF8900]",
    textBgColor: "bg-[#FEF6E6]",
    borderColor: "border-[#FF8900]",
  },
];

const ProductsTable = () => {
  return (
    <div className="w-full">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[#EDF2F6]">
            <th className="text-[#96A5B8] text-[11px] font-normal py-2">#</th>
            <th className="text-[#96A5B8] text-[11px] font-normal py-2">
              Name
            </th>
            <th className="text-[#96A5B8] text-[11px] font-normal py-2">
              Popularity
            </th>
            <th className="text-[#96A5B8] text-[11px] font-normal py-2 pl-12">
              Sales
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-[#EDF2F6]">
              <td className="w-[5%] py-4 text-[#444A6D] text-[12px] font-normal">
                {product.id}
              </td>
              <td className="w-[45%] py-4 text-[#444A6D] text-[12px] font-normal">
                {product.name}
              </td>
              <td className="py-4 w-[30%] ">
                <div
                  className={`w-full h-1 ${product.bgColor}  rounded-full relative`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-full ${product.color} rounded-full`}
                    style={{ width: `${product.popularity}%` }}
                  ></div>
                </div>
              </td>
              <td className="py-3 w-full pl-12 ">
                <span
                  className={`px-3 py-1 ${product.textBgColor}  text-[12px] font-normal ${product.textColor} border ${product.borderColor} rounded-lg`}
                >
                  {product.popularity}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
