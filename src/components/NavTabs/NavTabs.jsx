import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

export default function NavTabs() {
  const [value, setValue] = React.useState(1);

  let navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        //   value={value}
        aria-label="nav tabs example"
      >
        <Tab
          label="Portfolio"
          onClick={() => {
            // setValue(0);
            navigate("/");
          }}
        />
        <Tab
          label="About Me"
          onClick={() => {
            // setValue(1);
            navigate("/aboutme");
          }}
        />
      </Tabs>
    </Box>
  );
}
