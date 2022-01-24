import { FC } from "react";
import ApexChart, { ApexDropShadow } from "./ApexChart";

interface Props {
  height: number;
  seriesData: number[];
  colors: string[];
  labels: string[];
}
const PieChart: FC<Props> = (props) => {
  const { seriesData, colors, labels, height } = props;

  const options: object = {
    chart: {
      dropShadow: ApexDropShadow,
    },
    colors: colors,
    stroke: {
      show: false,
    },
    labels: labels,
    legend: {
      show: true,
      fontSize: "14px",
      position: "bottom",
      horizontalAlign: "center",
    },
    dataLabels: {
      enabled: false,
    },
  };
  return (
    <ApexChart
      options={options}
      series={seriesData}
      type="pie"
      height={height}
    />
  );
};

export default PieChart;
