import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Globe, Map, Calendar1 as Calendar, DollarSign, User } from







"lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger } from
"@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ?
        "bg-background/95 shadow-md backdrop-blur-sm" :
        "bg-transparent"
      )}>

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Globe className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-bold text-primary">
            Global Voyager
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/destinations"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md">

                          <Map className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Explore All Destinations
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Discover amazing places around the world
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/destinations?region=asia"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-medium leading-none">Asia</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore the vibrant cultures of Asia
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/destinations?region=europe"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-medium leading-none">Europe</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Discover historic European destinations
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/destinations?region=americas"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">

                          <div className="text-sm font-medium leading-none">Americas</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Experience the diverse Americas
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/itinerary-builder">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Itinerary Builder
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/budget-planner">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Budget Planner
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/blog">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Travel Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline">
              <Link to="/profile">
                <User className="mr-2 h-4 w-4" />
                Account
              </Link>
            </Button>
            <Button asChild>
              <Link to="/itinerary-builder">Plan Your Trip</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2">

            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen &&
      <div className="absolute left-0 right-0 top-16 z-50 border-b border-border bg-background p-4 shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
            to="/"
            className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-accent">

              Home
            </Link>
            <Link
            to="/destinations"
            className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-accent">

              <Map className="h-5 w-5" />
              Destinations
            </Link>
            <Link
            to="/itinerary-builder"
            className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-accent">

              <Calendar className="h-5 w-5" />
              Itinerary Builder
            </Link>
            <Link
            to="/budget-planner"
            className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-accent">

              <DollarSign className="h-5 w-5" />
              Budget Planner
            </Link>
            <Link
            to="/blog"
            className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-accent">

              Blog
            </Link>
            <Link
            to="/profile"
            className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-accent">

              <User className="h-5 w-5" />
              Account
            </Link>
            <Button asChild className="w-full">
              <Link to="/itinerary-builder">Plan Your Trip</Link>
            </Button>
          </nav>
        </div>
      }
    </header>);

};

export default Navbar;