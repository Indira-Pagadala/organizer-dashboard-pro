
import { Link, NavLink } from "react-router-dom";
import { Bell, LogOut, Menu, Settings, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Events", href: "/events" },
  { title: "Organizers", href: "/organizers" },
  { title: "Users", href: "/users" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between px-4 md:px-6 h-14">
        <div className="flex items-center gap-2 lg:gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 sm:max-w-xs">
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Link to="/" className="flex items-center gap-2 font-semibold">
                    <span>EventHub Admin</span>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="ml-auto"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="flex-1">
                  <nav className="flex flex-col gap-2">
                    {routes.map((route) => (
                      <NavLink
                        key={route.href}
                        to={route.href}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? "active" : ""}`
                        }
                        onClick={() => setOpen(false)}
                      >
                        {route.title}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="hidden md:inline">EventHub Admin</span>
            <span className="md:hidden">EH</span>
          </Link>
        </div>
        <div className="flex-1 hidden md:block">
          <nav className="flex h-full items-center gap-4 ml-6">
            {routes.map((route) => (
              <NavLink
                key={route.href}
                to={route.href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {route.title}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="p-2 text-sm text-muted-foreground">
                No new notifications
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Account settings"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.png" alt="Admin" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
