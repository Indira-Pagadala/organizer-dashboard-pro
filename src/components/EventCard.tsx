
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  attendees: number;
  category: string;
  featured?: boolean;
}

const EventCard = ({
  id,
  title,
  date,
  time,
  location,
  imageUrl,
  attendees,
  category,
  featured = false,
}: EventCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover"
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-primary/80 hover:bg-primary">
            Featured
          </Badge>
        )}
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between">
          <Badge variant="outline" className="mt-1">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            {attendees}
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-2 leading-tight">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2 pb-2">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-2">
        <Button asChild variant="outline" className="w-full" size="sm">
          <Link to={`/events/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
