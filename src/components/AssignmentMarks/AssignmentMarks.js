import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const AssignmentMarks = () => {
    const data = [
        {
            name: "A 1",
            marks: 52,
            total: 60
        },
        {
            name: "A2",
            marks: 55,
            total: 60
        },
        {
            name: "A 3",
            marks: 57,
            total: 60
        },
        {
            name: "A 4",
            marks: 60,
            total: 60
        },
        {
            name: "A 5",
            marks: 60,
            total: 60
        },
        {
            name: "A 6",
            marks: 60,
            total: 60
        },

        {
            name: "A 7",
            marks: 60,
            total: 60
        },
        {
            name: "A 8",
            marks: 50,
            total: 60
        },

        {
            name: "A 9",
            marks: "comming soon",
            total: 60
        },

        {
            name: "A 10",
            marks: "comming soon",
            total: 60
        }
    ];
    return (
        <div>
            <LineChart
                width={600}
                height={400}
                data={data}>

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />

                <Line type="monotone"
                    dataKey="marks"
                    stroke="#82ca9d"
                />
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;