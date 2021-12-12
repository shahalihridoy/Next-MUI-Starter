import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const ArchiveBox = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 22 22" fill="none">
      <path
        d="M17.875 18.5625H4.125C3.94266 18.5625 3.7678 18.4901 3.63886 18.3611C3.50993 18.2322 3.4375 18.0573 3.4375 17.875V6.1875L4.8125 3.4375H17.1875L18.5625 6.1875V17.875C18.5625 18.0573 18.4901 18.2322 18.3611 18.3611C18.2322 18.4901 18.0573 18.5625 17.875 18.5625Z"
        stroke="white"
        fill="none"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.08203 12.8965L10.9988 15.8133L13.9156 12.8965"
        stroke="white"
        fill="none"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 8.9375V15.8125"
        stroke="white"
        fill="none"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.4375 6.1875H18.5625"
        stroke="white"
        fill="none"
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default ArchiveBox;
