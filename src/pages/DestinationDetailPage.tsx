import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Clock, Users, ChevronRight, Heart, Share2, Map, Info, Camera, Calendar as CalendarIcon } from "lucide-react";
import { destinations } from "@/data/destinations";
import { formatCurrency } from "@/lib/utils";
import NotFoundPage from "./NotFoundPage";

const DestinationDetailPage = () => {
  const { id } = useParams<{id: string;}>();
  const [destination, setDestination] = useState(
    destinations.find((d) => d.id === id)
  );
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock additional images
  const additionalImages = [
  destination?.imageUrl,
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
  "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c",
  "https://images.unsplash.com/photo-1517861605425-0f64b7ad8282"];


  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading destination details...</p>
        </div>
      </div>);

  }

  if (!destination) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/destinations" className="text-white/80 hover:text-white">
                Destinations
              </Link>
              <ChevronRight className="h-4 w-4 text-white/60" />
              <Link
                to={`/destinations?region=${destination.region}`}
                className="text-white/80 hover:text-white">

                {destination.region}
              </Link>
              <ChevronRight className="h-4 w-4 text-white/60" />
              <span>{destination.name}</span>
            </div>
            <h1 className="mt-2 font-heading text-3xl font-bold text-shadow-lg md:text-5xl">
              {destination.name}, {destination.country}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <MapPin className="mr-1 h-5 w-5" />
                <span>{destination.country}</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>{destination.rating} (120 reviews)</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-5 w-5" />
                <span>Best time: {destination.bestTimeToVisit.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Column - Main Content */}
          <div className="flex-1">
            {/* Action Buttons */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant={isFavorite ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "bg-red-500 hover:bg-red-600" : ""}>

                  <Heart
                    className={`mr-1 h-4 w-4 ${
                    isFavorite ? "fill-white" : ""}`
                    } />

                  {isFavorite ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-1 h-4 w-4" />
                  Share
                </Button>
              </div>
              <span className="text-xl font-bold text-primary">
                From {formatCurrency(destination.price)}
              </span>
            </div>

            {/* Tabs Navigation */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="map">Map</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="mb-4 font-heading text-2xl font-bold">
                      About {destination.name}
                    </h2>
                    <p className="text-muted-foreground">
                      {destination.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-heading text-xl font-semibold">
                      Highlights
                    </h3>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      {destination.activities.map((activity, index) =>
                      <li
                        key={index}
                        className="flex items-center rounded-md bg-accent/10 px-3 py-2">

                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                            {index + 1}
                          </div>
                          {activity}
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 font-heading text-xl font-semibold">
                      Best Time to Visit
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December"].
                      map((month) =>
                      <div
                        key={month}
                        className={`rounded-md px-3 py-1 text-sm ${
                        destination.bestTimeToVisit.includes(month) ?
                        "bg-primary text-primary-foreground" :
                        "bg-muted text-muted-foreground"}`
                        }>

                          {month}
                        </div>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {destination.bestTimeToVisit.join(", ")} offer the best
                      weather conditions for visiting {destination.name}.
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Photos Tab */}
              <TabsContent value="photos" className="mt-6">
                <div className="space-y-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={additionalImages[selectedImage]}
                      alt={`${destination.name} view ${selectedImage + 1}`}
                      className="h-full w-full object-cover" />

                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {additionalImages.map((img, index) =>
                    <div
                      key={index}
                      className={`cursor-pointer overflow-hidden rounded-md ${
                      selectedImage === index ?
                      "ring-2 ring-primary ring-offset-2" :
                      ""}`
                      }
                      onClick={() => setSelectedImage(index)}>

                        <img
                        src={img}
                        alt={`${destination.name} thumbnail ${index + 1}`}
                        className="aspect-video w-full object-cover" />

                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Activities Tab */}
              <TabsContent value="activities" className="mt-6">
                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-bold">
                    Popular Activities in {destination.name}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {destination.activities.map((activity, index) =>
                    <Card key={index}>
                        <CardContent className="flex items-center gap-4 p-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Camera className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-medium">{activity}</h3>
                            <p className="text-sm text-muted-foreground">
                              Highly recommended experience
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Map Tab */}
              <TabsContent value="map" className="mt-6">
                <div className="space-y-4">
                  <h2 className="font-heading text-2xl font-bold">
                    Location of {destination.name}
                  </h2>
                  <div className="map-container aspect-[16/9] w-full rounded-lg bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <Map className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="mt-2 text-muted-foreground">
                          Interactive map would be displayed here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Coordinates: {destination.coordinates.lat},{" "}
                          {destination.coordinates.lng}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking Card */}
          <div className="w-full lg:w-80">
            <div className="sticky top-24">
              <Card className="overflow-hidden">
                <div className="bg-primary p-4 text-primary-foreground">
                  <h3 className="text-xl font-bold">Plan Your Trip</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Customize your {destination.name} experience
                  </p>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Travel Dates
                      </label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Select dates"
                          className="input-field w-full pl-10" />

                      </div>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Travelers
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="number"
                          min="1"
                          defaultValue="2"
                          className="input-field w-full pl-10" />

                      </div>
                    </div>
                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-center justify-between">
                        <span>Base price</span>
                        <span>{formatCurrency(destination.price)}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
                        <span>Taxes & fees</span>
                        <span>{formatCurrency(destination.price * 0.15)}</span>
                      </div>
                      <div className="mt-3 border-t border-border pt-2 font-bold">
                        <div className="flex items-center justify-between">
                          <span>Total</span>
                          <span>
                            {formatCurrency(destination.price * 1.15)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">Book Now</Button>
                    <Button variant="outline" className="w-full">
                      <Info className="mr-2 h-4 w-4" />
                      Request Information
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-4 rounded-lg border border-border p-4">
                <h3 className="mb-2 font-medium">Need Help?</h3>
                <p className="text-sm text-muted-foreground">
                  Our travel experts are ready to assist you in planning your
                  perfect trip to {destination.name}.
                </p>
                <Button variant="link" className="mt-2 px-0">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Destinations */}
        <div className="mt-12">
          <h2 className="mb-6 font-heading text-2xl font-bold">
            Similar Destinations You Might Like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.
            filter(
              (d) =>
              d.id !== destination.id && (
              d.region === destination.region ||
              d.tags.some((tag) => destination.tags.includes(tag))))
            .
            slice(0, 4).
            map((dest) =>
            <Link
              to={`/destinations/${dest.id}`}
              key={dest.id}
              className="group">

                  <Card className="card-destination overflow-hidden transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="font-heading text-lg font-bold text-white">
                          {dest.name}, {dest.country}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">
                        {dest.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium">
                            {dest.rating}
                          </span>
                        </div>
                        <span className="font-bold text-primary">
                          {formatCurrency(dest.price)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
            )}
          </div>
        </div>
      </div>
    </div>);

};

export default DestinationDetailPage;