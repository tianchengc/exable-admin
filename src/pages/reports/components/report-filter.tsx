import React from "react";
import "../style.css";

const ReportFilter: React.FC = () => {
  return (
    <div className="section p-5">
      <div className="filter-box p-5 pt-2 ">
        <h3 className="text-lg my-2">Report filter</h3>
        <form>
          <label>
            <input type="checkbox" /> Cycle
          </label>
          <label>
            <input type="checkbox" /> Class
          </label>
          <label>
            <input type="checkbox" /> Site
          </label>
          <label>
            <input type="checkbox" /> New/existing
          </label>
          <label>
            <input type="checkbox" /> Start/end
          </label>
          <label className="!text-primary-color">
            <input type="checkbox" /> Select all cycles
          </label>
        </form>
      </div>
      </div>
  );
};

export default ReportFilter;
