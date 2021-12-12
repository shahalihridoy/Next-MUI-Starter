import { styled } from "@mui/material/styles";

const StyledNavLinks = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  ".hover-effect": {
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      right: 0,
      left: "50%",
      width: "0%",
      height: 4,
      borderRadius: "2rem",
      backgroundColor: palette.secondary.main,
      transition: "all 0.35s ease-in-out",
    },
    "&:hover": {
      "&:after": {
        left: 0,
        width: "100%",
      },
    },
  },
  ".hover-bg-none": {
    "&:hover": {
      background: "none",
    },
  },
  ".nav-active": {
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      height: "4px",
      borderRadius: "2rem",
      backgroundColor: palette.secondary.main,
      transition: "all 0.35s ease-in-out",
    },
  },
  "@media screen and (max-width: 1200px)": {
    display: "none",
  },
}));

export default StyledNavLinks;
