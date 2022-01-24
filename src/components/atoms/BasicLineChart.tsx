import { useTheme } from "@mui/system";
import { FC } from "react";
import ApexChart, { ApexDropShadow } from "./ApexChart";

interface Prop {
  color: string;
  seriesData: number[];
  height: number | string;
}
const BasicLineChart: FC<Prop> = ({ color, height, seriesData }) => {
  const theme = useTheme();
  const series = [
    {
      name: "A",
      data: seriesData,
    },
  ];
  const options: object = {
    chart: {
      type: "line",
      background: "transparent",
      dropShadow: ApexDropShadow,
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
    stroke: {
      curve: "smooth",
      width: 3,
    },
    tooltip: {
      enabled: false,
      followCursor: true,
      marker: {
        show: true,
      },
    },
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "rgba(102, 51, 153, 0.8)",
      hover: {
        size: 6,
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    grid: {
      show: false,
      borderColor: theme.palette.grey[300],
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 6,
        bottom: 0,
        left: 0,
      },
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
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  return (
    <div>
      <ApexChart
        options={options}
        series={series}
        type="line"
        width="100%"
        height={height}
      />
    </div>
  );
};

export default BasicLineChart;
