import CustomBox from "@components/atoms/CustomBox";
import { NAVBAR_HEIGHT } from "@shared/constants";
import React, { Fragment } from "react";
import Navbar from "./Navbar";

const AppLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <div>
        <Navbar />
        <CustomBox sx={{ marginTop: `calc(${NAVBAR_HEIGHT}px + 1.5rem)` }}>
          {children}
        </CustomBox>
      </div>
    </Fragment>
  );
};

export default AppLayout;
