import NextImage from "@components/atoms/NextImage";
import NextLink from "@components/atoms/NextLink";
import { ArrowDropDown } from "@mui/icons-material";
import { Button, Card, Container, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import { NAVBAR_HEIGHT } from "@shared/constants";
import navbarNavigations from "@shared/navbarNavigations";
import clsx from "clsx";
import React from "react";
import StyledNavLinks from "./NavbarLinks.style";
import Sidenav from "./Sidenav";

const Navbar = () => {
  return (
    <AppBar
      color="default"
      position="fixed"
      elevation={3}
      sx={{ bgcolor: "background.paper", borderRadius: 0 }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: NAVBAR_HEIGHT,
        }}
      >
        <NextLink href="/" sx={{ lineHeight: 1 }}>
          <NextImage
            src="/assets/trackem-logo-full.svg"
            width={176}
            height={45}
          />
        </NextLink>

        <Sidenav />

        <StyledNavLinks>
          {navbarNavigations.map((item) =>
            item.children ? (
              <Box
                position="relative"
                key={item.title}
                sx={{
                  "&:hover": { "& .dropdown-menu": { display: "block" } },
                }}
              >
                <Button
                  className="hover-bg-none"
                  sx={{ px: "0.5rem", mr: "1.5rem" }}
                >
                  {item.title}
                  <ArrowDropDown fontSize="small" sx={{ ml: "2px" }} />
                </Button>
                <Box
                  className="dropdown-menu"
                  display="none"
                  position="absolute"
                  top="100%"
                >
                  <Card
                    elevation={6}
                    sx={{ minWidth: 120, marginTop: "0.8rem", py: "0.25rem" }}
                  >
                    {item.children.map((child) => (
                      <NextLink href={`${child.url}`} key={child.title}>
                        <MenuItem>{child.title}</MenuItem>
                      </NextLink>
                    ))}
                  </Card>
                </Box>
              </Box>
            ) : (
              <NextLink
                href={item.url || "/"}
                activeClass="nav-active"
                key={item.title}
                exact
                sx={{ mr: !item.outlined ? "1.5rem" : 0 }}
              >
                <Button
                  className={clsx({
                    "hover-effect": !item.outlined,
                    "hover-bg-none": !item.outlined,
                  })}
                  sx={{
                    position: "relative",
                    bgcolor: item.outlined ? "grey.100" : "transparent",
                  }}
                >
                  {item.title}
                </Button>
              </NextLink>
            ),
          )}
        </StyledNavLinks>
      </Container>
    </AppBar>
  );
};

export default Navbar;
