
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

interface BarChartComponentProps {
  data: DataItem[];
  xAxisKey?: string;
  barKey?: string;
  barColor?: string;
  title?: string;
  height?: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-md rounded-md border">
        <p className="font-medium">{label}</p>
        <p className="text-sm">{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const BarChartComponent = ({ 
  data, 
  xAxisKey = "name", 
  barKey = "value", 
  barColor = "#2563eb",
  title,
  height = 300
}: BarChartComponentProps) => {
  return (
    <div className="h-full w-full flex flex-col">
      {title && <h3 className="text-center font-medium mb-4">{title}</h3>}
      <div style={{ height: height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey={xAxisKey} 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              dataKey={barKey} 
              fill={barColor}
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
              animationBegin={300}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
