
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";

interface ChartDataItem {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: ChartDataItem[];
}

const DonutChart = ({ data }: DonutChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => [`${value}`, 'Value']}
          labelFormatter={(name) => name}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
