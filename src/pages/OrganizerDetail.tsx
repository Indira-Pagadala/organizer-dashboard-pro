
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Edit, Mail, Phone, Globe, Calendar, DollarSign, Users, Tag, Percent, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sampleOrganizers, sampleEvents } from "@/data/sampleData";
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
import { useToast } from "@/components/ui/use-toast";
import EventCard from "@/components/EventCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const OrganizerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
  const organizer = sampleOrganizers.find(org => org.id === id);
  
  // Filter events for this organizer (in a real app, this would come from the API)
  const organizerEvents = sampleEvents.slice(0, 3);
  
  if (!organizer) {
    return (
      <div className="page-container">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Organizer Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The organizer you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/organizers">Back to Organizers</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    setDeleteDialogOpen(false);
    toast({
      title: "Organizer deleted",
      description: `"${organizer.name}" has been successfully deleted.`,
    });
    // In a real app, you would redirect to the organizers page after deletion
  };

  return (
    <div className="page-container">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/organizers">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Organizers
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={`https://avatar.vercel.sh/${organizer.name}`} />
                <AvatarFallback>{organizer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold">{organizer.name}</h1>
                  {organizer.verified && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground">{organizer.organization}</p>
              </div>
            </div>
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
                    <AlertDialogTitle>Delete Organizer</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete this organizer? This action cannot be undone.
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
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">Events</span>
              </div>
              <span className="font-medium">{organizer.eventsCount}</span>
            </div>
            <div className="flex flex-col p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center text-muted-foreground mb-1">
                <Percent className="h-4 w-4 mr-2" />
                <span className="text-sm">Commission Rate</span>
              </div>
              <span className="font-medium">{organizer.commissionRate}%</span>
            </div>
            <div className="flex flex-col p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center text-muted-foreground mb-1">
                <DollarSign className="h-4 w-4 mr-2" />
                <span className="text-sm">Commission</span>
              </div>
              <span className="font-medium">${organizer.commissionAmount.toLocaleString()}</span>
            </div>
            <div className="flex flex-col p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center text-muted-foreground mb-1">
                <Tag className="h-4 w-4 mr-2" />
                <span className="text-sm">Category</span>
              </div>
              <span className="font-medium">{organizer.category}</span>
            </div>
          </div>
          
          <Tabs defaultValue="events" className="mb-8">
            <TabsList>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="financial">Financial Information</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="events" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Events by {organizer.organization}</CardTitle>
                  <CardDescription>
                    Showing all events organized by this organizer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {organizerEvents.map(event => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="financial" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Information</CardTitle>
                  <CardDescription>
                    Revenue and commission information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <span className="text-sm text-muted-foreground">Total Revenue</span>
                        <p className="font-medium">${organizer.totalRevenue.toLocaleString()}</p>
                      </div>
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <span className="text-sm text-muted-foreground">Commission Rate</span>
                        <p className="font-medium">{organizer.commissionRate}%</p>
                      </div>
                      <Percent className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <span className="text-sm text-muted-foreground">Total Commission</span>
                        <p className="font-medium">${organizer.commissionAmount.toLocaleString()}</p>
                      </div>
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div>
                        <span className="text-sm text-muted-foreground">Avg. Revenue per Event</span>
                        <p className="font-medium">
                          ${Math.round(organizer.totalRevenue / organizer.eventsCount).toLocaleString()}
                        </p>
                      </div>
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Organizer Settings</CardTitle>
                  <CardDescription>
                    Manage organizer settings and permissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Verified Status</span>
                      <Badge variant="outline" className={organizer.verified ? 
                        "bg-green-50 text-green-700 border-green-200" : 
                        "bg-amber-50 text-amber-700 border-amber-200"}>
                        {organizer.verified ? "Verified" : "Pending Verification"}
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span>Account Access</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Active
                      </Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span>Payment Settlement</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Automatic
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>{organizer.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-3 text-muted-foreground" />
                  <a href="#" className="text-primary hover:underline">
                    {organizer.organization.toLowerCase().replace(/\s+/g, '')}.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Event Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Events</span>
                  <span className="font-medium">{organizer.eventsCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Events</span>
                  <span className="font-medium">{Math.ceil(organizer.eventsCount * 0.7)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completed Events</span>
                  <span className="font-medium">{Math.floor(organizer.eventsCount * 0.3)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Attendees</span>
                  <span className="font-medium">{(organizer.eventsCount * 250).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Account History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Member Since</h3>
                  <p className="text-muted-foreground">Jan 15, 2022</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-1">Last Login</h3>
                  <p className="text-muted-foreground">Today, 9:42 AM</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-1">Last Event Created</h3>
                  <p className="text-muted-foreground">Sep 12, 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDetail;
