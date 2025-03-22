
import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sampleOrganizers } from "@/data/sampleData";
import PageHeader from "@/components/PageHeader";
import OrganizerCard from "@/components/OrganizerCard";
import AddOrganizerForm from "@/components/AddOrganizerForm";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const OrganizersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const sortedOrganizers = [...sampleOrganizers]
    .filter(organizer => 
      organizer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      organizer.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "revenue":
          return b.totalRevenue - a.totalRevenue;
        case "commission":
          return b.commissionAmount - a.commissionAmount;
        case "events":
          return b.eventsCount - a.eventsCount;
        default:
          return 0;
      }
    });

  return (
    <div className="page-container">
      <PageHeader
        title="Organizer Management"
        description="View and manage event organizers on the platform"
      >
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Organizer
        </Button>
      </PageHeader>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search organizers..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="revenue">Sort by Revenue</SelectItem>
                <SelectItem value="commission">Sort by Commission</SelectItem>
                <SelectItem value="events">Sort by Events Count</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedOrganizers.length > 0 ? (
          sortedOrganizers.map(organizer => (
            <OrganizerCard key={organizer.id} {...organizer} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <h3 className="text-lg font-medium mb-2">No organizers found</h3>
            <p className="text-muted-foreground">Try adjusting your search</p>
          </div>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Organizer</DialogTitle>
            <DialogDescription>
              Fill in the details to add a new event organizer to the platform.
            </DialogDescription>
          </DialogHeader>
          <AddOrganizerForm onClose={() => setDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrganizersPage;
