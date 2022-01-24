import { useTheme } from "@mui/system";
import { FC } from "react";
import ApexChart, { ApexDropShadow } from "./ApexChart";

interface Prop {
  color?: string;
  seriesData: number[];
  height?: number | string;
}
const GaugeChart: FC<Prop> = ({ color, height = 280, seriesData }) => {
  const theme = useTheme();

  //   https://apexcharts.com/docs/chart-types/radialbar-gauge/
  const options: object = {
    colors: [theme.palette.primary.main],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450",
        },
        track: {
          dropShadow: ApexDropShadow,
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "14px",
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Memory Usage"],
  };

  return (
    <div>
      <ApexChart
        options={options}
        series={seriesData}
        type="radialBar"
        width="100%"
        height={height}
      />
    </div>
  );
};

export default GaugeChart;
