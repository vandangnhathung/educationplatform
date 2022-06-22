import React from "react";

const HeaderStatistic = () => {
  return (
    <div className="header-statistic bg-[#000] p-20">
      <div className="max-w-[826px] mx-auto flex items-center justify-between text-white">
        <div className="header-statistic__info flex flex-col gap-y-2">
          <span className="inline-block text-2xl font-bold">100K+</span>
          <p className="text-base">Total students ours</p>
        </div>
        <div className="header-statistic__info flex flex-col gap-y-2">
          <span className="inline-block text-2xl font-bold">100+</span>
          <p className="text-base">Total courses ours</p>
        </div>
        <div className="header-statistic__info flex flex-col gap-y-2">
          <span className="inline-block text-2xl font-bold">50+</span>
          <p className="text-base">Expert teacher</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderStatistic;
