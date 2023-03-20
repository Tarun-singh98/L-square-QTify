import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./Filters.module.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Filters({ filters }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "var(--color-primary)",
              },
            }}
          >
            {filters.map((ele) => (
              <Tab
                key={ele.key}
                className={styles.tab}
                label={ele.label}
                {...a11yProps(0)}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}

export default Filters;
