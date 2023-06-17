"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
     light: "#010101",
      main: "##FAFAFA",
      dark: "#ffff"
    },
    secondary: {
      main: "#892CDC"
    }
 
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightRegular: 700,
    fontWeightBold: 800,
  },
 });

export const darkTheme = createTheme({
 palette: {
   primary: {
    light: "#ffff",
     main: "#393E46",
     dark: "#222831"
   },
   secondary: {
    main: "#892CDC"
  }

 },
 typography: {
  fontFamily: 'Poppins, sans-serif',
  fontWeightRegular: 700,
  fontWeightBold: 800,
},
});