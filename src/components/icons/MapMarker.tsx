import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const MapMarker = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.23828 10.3915C4.25269 6.15089 7.70204 2.7249 11.9426 2.7393C16.1832 2.75371 19.6092 6.20306 19.5948 10.4437V10.5306C19.5426 13.2871 18.0035 15.835 16.1165 17.8263C15.0374 18.9469 13.8323 19.939 12.5252 20.7828C12.1757 21.0851 11.6573 21.0851 11.3078 20.7828C9.35935 19.5145 7.64922 17.9133 6.25567 16.0523C5.01363 14.4296 4.30845 12.4599 4.23828 10.4176L4.23828 10.3915Z"
        stroke="#5660B2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle
        cx="11.9159"
        cy="10.539"
        r="2.46087"
        fill="none"
        stroke="#5660B2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default MapMarker;
