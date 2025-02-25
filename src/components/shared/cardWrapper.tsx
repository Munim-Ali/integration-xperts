import React from "react";

type CardProps = {
  width: string;
  children: React.ReactNode;
};

const CardWrapper = ({ width, children }: CardProps) => {
  return (
    <>
      <section
        className={`${width} bg-white card-shadow rounded-2xl border border-[#F8F9FA] p-6 flex flex-col items-stretch justify-between`}
      >
        {children}
      </section>
    </>
  );
};

export default CardWrapper;
