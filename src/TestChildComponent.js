import "./TestChildComponent.module.scss";
import { useTheme } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

const TestChildComponent = ({children}) => {
  const theme = useTheme();
  return (
    <div className="TestChildComponent">
      <h2>TestChildComponent Children: {children}</h2>
      <Box bgcolor="secondary.main" width={100} height={100} />;
      <Box bgcolor={theme.palette.primary.main} width={100} height={100} />;
      <Button color="primary" variant="contained">
        Primary2
      </Button>
      <Button color="custom" variant="contained">Test3</Button>
      <span>{`spacing ${theme.spacing(1)}`}</span>;
    </div>
  );
};

export default TestChildComponent;
