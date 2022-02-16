
import useDemoConfig from "./sample";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function AreaChart() {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
      ()=>([
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
        // OR
        // elementType: "area",
      },
    ],
    []
  ));

  return (
    <>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
    </>
  );
}