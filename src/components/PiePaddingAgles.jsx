import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

const data = [
  { name: "Yellow", value: 15 },
  { name: "Dark", value: 10 },
  { name: "Undefined", value: 65 },
];

const COLORS = ["#FF8B26", "#FFC533", "#285FD3"]; // Custom colors for the chart
const HOVER_COLORS = ["#FF8B26", "#FFC533", "#285FD3"]; // Custom hover colors for the chart

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [chartSize, setChartSize] = useState({ width: "100%", height: 300 });

  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setChartSize({ width: "100%", height: 400 });
      } else {
        setChartSize({ width: "100%", height: 300 });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width={chartSize.width} height={chartSize.height}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            labelLine={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            paddingAngle={2} // Set the padding angle for the pie slices
            innerRadius={60} // Set the inner radius of the pie chart
            outerRadius={80} // Set the outer radius of the pie chart
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={activeIndex === index ? HOVER_COLORS[index % HOVER_COLORS.length] : "none"}
                strokeWidth={activeIndex === index ? 5 : 1}
              />
            ))}
          </Pie>
          <Tooltip>
            {activeIndex !== null && (
              <div className="tooltip">
                <p>{data[activeIndex].name}</p>
                <p>{data[activeIndex].value}</p>
              </div>
            )}
          </Tooltip>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}