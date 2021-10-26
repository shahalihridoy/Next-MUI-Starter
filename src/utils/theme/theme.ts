import { createTheme } from "@mui/material";

const fontSize = 14;

const fontFamily = [
  "Montserrat",
  "Roboto",
  "Open Sans",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
].join(",");

const primary = {
  light: "#00BFF2",
  main: "#5660B2",
  dark: "#091155",
};

const grey = {
  900: "#2B3445", // Main Text
  800: "#373F50", // Paragraph
  700: "#4B566B",
  600: "#7D879C", // Low Priority form Title/Text
  500: "#A1AFCB",
  400: "#C3CFE7", // Border
  300: "#E0E9FB",
  200: "#E4EDFF", // Line Stroke
  100: "#F2F5F9",
};

const theme = createTheme({
  palette: {
    primary,
    secondary: {
      main: "#F8BB39",
      contrastText: "#fff",
    },
    warning: {
      main: "#F8BB39",
    },
    error: {
      main: "#FC155A",
    },
    success: {
      main: "#00D495",
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[400],
    },
    // divider: grey[700],
    grey: { ...grey },
    background: {
      default: grey[100],
    },
  },
  typography: {
    fontSize,
    fontFamily,
    htmlFontSize: 16,
    body1: { fontSize },
    body2: { fontSize },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        p: {
          lineHeight: 1.75,
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        button: {
          fontFamily,
          fontSize,
        },
        form: {
          width: "100%",
        },
        ".notification-container": {
          paddingBottom: "15px !important",
        },
        ".notification": {
          borderRadius: "6px !important",
          boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09) !important",
        },
        "#nprogress .bar": {
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px !important",
          borderRadius: "0px 300px 300px 0px !important",
          zIndex: 1031,
          background: `${primary.main} !important`,
          overflow: "hidden",
        },
        "#nprogress .peg": {
          boxShadow: `0 0 10px ${primary.main}, 0 0 5px ${primary.main} !important`,
        },
        ".MuiDataGrid-root": {
          border: "none !important",
        },
        ".MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
          outline: "none !important",
        },
        ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-root .MuiDataGrid-cell:focus-within":
          {
            outline: "none !important",
          },
        ".MuiDataGrid-columnHeaderTitleContainer": {
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },
        ".MuiDataGrid-root .MuiCircularProgress-root": {
          height: "1.75rem !important",
          width: "1.75rem !important",
        },
        ".MuiAutocomplete-listbox li.MuiAutocomplete-option": {
          padding: "0rem 0.25rem !important",
          textTransform: "capitalize",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "capitalize",
          minWidth: 0,
          minHeight: 0,
        },
      },
      defaultProps: {
        color: "inherit",
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media only screen and (min-width: 600px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            background: grey[100],
          },
        },
      },
      defaultProps: {
        size: "small",
      },
    },
    MuiCard: {
      defaultProps: {
        style: { borderRadius: 8 },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          minHeight: 40,
          borderRadius: 4,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
        },
      },
    },
  },
});

theme.shadows[1] = "0px 1px 3px rgba(3, 0, 71, 0.09)";
theme.shadows[2] = "0px 4px 16px rgba(43, 52, 69, 0.1)";
theme.shadows[3] = "0px 6px 32px rgba(0, 0, 0, 0.05)";

export default theme;
