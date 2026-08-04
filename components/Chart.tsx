"use client";
import { useEffect } from "react";
import am5index from "@amcharts/amcharts5/index";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function Chart({ dataChart }) {
  useEffect(() => {
    console.log(dataChart);
    let root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,

        paddingLeft: 60,
        paddingRight: 20,
        paddingBottom: 40,
        paddingTop: 20,
      }),
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 60,
      minorGridEnabled: true,
    });
    xRenderer.labels.template.setAll({
      rotation: 0,
      centerX: am5.p50,
      centerY: am5.p50,
      textAlign: "center",
      oversizedBehavior: "wrap",
      maxWidth: 70,
      paddingTop: 15,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "month",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),

        startLocation: 0.5,
        endLocation: 0.5,
      }),
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 30,
      strokeOpacity: 0.1,
    });

    yRenderer.labels.template.setAll({
      oversizedBehavior: "none",
      textAlign: "right",
      paddingRight: 10,
    });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      }),
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "month",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      }),
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    // Set data
    let data = dataChart;
    // let data = [
    //   {
    //     country: "USA",
    //     value: 2025,
    //   },
    //   {
    //     country: "China",
    //     value: 1882,
    //   },
    //   {
    //     country: "Japan",
    //     value: 1809,
    //   },
    //   {
    //     country: "Germany",
    //     value: 1322,
    //   },
    //   {
    //     country: "UK",
    //     value: 1122,
    //   },
    //   {
    //     country: "France",
    //     value: 1114,
    //   },
    //   {
    //     country: "India",
    //     value: 984,
    //   },
    //   {
    //     country: "Spain",
    //     value: 711,
    //   },
    //   {
    //     country: "Netherlands",
    //     value: 665,
    //   },
    //   {
    //     country: "South Korea",
    //     value: 443,
    //   },
    //   {
    //     country: "Canada",
    //     value: 441,
    //   },
    // ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    chart.set("paddingRight", 50);
    return () => {
      root.dispose();
    };
  }, [dataChart]);
  return (
    <div
      id="chartdiv"
      style={{
        width: "100%",
        height: "500px",
      }}
    ></div>
  );
}
