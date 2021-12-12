import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  "& .MuiInputLabel-root": {
    position: "relative",
    transform: "none",
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: theme.palette.primary.dark,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-input": {
    position: "relative",
    transform: "none",
  },
  "& .MuiOutlinedInput-notchedOutline legend": {
    width: 0,
  },
}));

export default CustomTextField;
