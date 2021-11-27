import { Card, SvgIconProps } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import CustomBox from "./CustomBox";
import CustomFlexBox from "./CustomFlexBox";
import { H5 } from "./Typography";

interface FormCardProps {
  title: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  sx?: SxProps;
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  icon: Icon,
  sx,
  children,
}) => {
  return (
    <Card>
      <CustomFlexBox
        sx={{
          padding: 2,
          alignItems: "center",
          bgcolor: "primary.main",
          marginBottom: "0.5rem",
        }}
      >
        <H5 color="white" mr={1}>
          {title}
        </H5>
        {Icon && <Icon fontSize="small" sx={{ color: "background.paper" }} />}
      </CustomFlexBox>
      <CustomBox sx={{ padding: 2, ...sx }}>{children}</CustomBox>
    </Card>
  );
};

export default FormCard;
