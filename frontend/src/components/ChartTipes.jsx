import React from "react";
import useFetchInterval from "../hook/useFetch"; // assuming you have created the useFetchInterval hook
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { format } from "date-fns";

const ChartTipes = () => {
  const { data, loading, error } = useFetchInterval(
    "http://localhost:3000/api/data/tipes"
  ); // replace with your API endpoint URL

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No data available</div>;

  // Format tanggal dan bulan
  const formattedData = data.map((item) => ({
    ...item,
    createdAt: format(new Date(item.createdAt), "dd MMM yyyy HH:mm"),
  }));

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#1e88e5" }}>Chart Tipes</h2>
      <LineChart
        width={800}
        height={400}
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="CO"
          stroke="#1e88e5"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default ChartTipes;
