import React from "react";
import { Chart } from "react-google-charts";


export function DataChart() {
    return (
        <Chart
            chartType="Line"
            width="100%"
            height="400px"
        />
    );
}