import CustomAccordion from "@components/atoms/CustomAccordion";
import CustomBox from "@components/atoms/CustomBox";
import CustomSidenav from "@components/atoms/CustomSidenav";
import NextImage from "@components/atoms/NextImage";
import NextLink from "@components/atoms/NextLink";
import { Menu } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import navbarNavigations from "@shared/navbarNavigations";
import React, { useState } from "react";

const Sidenav = () => {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen((open) => !open);
  };

  const renderButton = (title: string) => {
    return (
      <Button
        fullWidth
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          mb: "0.25rem",
        }}
        onClick={toggleSidenav}
      >
        {title}
      </Button>
    );
  };

  return (
    <CustomSidenav
      open={isSidenavOpen}
      toggleSidenav={toggleSidenav}
      handle={
        <IconButton
          sx={{
            display: "none",
            "@media screen and (max-width: 1200px)": {
              display: "block",
            },
          }}
        >
          <Menu />
        </IconButton>
      }
    >
      <CustomBox sx={{ p: "1rem", width: "100%" }}>
        <NextLink href="/" sx={{ display: "block", mb: "1.25rem" }}>
          <NextImage
            src="/assets/trackem-logo-full.svg"
            width={176}
            height={45}
            layout="fixed"
          />
        </NextLink>

        {navbarNavigations.map((item) =>
          item.children ? (
            <CustomAccordion
              title={item.title}
              buttonSx={{ mb: "0.25rem" }}
              key={item.title}
            >
              <CustomBox sx={{ bgcolor: "grey.100", borderRadius: "8px" }}>
                {item.children.map((child) => (
                  <NextLink href={`${child.url}`} key={child.title}>
                    {renderButton(child.title)}
                  </NextLink>
                ))}
              </CustomBox>
            </CustomAccordion>
          ) : (
            <NextLink href={item.url || "/"} key={item.title}>
              {renderButton(item.title)}
            </NextLink>
          ),
        )}
      </CustomBox>
    </CustomSidenav>
  );
};

export default Sidenav;
