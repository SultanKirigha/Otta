import React from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { label: "Jan", "#-of-Votes": 0, "#-of-Votes2": 0 },
  { label: "Feb", "#-of-Votes": 200, "#-of-Votes2": 300 },
  { label: "Mar", "#-of-Votes": 250, "#-of-Votes2": 400 },
  { label: "Apr", "#-of-Votes": 200, "#-of-Votes2": 560 },
  { label: "May", "#-of-Votes": 500, "#-of-Votes2": 320 },
  { label: "Jun", "#-of-Votes": 450, "#-of-Votes2": 600 },
  { label: "Jul", "#-of-Votes": 850, "#-of-Votes2": 720 },
  { label: "Aug", "#-of-Votes": 1050, "#-of-Votes2": 850 },
  { label: "Sep", "#-of-Votes": 950, "#-of-Votes2": 690 },
  { label: "Oct", "#-of-Votes": 1100, "#-of-Votes2": 805 },
  { label: "Nov", "#-of-Votes": 900, "#-of-Votes2": 1200 },
  { label: "Dec", "#-of-Votes": 1200, "#-of-Votes2": 1010 },
];

const Chart = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: 300 }}>
      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="#-of-Votes" stroke="#3160D8" strokeWidth={2} tick={{ fontSize: 12 }} dot={false} />
            <Line type="monotone" dataKey="#-of-Votes2" stroke="#BCBABA" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            <XAxis dataKey="label" strokeOpacity={0} fill="#777777" style={{ fontSize: 12 }} />
            <YAxis strokeOpacity={0} fill="#777777" domain={[0, 1200]} ticks={[0, 200, 400, 600, 800, 1000, 1200]} style={{ fontSize: 12 }} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <CartesianGrid strokeDasharray="2 2" stroke="#D8D8D8" vertical={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
