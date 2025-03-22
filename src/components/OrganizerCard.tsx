
import { BarChart3, Calendar, UserCheck, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface OrganizerCardProps {
  id: string;
  name: string;
  email: string;
  eventsCount: number;
  totalAttendees: number;
  totalRevenue: number;
  commissionRate: number;
  commissionAmount: number;
  avatar?: string;
}

const OrganizerCard = ({
  id,
  name,
  email,
  eventsCount,
  totalAttendees,
  totalRevenue,
  commissionRate,
  commissionAmount,
  avatar
}: OrganizerCardProps) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{email}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3 grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> Events
          </span>
          <span className="font-semibold">{eventsCount}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> Attendees
          </span>
          <span className="font-semibold">{totalAttendees}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <BarChart3 className="h-3.5 w-3.5" /> Revenue
          </span>
          <span className="font-semibold">${totalRevenue.toLocaleString()}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <UserCheck className="h-3.5 w-3.5" /> Commission
          </span>
          <span className="font-semibold">${commissionAmount.toLocaleString()}</span>
        </div>
        <div className="col-span-2">
          <div className="flex justify-between text-xs mb-1">
            <span>Commission Rate</span>
            <span>{commissionRate}%</span>
          </div>
          <Progress value={commissionRate} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/organizers/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrganizerCard;
