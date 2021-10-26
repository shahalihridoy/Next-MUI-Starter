import { Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React, { cloneElement, Fragment, useEffect, useState } from "react";

const useStyles = makeStyles(() => ({
  handle: {
    cursor: "pointer",
  },
}));

export interface SidenavProps {
  position?: "left" | "right";
  open?: boolean;
  width?: number | string;
  handle: React.ReactElement;
  toggleSidenav?: () => void;
}

const Sidenav: React.FC<SidenavProps> = ({
  position,
  open,
  width,
  handle,
  children,
  toggleSidenav,
}) => {
  const [sidenavOpen, setSidenavOpen] = useState(open);
  const classes = useStyles();

  const handleToggleSidenav = () => {
    setSidenavOpen(!sidenavOpen);
  };

  useEffect(() => {
    setSidenavOpen(open);
  }, [open]);

  return (
    <Fragment>
      <Drawer
        open={sidenavOpen}
        anchor={position}
        onClose={toggleSidenav || handleToggleSidenav}
        SlideProps={{ style: { width: width || 280 }, unmountOnExit: true }}
      >
        {children}
      </Drawer>

      {handle &&
        cloneElement(handle, {
          className: clsx(handle.props?.className, classes.handle),
          onClick: toggleSidenav || handleToggleSidenav,
        })}
    </Fragment>
  );
};

Sidenav.defaultProps = {
  width: 260,
  position: "left",
  open: false,
};

export default Sidenav;
