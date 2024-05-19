import React from "react";
import radio from "/images/icon-radio-selected.svg";

const QueryType = () => {
  return (
    <div className="w-full mt-4">
      <span>Query Type</span>

      <section className="grid grid-cols-1 mt-2 sm:grid-cols-2 gap-5">
        <label className="cursor-pointer transition-all focus-within:bg-lightgreen flex gap-2 border border-mediumgray rounded-[6px] py-2 pl-4">
          <input className="w-4" type="radio" id="general" name="query" />
          <img className="w-4" src={radio} alt="radioIcon" />
          <span>General Enquiry</span>
        </label>

        <label className="cursor-pointer transition-all focus-within:bg-lightgreen flex gap-2 border border-mediumgray rounded-[6px] py-2 pl-4">
          <input className="w-4" type="radio" id="support" name="query" />
          <img className="w-4" src={radio} alt="radioIcon" />
          <span>Support Request</span>
        </label>
      </section>
    </div>
  );
};

export default QueryType;
