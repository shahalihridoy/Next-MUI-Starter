import { FC } from "react";
import ApexChart from "./ApexChart";

interface Prop {
  color: string;
  data: any;
  height: number | string;
}
const ApexAreaChart: FC<Prop> = ({ color, data, height }) => {
  const series = [
    {
      name: "A",
      data: data,
    },
  ];
  const options: { [key: string]: any } = {
    chart: {
      type: "area",
      id: "apexAreaChart",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [color],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      crosshairs: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 3,
      colors: "white",
      strokeColors: color,
      hover: {
        size: 6,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: -20,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <ApexChart
      options={options}
      series={series}
      type="area"
      height={height}
      width={"100%"}
    />
  );
};

export default ApexAreaChart;
