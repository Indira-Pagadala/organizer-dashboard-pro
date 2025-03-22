
import { Calendar, MapPin, Star, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  attendees: number;
  rating: number;
  category: string;
  featured?: boolean;
  image: string;
}

const EventCard = ({ 
  id, 
  title, 
  date, 
  location, 
  price, 
  attendees, 
  rating, 
  category,
  featured = false,
  image
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-brand-blue hover:bg-brand-blue text-white">
            Featured
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-1">
          <Badge variant="outline" className="text-xs font-normal">
            {category}
          </Badge>
          <div className="flex items-center text-amber-500">
            <Star className="w-4 h-4 fill-current text-amber-500 mr-1" /> 
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm">
          <Calendar className="h-3.5 w-3.5" />
          <span>{date}</span>
        </CardDescription>
        <CardDescription className="flex items-center gap-1 text-sm">
          <MapPin className="h-3.5 w-3.5" />
          <span>{location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3 pt-0">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users className="h-3.5 w-3.5" />
          <span>{attendees} attending</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0 mt-auto">
        <div className="font-semibold">${price}</div>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/events/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
