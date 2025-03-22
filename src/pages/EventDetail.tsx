
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Edit, MapPin, Star, Trash, Users } from "lucide-react";
import { sampleEvents } from "@/data/sampleData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
  const event = sampleEvents.find(event => event.id === id);
  
  if (!event) {
    return (
      <div className="page-container">
        <div className="flex flex-col items-center justify-center pt-20">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/events"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  const attendeeStats = [
    { label: "Ticket Sales", value: `${event.attendees}/2000` },
    { label: "Revenue", value: `$${(event.price * event.attendees).toLocaleString()}` },
    { label: "Avg. Rating", value: event.rating.toFixed(1) },
    { label: "Ticket Price", value: `$${event.price}` },
  ];

  return (
    <div className="page-container">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link to="/events"><ArrowLeft className="mr-1 h-4 w-4" /> Back</Link>
          </Button>
          <Badge variant={event.featured ? "default" : "outline"}>
            {event.featured ? "Featured" : "Regular"}
          </Badge>
          <Badge variant="outline">{event.category}</Badge>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
            <div className="flex flex-col sm:flex-row gap-y-1 gap-x-4 text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                <span>{event.attendees} attendees</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span>{event.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button variant="destructive" size="sm" className="h-9" onClick={() => setDeleteDialogOpen(true)}>
              <Trash className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Music</Badge>
                <Badge variant="outline">Entertainment</Badge>
                <Badge variant="outline">Live</Badge>
                <Badge variant="outline">Weekend</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Stats</CardTitle>
              <CardDescription>Key performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4">
                {attendeeStats.map((stat, index) => (
                  <div key={index} className="bg-muted p-3 rounded-lg">
                    <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                    <dd className="text-xl font-semibold mt-1">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Organizer</CardTitle>
              <CardDescription>Event created by</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold text-primary">TE</span>
                </div>
                <div>
                  <div className="font-medium">TechEvents Inc.</div>
                  <div className="text-sm text-muted-foreground">contact@techevents.com</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                <Link to="/organizers/1">View Organizer</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="details">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="details">Event Details</TabsTrigger>
          <TabsTrigger value="attendees">Attendees</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>Complete information about the event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p>{event.description}</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Agenda</h3>
                <ul className="space-y-2">
                  <li className="flex gap-4">
                    <div className="font-medium w-20">9:00 AM</div>
                    <div>Registration & Breakfast</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="font-medium w-20">10:00 AM</div>
                    <div>Keynote Speech</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="font-medium w-20">11:30 AM</div>
                    <div>Panel Discussion</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="font-medium w-20">1:00 PM</div>
                    <div>Lunch Break</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="font-medium w-20">2:00 PM</div>
                    <div>Workshops</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="font-medium w-20">5:00 PM</div>
                    <div>Networking</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p>{event.location}</p>
                <div className="mt-2 h-48 bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Map view placeholder</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="attendees" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendees</CardTitle>
              <CardDescription>People registered for this event</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12 text-muted-foreground">
                Attendee list would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tickets" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Tickets</CardTitle>
              <CardDescription>Ticket types and sales</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12 text-muted-foreground">
                Ticket information would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Event performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12 text-muted-foreground">
                Analytics data would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Event</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this event? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive">
              <Trash className="mr-2 h-4 w-4" /> Delete Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventDetail;
