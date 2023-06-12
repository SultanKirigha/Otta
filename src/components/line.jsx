import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const LineGraph = () => {
  const data = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 400 },
    { name: 'Apr', value: 560 },
    { name: 'May', value: 320 },
    { name: 'Jun', value: 600 },
    { name: 'Jul', value: 720 },
    { name: 'Aug', value: 850 },
    { name: 'Sep', value: 690 },
    { name: 'Oct', value: 805 },
    { name: 'Nov', value: 1200 },
    { name: 'Dec', value: 1010 },
  ];

  return (
    <div style={{ width: '100%', marginTop: '1rem' }}>
      <ResponsiveContainer width="100%" height={60}>
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <CartesianGrid horizontal={false} vertical={false} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#285FD3"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
