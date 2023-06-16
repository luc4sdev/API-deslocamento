"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
     light: "#010101",
      main: "#ffff",
      dark: "#c1c1c1"
    },
    secondary: {
      main: "#005792"
    }
 
  },
 });

export const darkTheme = createTheme({
 palette: {
   primary: {
    light: "#ffff",
     main: "#4b4848",
     dark: "#2e2929"
   },
   secondary: {
    main: "#005792"
  }

 },
});