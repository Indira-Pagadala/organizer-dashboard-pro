
import { useParams } from "react-router-dom";
import { CalendarClock, Globe, MapPin, Users, Tag, Clock, ArrowLeft, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { sampleEvents } from "@/data/sampleData";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
  const event = sampleEvents.find(event => event.id === id);
  
  if (!event) {
    return (
      <div className="page-container">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/events">Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    setDeleteDialogOpen(false);
    toast({
      title: "Event deleted",
      description: `"${event.title}" has been successfully deleted.`,
    });
    // In a real app, you would redirect to the events page after deletion
  };

  return (
    <div className="page-container">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/events">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Events
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative mb-6">
            <img 
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {event.featured && (
              <Badge className="absolute top-4 right-4 bg-primary/80 hover:bg-primary">
                Featured
              </Badge>
            )}
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">{event.title}</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Event</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete this event? This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleDelete} 
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center text-muted-foreground mb-1">
                <CalendarClock className="h-4 w-4 mr-2" />
                <span className="text-sm">Date</span>
              </div>
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex flex-col p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center text-muted-foreground mb-1">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">Time</span>
              </div>
              <span className="font-medium">{event.time}</span>
            </div>
            <div className="flex flex-col p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center text-muted-foreground mb-1">
                <Tag className="h-4 w-4 mr-2" />
                <span className="text-sm">Category</span>
              </div>
              <span className="font-medium">{event.category}</span>
            </div>
            <div className="flex flex-col p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center text-muted-foreground mb-1">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm">Attendees</span>
              </div>
              <span className="font-medium">{event.attendees}</span>
            </div>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Event Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join us for the {event.title} event, where participants will enjoy a unique experience in a prime location.
                This event features world-class speakers, interactive workshops, and exclusive networking opportunities.
                Don't miss the chance to be part of this amazing event!
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>{event.location}</span>
              </div>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <Globe className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Map view would be embedded here</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Organizer</h3>
                  <p className="text-muted-foreground">TechConf Inc.</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-1">Status</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Active
                  </Badge>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-1">Price</h3>
                  <p className="text-muted-foreground">$99 - $299</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-1">Commission Rate</h3>
                  <p className="text-muted-foreground">10%</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-1">Platform Fees</h3>
                  <p className="text-muted-foreground">$1,500</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Ticket Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Standard</span>
                  <span className="font-medium">450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VIP</span>
                  <span className="font-medium">120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Premium</span>
                  <span className="font-medium">80</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Early Bird</span>
                  <span className="font-medium">250</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{event.attendees}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
