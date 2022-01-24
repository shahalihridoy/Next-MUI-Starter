import { FC } from "react";
import ApexChart from "./ApexChart";

interface Prop {
  colors: string[];
  labels: string[];
  labelColors: string[];
  seriesData: object[];
  height: number | string;
}
const ApexBarChart: FC<Prop> = (props) => {
  const { colors, labelColors, seriesData, labels, height } = props;

  const options: { [key: string]: any } = {
    chart: {
      type: "bar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        horizontal: true,
        distributed: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: colors,
    labels: [
      "Apples",
      "Oranges",
      "Berries",
      "Grapes",
      "Oranges",
      "Berries",
      "Grapes",
    ],
    dataLabels: {
      offsetX: -50,
      enabled: true,
      textAnchor: "start",
      style: {
        colors: labelColors,
      },
      formatter: (val: any, opt: any) => {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      dropShadow: {
        enabled: true,
      },
    },
    grid: {
      show: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 10,
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: labels,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };
  return (
    <ApexChart
      type="bar"
      options={options}
      series={seriesData}
      height={height}
      width={"100%"}
    />
  );
};

export default ApexBarChart;
