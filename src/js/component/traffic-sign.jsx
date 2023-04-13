import React from "react";

//create your first component
export const TrafficSign = () => {
  return (
    <div className="wrapper">
      <div id="trafficTop"></div>
      <div id="container">
        <div className="ligth red"></div>
        <div className="ligth yellow selected"></div>
        <div className="ligth green"></div>
      </div>
    </div>
  );
};
