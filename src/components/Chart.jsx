import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import useWishlist from "../hooks/useWishlist";

const SimpleBarChart = () => {
  const { wishlist } = useWishlist();
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={wishlist}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="category" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar fill="#4f46e5" dataKey="price" radius={[8, 8, 0, 0]} />
    </BarChart>
  );
};

export default SimpleBarChart;
