
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const AddOrganizerForm = ({ onClose }: { onClose: () => void }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Organizer created successfully",
        description: "The new organizer has been added to the platform.",
      });
      onClose();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Enter first name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Enter last name" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter email address" required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="Enter phone number" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="organization">Organization Name</Label>
        <Input id="organization" placeholder="Enter organization name" required />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input id="website" placeholder="https://www.example.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="commissionRate">Commission Rate (%)</Label>
        <Input 
          id="commissionRate" 
          type="number" 
          min="0" 
          max="100" 
          placeholder="Enter commission rate" 
          defaultValue="10"
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Main Event Category</Label>
        <Select defaultValue="conferences">
          <SelectTrigger id="category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="conferences">Conferences</SelectItem>
            <SelectItem value="concerts">Concerts</SelectItem>
            <SelectItem value="workshops">Workshops</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="food">Food & Dining</SelectItem>
            <SelectItem value="festivals">Festivals</SelectItem>
            <SelectItem value="arts">Arts & Culture</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea 
          id="description" 
          placeholder="Enter a brief description about the organizer"
          rows={3}
        />
      </div>
      
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onClose} type="button">
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Organizer"}
        </Button>
      </div>
    </form>
  );
};

export default AddOrganizerForm;
