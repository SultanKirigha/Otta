import React, { useState } from "react";
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

  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div style={{ width: "100%", height: 250 }}> {/* Adjust the height value here */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            labelLine={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={activeIndex === index ? HOVER_COLORS[index % HOVER_COLORS.length] : "none"}
                strokeWidth={activeIndex === index ? 8 : 1}
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
