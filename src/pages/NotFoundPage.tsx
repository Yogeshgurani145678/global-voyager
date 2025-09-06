import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <Compass className="h-24 w-24 text-muted-foreground" />
      <h1 className="mt-6 font-heading text-4xl font-bold md:text-6xl">
        404 - Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-xl text-muted-foreground">
        Oops! It seems you've ventured off the map. The page you're looking for
        doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link to="/">Return Home</Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link to="/destinations">Explore Destinations</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;