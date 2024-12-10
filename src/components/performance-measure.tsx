import { FunctionComponent } from 'react';
import '../pages/participant-profile/style.css';

interface PerformanceData {
  pre: {
    sitToStand: number;
    armCurl: number;
    caat: number;
    mmrc: number;
  };
  post: {
    sitToStand: number;
    armCurl: number;
    caat: number;
    mmrc: number;
  };
}

export const PerformanceMeasure: FunctionComponent<{
  data: PerformanceData;
}> = ({ data }) => {
  return (
    <div className="performance-container p-5 pt-2">
      <h3 className="text-lg">Performance measure</h3>
      {/* Pre and Post sections */}
      <div className="performance-sections grid grid-cols-2 gap-4">
        {/* Pre section */}
        <div className="pre-section p-2 pt-0">
          <h4 className="text-center">Pre</h4>
          <div className="metrics-grid">
            <div className="metric">
              <p> Sit to Stand (reps)</p>
              <div className="value">{data.pre.sitToStand}</div>
            </div>
            <div className="metric">
              <p> 30s Arm Curl (reps)</p>
              <div className="value">{data.pre.armCurl}</div>
            </div>
            <div className="metric">
              <p> CAAT</p>
              <div className="value">{data.pre.caat}</div>
            </div>
            <div className="metric">
              <p> mMRC</p>
              <div className="value">{data.pre.mmrc}</div>
            </div>
          </div>
        </div>

        {/* Post section */}
        <div className="post-section p-2 pt-0">
          <h4 className="text-center">Post</h4>
          <div className="metrics-grid">
            <div className="metric">
              <p> Sit to Stand (reps)</p>
              <div className="value">{data.post.sitToStand}</div>
            </div>
            <div className="metric">
              <p> 30s Arm Curl (reps)</p>
              <div className="value">{data.post.armCurl}</div>
            </div>
            <div className="metric">
              <p> CAAT</p>
              <div className="value">{data.post.caat}</div>
            </div>
            <div className="metric">
              <p> mMRC</p>
              <div className="value">{data.post.mmrc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
