
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Calendar, Edit, Mail, Phone, User, Users } from "lucide-react";
import { sampleOrganizers, sampleEvents } from "@/data/sampleData";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import BarChartComponent from "@/components/BarChartComponent";

const OrganizerDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const organizer = sampleOrganizers.find(org => org.id === id);
  
  if (!organizer) {
    return (
      <div className="page-container">
        <div className="flex flex-col items-center justify-center pt-20">
          <h1 className="text-2xl font-bold mb-4">Organizer Not Found</h1>
          <p className="text-muted-foreground mb-6">The organizer you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/organizers"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Organizers</Link>
          </Button>
        </div>
      </div>
    );
  }

  const initials = organizer.name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  const organizerStats = [
    { label: "Events", value: organizer.eventsCount, icon: <Calendar className="h-4 w-4" /> },
    { label: "Attendees", value: organizer.totalAttendees, icon: <Users className="h-4 w-4" /> },
    { label: "Revenue", value: `$${organizer.totalRevenue.toLocaleString()}`, icon: <BarChart3 className="h-4 w-4" /> },
    { label: "Commission", value: `$${organizer.commissionAmount.toLocaleString()}`, icon: <User className="h-4 w-4" /> },
  ];

  // Get events for this organizer - in a real app, you'd filter by organizer ID
  // For demo, let's just take the first few events
  const organizerEvents = sampleEvents.slice(0, 3);

  const monthlyRevenue = [
    { name: "Jan", value: 42500 },
    { name: "Feb", value: 38000 },
    { name: "Mar", value: 61000 },
    { name: "Apr", value: 47500 },
    { name: "May", value: 55000 },
    { name: "Jun", value: 75000 },
  ];

  return (
    <div className="page-container">
      <div className="mb-8">
        <Button variant="outline" size="sm" asChild className="mb-6">
          <Link to="/organizers"><ArrowLeft className="mr-1 h-4 w-4" /> Back</Link>
        </Button>
        
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={organizer.avatar} alt={organizer.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold mb-1">{organizer.name}</h1>
              <div className="flex flex-col sm:flex-row gap-y-1 gap-x-4 text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  <span>{organizer.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="h-9">
            <Edit className="mr-2 h-4 w-4" /> Edit
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {organizerStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription>Revenue trends over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChartComponent data={monthlyRevenue} barColor="#2563eb" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Commission Overview</CardTitle>
            <CardDescription>Commission rate and earnings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Commission Rate</span>
                <span className="text-sm font-medium">{organizer.commissionRate}%</span>
              </div>
              <Progress value={organizer.commissionRate} className="h-2" />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Revenue</span>
                <span className="font-medium">${organizer.totalRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Commission Amount</span>
                <span className="font-medium">${organizer.commissionAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="font-medium">Net Earnings</span>
                <span className="font-bold">${(organizer.totalRevenue - organizer.commissionAmount).toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="events" className="mb-8">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Organizer's Events</span>
                <Button size="sm">View All</Button>
              </CardTitle>
              <CardDescription>Events created by this organizer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {organizerEvents.map(event => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>Past transaction records</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12 text-muted-foreground">
                Payment history would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Organizer Settings</CardTitle>
              <CardDescription>Configure organizer preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-12 text-muted-foreground">
                Organizer settings would be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrganizerDetail;
