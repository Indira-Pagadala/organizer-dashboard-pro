
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DataItem[];
  innerRadius?: number;
  outerRadius?: number;
  title?: string;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-md rounded-md border">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-sm">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const DonutChart = ({ 
  data, 
  innerRadius = 60, 
  outerRadius = 80,
  title
}: DonutChartProps) => {
  return (
    <div className="h-full w-full flex flex-col">
      {title && <h3 className="text-center font-medium mb-4">{title}</h3>}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              animationDuration={500}
              animationBegin={0}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={1} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingTop: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DonutChart;
