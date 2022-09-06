import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ReactECharts from "echarts-for-react";

const AOIGraph = () => {
  const option = {
    legend: {
      orient: "vertical",
      right: 10,
      top: 20,
      bottom: 20,
      data: ["Critical", "Observe", "Safe"],
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "52%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#fff",
          borderWidth: 0,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 2, name: "Critical" },
          { value: 4, name: "Observe" },
          { value: 6, name: "Safe" },
        ],
      },
    ],
  };
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            AOI Summary
          </Typography>
          <ReactECharts
            style={{ height: "150px", color: "#FFFFFF" }}
            option={option}
            className="pie-chart"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AOIGraph;
