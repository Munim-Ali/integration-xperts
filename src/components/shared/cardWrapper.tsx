import React from "react";

type CardProps = {
  width: string;
  children: React.ReactNode;
};

const CardWrapper = ({ width, children }: CardProps) => {
  return (
    <>
      <section
        className={`${width} bg-white card-shadow rounded-2xl border border-[#F8F9FA] p-6 flex flex-col items-stretch justify-start 3xl:justify-start mb-8`}
      >
        {children}
      </section>
    </>
  );
};

export default CardWrapper;
