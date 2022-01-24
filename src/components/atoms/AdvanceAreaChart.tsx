import { FC } from "react";
import { useTheme } from "@mui/system";
import ApexChart from "./ApexChart";

interface Prop {
  colors: any[];
  chartData: any[];
  categories: any[];
  height: number | string;
}
const AdvanceAreaChart: FC<Prop> = (props) => {
  const theme = useTheme();
  const { colors, chartData, categories, height } = props;
  const series = chartData;

  const options: object = {
    chart: {
      type: "area",
      id: "basicAreaChart",
      background: "transparent",
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
    legend: {
      show: false,
    },
    xaxis: {
      categories: categories,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      size: 0,
      colors: "white",
      strokeColors: "#663399",
      hover: {
        size: 6,
      },
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
        right: 5,
        bottom: 0,
        left: 10,
      },
    },
    tooltip: {
      enabled: true,
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

export default AdvanceAreaChart;
