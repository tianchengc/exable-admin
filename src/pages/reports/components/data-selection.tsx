import React from "react";
import "../style.css";

const DataSelection: React.FC = () => {
  return (
    <div className="section p-5">
      <div className="filter-box p-5 pt-2 ">
        <h3 className="text-lg my-2">Select Data</h3>
        <form><label>
          <input type="checkbox" />
          <span>Participant profile data</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Tell us more data</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Fitness for Breath Enrolment data</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>CAAT</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>mMRC</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Post-Cycle Questionnaires data</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Group session data</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Assessment data</span>
        </label></form>
      </div>
      </div>
  );
};

export default DataSelection;
