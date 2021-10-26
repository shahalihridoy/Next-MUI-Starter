import CustomFlexBox from "@components/atoms/CustomFlexBox";
import NextImage from "@components/atoms/NextImage";
import NextLink from "@components/atoms/NextLink";
import { ArrowDropDown } from "@mui/icons-material";
import { Button, Card, Container, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Box } from "@mui/system";
import { NAVBAR_HEIGHT } from "@shared/constants";
import navbarNavigations from "@shared/navbarNavigations";
import React from "react";

const Navbar = () => {
  return (
    <AppBar
      color="default"
      position="fixed"
      elevation={3}
      sx={{ bgcolor: "background.paper" }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: NAVBAR_HEIGHT,
        }}
      >
        <NextLink href="/">
          <NextImage
            src="/assets/trackem-logo-full.svg"
            width={176}
            height={45}
          />
        </NextLink>

        <CustomFlexBox
          sx={{
            "& .button-link": {
              marginRight: "1.5rem",
            },
          }}
        >
          {navbarNavigations.map((item, ind) =>
            item.children ? (
              <Box
                position="relative"
                sx={{
                  "&:hover": { "& .dropdown-menu": { display: "block" } },
                }}
                key={item.title}
              >
                <Button
                  className="button-link"
                  sx={{ pr: "0.5rem !important" }}
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
              <NextLink href={item.url || "/"} key={item.title}>
                <Button
                  className="button-link"
                  variant={item.outlined ? "outlined" : "text"}
                  sx={{
                    borderRadius: item.outlined ? "300px" : "4px",
                    marginRight:
                      ind === navbarNavigations.length - 1
                        ? "0px !important"
                        : "0.25rem",
                  }}
                >
                  {item.title}
                </Button>
              </NextLink>
            ),
          )}
        </CustomFlexBox>
      </Container>
    </AppBar>
  );
};

export default Navbar;
