import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  borderColor: theme.palette.primary.main,
}));

CustomTextField.defaultProps = {
  InputProps: {
    sx: {
      borderRadius: "11px",
    },
  },
};

export default CustomTextField;
