import { Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

let currentResolution;

const GridWrapper = (props) => {
  const PortfolioTheme = useTheme();

  // Find the current resolution of the screen so I can apply the right margin to the container
  if (useMediaQuery(PortfolioTheme.breakpoints.only("xs"))) {
    currentResolution = "xs";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.only("sm"))) {
    currentResolution = "sm";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.only("md"))) {
    currentResolution = "md";
  }
  if (useMediaQuery(PortfolioTheme.breakpoints.up("lg"))) {
    currentResolution = "lg";
  }

  return (
    <Container
      sx={{
        maxWidth: PortfolioTheme.containerBreakpointMaxWidth,
        paddingLeft:
          currentResolution === "xs"
            ? PortfolioTheme.marginsContainerXs
            : currentResolution === "sm"
            ? PortfolioTheme.marginsContainerSm
            : currentResolution === "md"
            ? PortfolioTheme.marginsContainerMd
            : "0",
        paddingRight:
          currentResolution === "xs"
            ? PortfolioTheme.marginsContainerXs
            : currentResolution === "sm"
            ? PortfolioTheme.marginsContainerSm
            : currentResolution === "md"
            ? PortfolioTheme.marginsContainerMd
            : "0",
      }}
      disableGutters={true}
      maxWidth={false}
    >
      {props.children}
    </Container>
  );
};

export default GridWrapper;
