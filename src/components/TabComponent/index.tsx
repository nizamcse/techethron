import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import GraphSummary from "../GraphSummary";

interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box mb={4} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Descending" {...a11yProps(1)} />
          <Tab label="Ascending" {...a11yProps(2)} />
          <Tab label="Vertical" {...a11yProps(3)} />
          <Tab label="Horizontal" {...a11yProps(4)} />
        </Tabs>
        <Box mt={2}>
          <TabPanel value={value} index={0}>
            <GraphSummary />
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
};

export default TabComponent;
