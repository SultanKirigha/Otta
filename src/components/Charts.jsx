import React from "react";
import { CartesianGrid, Gridlines, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    {label: "Jan", "#-of-Votes": 0, "#-of-Votes2": 0,},
    {label: "Feb", "#-of-Votes": 200,"#-of-Votes2": 300,},
    {label: "Mar", "#-of-Votes": 250,"#-of-Votes2": 400,},
    {label: "Apr", "#-of-Votes": 200,"#-of-Votes2": 560,},
    {label: "May", "#-of-Votes": 500,"#-of-Votes2": 320,},
    {label: "Jun", "#-of-Votes": 450,"#-of-Votes2": 600,},
    {label: "Jul", "#-of-Votes": 850,"#-of-Votes2": 720,},
    {label: "Aug", "#-of-Votes": 1050,"#-of-Votes2": 850,},
    {label: "Sep", "#-of-Votes": 950,"#-of-Votes2": 690,},
    {label: "Oct", "#-of-Votes": 1100,"#-of-Votes2": 805,},
    {label: "Nov", "#-of-Votes": 900,"#-of-Votes2": 1200,},
    {label: "Dec", "#-of-Votes": 1200,"#-of-Votes2": 1010,},
]

const Chart = () => {
    return <LineChart width={500} height={380} data={data}>
        <Line type='monotone' dataKey='#-of-Votes' stroke="#3160D8" strokeWidth={2} tick={{ fontSize: 12 }}/>
        <Line type='monotone' dataKey='#-of-Votes2' stroke="#BCBABA" strokeWidth={2} strokeDasharray="3 4 5 2" />
        <XAxis dataKey="label" strokeOpacity={0} fill="#777777" style={{fontSize: 12}}/>
        <YAxis strokeOpacity={0} fill="#777777" style={{fontSize:12}}/>
        <Tooltip cursor={{ fill: "transparent" }}/>
        <CartesianGrid strokeDasharray="2" stroke="#D8D8D8"  vertical={false} />    
        </LineChart>
};

export default Chart;