import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const ShoppingBag = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 20 22">
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.546 6.75817C19.546 6.17241 19.0711 5.69756 18.4854 5.69756H15.3036C15.3036 2.76878 12.9293 0.394531 10.0005 0.394531C7.07175 0.394531 4.6975 2.76878 4.6975 5.69756H1.51568C0.929928 5.69756 0.455078 6.17241 0.455078 6.75817V19.4854C0.455078 20.657 1.40478 21.6067 2.57629 21.6067H17.4248C18.5963 21.6067 19.546 20.657 19.546 19.4854V6.75817ZM10.0005 2.51574C11.7578 2.51574 13.1824 3.94029 13.1824 5.69756H6.81871C6.81871 3.94029 8.24326 2.51574 10.0005 2.51574ZM2.57629 7.81877V19.4854H17.4248V7.81877H15.3036V9.40968C15.3036 9.70256 15.0661 9.93999 14.7733 9.93999H13.7127C13.4198 9.93999 13.1824 9.70256 13.1824 9.40968V7.81877H6.81871V9.40968C6.81871 9.70256 6.58129 9.93999 6.28841 9.93999H5.22781C4.93493 9.93999 4.6975 9.70256 4.6975 9.40968V7.81877H2.57629Z"
          fill="#6B77D7"
        />
      </g>
    </SvgIcon>
  );
};

export default ShoppingBag;