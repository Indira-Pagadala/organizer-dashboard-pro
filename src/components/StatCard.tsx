
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  description: string;
  trend?: number;
}

const StatCard = ({ title, value, icon, description, trend }: StatCardProps) => {
  const isPositive = trend && trend > 0;
  const isNegative = trend && trend < 0;

  return (
    <Card className="card-hover">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl font-bold mb-1">{value}</CardTitle>
            <CardDescription className="text-base font-medium">{title}</CardDescription>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        </div>

        {trend !== undefined && (
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium flex items-center ${
                isPositive ? "text-green-600" : isNegative ? "text-red-600" : "text-muted-foreground"
              }`}
            >
              {isPositive && <ArrowUp className="h-4 w-4 mr-1" />}
              {isNegative && <ArrowDown className="h-4 w-4 mr-1" />}
              {trend}% from last month
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
