import React, { FC, ReactNode } from "react";
import { List, SxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ListItem } from "@mui/material";

const StyledList = styled(ListItem)(({ theme }) => ({
  padding: "12px 16px",
  color: theme.palette.primary.main,
  //   "&:hover": {
  //     color: theme.palette.text.primary,
  //     backgroundColor: "rgba(0, 0, 0, 0.04)",
  //   },
}));

interface Props {
  children: ReactNode;
  sx?: SxProps;
}
const CustomListItem: FC<Props> = (props) => {
  const { children, sx } = props;

  return <StyledList sx={sx}>{children}</StyledList>;
};

export default CustomListItem;
