import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const DeleteIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 21">
      <g>
        <path
          d="M16 2.46154H11.0769V1.84615C11.0769 0.828184 10.2488 0 9.23077 0H6.76923C5.75122 0 4.92308 0.828184 4.92308 1.84615V2.46154H0V6.15385H1.28197L2.41362 19.1689C2.46248 20.1538 3.26954 20.9231 4.25748 20.9231H11.7425C12.7304 20.9231 13.5375 20.1538 13.5863 19.1689L14.718 6.15385H16V2.46154ZM6.15385 1.84615C6.15385 1.50683 6.42991 1.23077 6.76923 1.23077H9.23077C9.57013 1.23077 9.84615 1.50683 9.84615 1.84615V2.46154H6.15385V1.84615ZM1.23077 3.69231H14.7692V4.92308H1.23077V3.69231ZM12.3574 19.1025C12.3436 19.4332 12.0735 19.6923 11.7425 19.6923H4.25748C3.92648 19.6923 3.65641 19.4333 3.64263 19.1025C2.43861 5.24788 2.52094 6.1952 2.51733 6.15385H13.4827C13.4794 6.19097 13.556 5.30999 12.3574 19.1025Z"
          fill="#091155"
        />
      </g>
    </SvgIcon>
  );
};

export default DeleteIcon;