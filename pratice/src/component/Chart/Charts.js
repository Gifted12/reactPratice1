import React from "react";
import ChartBar from "./ChartBar";
import "./Charts.css";

function Charts(props) {
  const dataPointValues = props.dataPoint.map(dataPoints => dataPoints.value);
  const totalMaximum = Math.max(...dataPointValues);
  
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
}

export default Charts;
