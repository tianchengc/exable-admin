import { FunctionComponent } from 'react';
import ReportFilter from './components/report-filter';
import DataSelection from './components/data-selection';
import "./style.css";

export const ReportsPage: FunctionComponent = () => {
  return (
    <div className="outer-wrapper p-6">
      <div className="container">
        <ReportFilter />
        <DataSelection />
      </div>
      <div className="button-wrapper flex justify-center">
      <button className="save-button">Export</button>
      </div>
    </div>
    
  );
};
