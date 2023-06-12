import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function App() {
  const data = [
    { name: "Yellow", value: 15 },
    { name: "Dark", value: 10 },
    { name: "Undefined", value: 65 },
  ];

  const COLORS = ["#FF8B26", "#FFC533", "#285FD3"];

  return (
    <div style={{ width: "90px", height: "90px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={34}
            outerRadius={40}
            paddingAngle={2}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
