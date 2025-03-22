
import { BarChart3, Calendar, Ticket, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StatCard from "@/components/StatCard";
import DonutChart from "@/components/DonutChart";
import BarChartComponent from "@/components/BarChartComponent";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { eventCategories, eventAttendeeData, monthlyEvents, topOrganizers } from "@/data/sampleData";

const Dashboard = () => {
  return (
    <div className="page-container">
      <PageHeader
        title="Dashboard"
        description="Overview of your event management platform"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Events"
          value="134"
          icon={<Calendar className="h-5 w-5" />}
          description="across 6 categories"
          trend={12}
        />
        <StatCard
          title="Total Users"
          value="8,642"
          icon={<Users className="h-5 w-5" />}
          description="registered on the platform"
          trend={8}
        />
        <StatCard
          title="Total Bookings"
          value="15,280"
          icon={<Ticket className="h-5 w-5" />}
          description="tickets sold"
          trend={15}
        />
        <StatCard
          title="Total Revenue"
          value="$328,540"
          icon={<BarChart3 className="h-5 w-5" />}
          description="from all events"
          trend={24}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Events</CardTitle>
            <CardDescription>Number of events per month in 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChartComponent data={monthlyEvents} barColor="#2563eb" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Event Categories</CardTitle>
            <CardDescription>Distribution of events by category</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center" style={{ height: "300px" }}>
            <DonutChart data={eventCategories} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Organizers by Commission</CardTitle>
            <CardDescription>Based on total commission paid</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center" style={{ height: "300px" }}>
            <DonutChart data={topOrganizers} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Event-wise Attendee Distribution</CardTitle>
            <CardDescription>Number of attendees per event</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChartComponent 
              data={eventAttendeeData} 
              barColor="#8b5cf6"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
