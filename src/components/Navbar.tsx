
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Calendar, ChevronDown, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="flex items-center">
            <Calendar className="h-6 w-6 text-brand-blue mr-2" />
            <span className="text-xl font-semibold text-brand-blue">EventMaster</span>
            <span className="ml-1 text-xs bg-brand-blue text-white px-2 py-0.5 rounded-full">Admin</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <Link 
            to="/dashboard" 
            className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${location.pathname === '/events' || location.pathname.startsWith('/events/') ? 'active' : ''}`}
          >
            Events
          </Link>
          <Link 
            to="/organizers" 
            className={`nav-link ${location.pathname === '/organizers' || location.pathname.startsWith('/organizers/') ? 'active' : ''}`}
          >
            Organizers
          </Link>
          <Link 
            to="/users" 
            className={`nav-link ${location.pathname === '/users' ? 'active' : ''}`}
          >
            Users
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>

          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start text-sm">
                    <span className="font-medium">Admin User</span>
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/login">Log out</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {showMobileMenu && (
        <div className="md:hidden p-4 border-t bg-white animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/dashboard" 
              className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
              onClick={() => setShowMobileMenu(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/events" 
              className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
              onClick={() => setShowMobileMenu(false)}
            >
              Events
            </Link>
            <Link 
              to="/organizers" 
              className={`nav-link ${location.pathname === '/organizers' ? 'active' : ''}`}
              onClick={() => setShowMobileMenu(false)}
            >
              Organizers
            </Link>
            <Link 
              to="/users" 
              className={`nav-link ${location.pathname === '/users' ? 'active' : ''}`}
              onClick={() => setShowMobileMenu(false)}
            >
              Users
            </Link>
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-md text-sm font-medium text-red-500 hover:bg-red-50"
              onClick={() => setShowMobileMenu(false)}
            >
              Log out
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
