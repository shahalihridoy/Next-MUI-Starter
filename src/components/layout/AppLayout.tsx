import CustomBox from "@components/atoms/CustomBox";
import React, { Fragment } from "react";
import AppBreadcrumb from "./AppBreadcrumb";
import Navbar from "./Navbar";

const AppLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <div>
        <Navbar />
        <AppBreadcrumb />
        <CustomBox sx={{ marginTop: `1.75rem` }}>{children}</CustomBox>
      </div>
    </Fragment>
  );
};

export default AppLayout;
