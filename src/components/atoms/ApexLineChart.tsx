import { useTheme } from "@mui/system";
import { FC } from "react";
import ApexChart, { ApexDropShadow } from "./ApexChart";

interface Prop {
  colors: string[];
  seriesData: object[];
  height: number | string;
}
const ApexLineChart: FC<Prop> = ({ colors, height, seriesData }) => {
  const theme = useTheme();

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
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    tooltip: {
      enabled: true,
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
        size: 4,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
    },
    theme: {
      mode: theme.palette.mode,
    },
    grid: {
      show: true,
      borderColor: theme.palette.grey[300],
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 20,
        bottom: 0,
        left: 10,
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
        show: true,
      },
    },
  };

  return (
    <div>
      <ApexChart
        options={options}
        series={seriesData}
        type="line"
        width="100%"
        height={height}
      />
    </div>
  );
};

export default ApexLineChart;
