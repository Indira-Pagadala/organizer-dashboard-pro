
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, DollarSign, Star, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface OrganizerCardProps {
  id: string;
  name: string;
  email: string;
  organization: string;
  category: string;
  commissionRate: number;
  commissionAmount: number;
  totalRevenue: number;
  eventsCount: number;
  verified?: boolean;
  logo?: string;
}

const OrganizerCard = ({
  id,
  name,
  email,
  organization,
  category,
  commissionRate,
  commissionAmount,
  totalRevenue,
  eventsCount,
  verified = false,
  logo,
}: OrganizerCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
              {logo ? (
                <img src={logo} alt={name} className="h-full w-full object-cover" />
              ) : (
                <User className="h-5 w-5" />
              )}
            </div>
            <div>
              <CardTitle className="text-xl">{name}</CardTitle>
              <CardDescription className="text-sm mt-1">{email}</CardDescription>
            </div>
          </div>
          {verified && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Star className="h-3 w-3 mr-1 fill-green-500 text-green-500" />
              Verified
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm font-medium">{organization}</p>
        <div className="flex items-center mt-3 gap-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
            {eventsCount} Events
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Tag className="h-4 w-4 mr-1 text-muted-foreground" />
            {category}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="bg-muted/50 p-2 rounded-md">
            <p className="text-xs text-muted-foreground">Commission</p>
            <p className="text-sm font-medium flex items-center">
              <DollarSign className="h-3 w-3 mr-1" />
              {commissionAmount.toLocaleString()}
            </p>
          </div>
          <div className="bg-muted/50 p-2 rounded-md">
            <p className="text-xs text-muted-foreground">Revenue</p>
            <p className="text-sm font-medium flex items-center">
              <DollarSign className="h-3 w-3 mr-1" />
              {totalRevenue.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="outline" className="w-full" size="sm">
          <Link to={`/organizers/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrganizerCard;
