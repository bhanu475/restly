import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const useHelperTextStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    bottom: "-20px",
    right: "-15px",
  },
}));
const useStyles = makeStyles(() => ({
  textBox: {
    margin: "10px 0px 10px 0px",
  },
  resize: {
    fontSize: "1rem",
  },
  root: {
    error: {
      position: "absolute",
      bottom: "-20px",
      right: "-15px",
    },
  },
}));

export default function MuiTextField({
  HeaderText,
  value,
  id,
  label,
  type,
  onChange,
  onKeyDown,
  name,
  customClassName,
  unittext,
  isProtected,
  helperText,
  search,
  ...rest
}) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const classes = useStyles();
  const toggleEyeIcon = () => {
    setIsShowPassword(!isShowPassword);
  };
  const helperTextStyles = useHelperTextStyles();

  return (
    <>
      <Typography>{HeaderText}</Typography>
      <TextField
        sx={{ background: "rgba(248, 248, 248, 0.5)" }}
        id={id}
        helperText={helperText ? helperText : " "}
        label={label}
        name={name}
        type={isProtected ? (isShowPassword ? "string" : "password") : type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={HeaderText}
        value={value}
        variant="outlined"
        fullWidth
        size="small"
        className={`${customClassName}`}
        color="primary"
        InputProps={{
          classes: {
            input: classes.resize,
          },
          startAdornment: search ? (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ) : (
            ""
          ),
          endAdornment: unittext ? (
            <InputAdornment position="end">{unittext}</InputAdornment>
          ) : (
            isProtected && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => toggleEyeIcon()}
                  edge="end"
                >
                  {isShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          ),
        }}
        FormHelperTextProps={{
          classes: {
            root: helperTextStyles.root,
          },
        }}
        {...rest}
      />
    </>
  );
}
