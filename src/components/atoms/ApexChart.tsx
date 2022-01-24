import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const ApexDropShadow = {
  enabled: true,
  top: 2,
  left: 0,
  blur: 4,
  opacity: 0.15,
};

export default ApexChart;
