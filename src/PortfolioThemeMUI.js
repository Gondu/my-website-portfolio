import { createTheme } from "@mui/material/styles";
import g from "./global-styles/globals.scss";


export const PortfolioTheme = createTheme({
  //Breakpoints of the grid system
  breakpoints: {
    values: {
      xs: 0, // goes from 0 to 767px -> mobile
      sm: 768, // goes from 768 to 1023px -> tablet portrait
      md: 1024, // goes from 1024 to 1439px -> tablet landscape
      lg: 1440, // goes from 1440 up -> desktop
    },
  },
  // after this breakpoint value, the container is not fluid anymore and is fixed to this max-width value
  containerBreakpointMaxWidth: g.containerBreakpointMaxWidth,
  rowGutters: g.rowGutters, //4px for padding-top, 4px for padding-bottom
  columnGuttersDownMd: g.columnGuttersDownMd, //8px for padding-left, 8px for padding-right
  columnGuttersUpMd: g.columnGuttersUpMd,
  marginsContainerXs: g.marginsContainerXs,
  marginsContainerSm: g.marginsContainerSm,
  marginsContainerMd: g.marginsContainerMd,
  // spacing: 8,
  palette: {
    primary: {
      main: g.aqua,
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main automatically
      contrastText: '#ffcc00',
    },

    // custom variable that I created inside the theme and which can be used as the other "primary", "secondary" etc variables 
    custom: {
      light: '#ffa726',
      main: '#ffffff',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

// console.log('theme.spacing', PortfolioTheme);
// console.log("g.breakpoints_sm", g.breakpoints_sm);




