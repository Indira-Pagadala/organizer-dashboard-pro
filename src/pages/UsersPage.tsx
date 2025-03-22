
import { useState } from "react";
import { Search, SlidersHorizontal, Download, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  joinDate: string;
  eventsBooked: number;
}

const sampleUsers: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "User",
    status: "active",
    joinDate: "Mar 15, 2023",
    eventsBooked: 12,
  },
  {
    id: "2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    role: "User",
    status: "active",
    joinDate: "Feb 3, 2023",
    eventsBooked: 8,
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    role: "User",
    status: "inactive",
    joinDate: "Jan 12, 2023",
    eventsBooked: 5,
  },
  {
    id: "4",
    name: "Emma Davis",
    email: "emma@example.com",
    role: "User",
    status: "active",
    joinDate: "Apr 7, 2023",
    eventsBooked: 15,
  },
  {
    id: "5",
    name: "James Wilson",
    email: "james@example.com",
    role: "User",
    status: "pending",
    joinDate: "May 22, 2023",
    eventsBooked: 2,
  },
  {
    id: "6",
    name: "Jessica Taylor",
    email: "jessica@example.com",
    role: "User",
    status: "active",
    joinDate: "Feb 14, 2023",
    eventsBooked: 7,
  },
  {
    id: "7",
    name: "Daniel Martinez",
    email: "daniel@example.com",
    role: "User",
    status: "active",
    joinDate: "Mar 29, 2023",
    eventsBooked: 9,
  },
  {
    id: "8",
    name: "Olivia Anderson",
    email: "olivia@example.com",
    role: "User",
    status: "inactive",
    joinDate: "Jan 5, 2023",
    eventsBooked: 4,
  },
];

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const filteredUsers = sampleUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = 
      statusFilter === "all" || 
      user.status === statusFilter;
      
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="page-container">
      <PageHeader
        title="User Management"
        description="View and manage users registered on the platform"
      >
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </PageHeader>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search users..." 
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => setIsFilterOpen(true)}>
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Advanced
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Events Booked</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`https://avatar.vercel.sh/${user.name}`} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          user.status === "active"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : user.status === "inactive"
                            ? "bg-red-50 text-red-700 border-red-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>{user.eventsBooked}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Deactivate User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8">
                    <div>
                      <h3 className="text-lg font-medium mb-2">No users found</h3>
                      <p className="text-muted-foreground">Try adjusting your search filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Advanced Filters</DialogTitle>
            <DialogDescription>
              Set advanced filtering options for users
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Join Date Range</Label>
              <div className="flex gap-2">
                <Input type="date" placeholder="From" />
                <Input type="date" placeholder="To" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Events Booked</Label>
              <div className="flex gap-2">
                <Input type="number" placeholder="Min" />
                <Input type="number" placeholder="Max" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Sort By</Label>
              <Select defaultValue="joinDate">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="joinDate">Join Date</SelectItem>
                  <SelectItem value="eventsBooked">Events Booked</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsFilterOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsFilterOpen(false)}>Apply Filters</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UsersPage;
