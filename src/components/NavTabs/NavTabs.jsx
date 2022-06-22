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

export default function NavTabs({ tabName }) {
  const tagIndex = {
    mainPage: 0,
    aboutMe: 1,
  };
  const [value, setValue] = React.useState(tagIndex[tabName]);

  let navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", m: 2 }} className="NavTabs-Box">
      <Tabs value={value} aria-label="nav tabs example">
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
