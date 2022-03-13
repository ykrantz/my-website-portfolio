import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import { Link } from "@mui/material";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function TempNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("@@@", { newValue }, event);
    setValue(newValue);
    // setValue(event);
  };
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%" }}>
      {/* <Tabs
        value={value}
        //    onChange={handleChange}
        aria-label="nav tabs example"
      >
        <Tab
          label="Page One-ppp"
          onClick={() => {
            handleChange(0);
            // navigate("/");
          }}
          href="/"
        />
        <Tab
          label="Page tow-ppp"
          onClick={(e) => {
            // handleChange(e.target.value);
            handleChange(1);
            // navigate("/aboutme");
          }}
          href="/aboutme"
        />
      
      </Tabs> */}
      <Tabs
        onChange={handleChange}
        // onTouchTap={handleChange}
        value={value}
      >
        <Tab
          value={0}
          label="first"
          component={Link}
          to="/"
          //  containerElement={<Link to="/"
        />

        <Tab
          value={1}
          label="second"
          component={Link}
          to="/aboutme"
          //   containerElement={<Link to="/aboutme" />}
        />
        <Tab value={3} label="third" component={Link} to="/aboutme" />
      </Tabs>
    </Box>
  );
}
