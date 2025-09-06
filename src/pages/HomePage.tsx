import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Calendar1 as Calendar, Users, ChevronRight, Globe, Compass, Wallet, Star } from









"lucide-react";
import { destinations } from "@/data/destinations";
import { formatCurrency } from "@/lib/utils";

const HomePage = () => {
  const [searchDestination, setSearchDestination] = useState("");
  const featuredDestinations = destinations.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-explorer py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Travel background"
            className="h-full w-full object-cover opacity-30" />

        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <motion.h1
            className="font-display text-4xl font-bold text-shadow-lg md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-shadow md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>

            Explore the world's most breathtaking destinations with expert
            guidance and personalized travel experiences.
          </motion.p>
          
          <motion.div
            className="mx-auto mt-10 max-w-4xl rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm dark:bg-gray-800/90 md:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>

            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="flights">Flights</TabsTrigger>
                <TabsTrigger value="hotels">Hotels</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
              </TabsList>
              <TabsContent value="flights" className="mt-4">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      From
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        placeholder="Departure city"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      To
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        placeholder="Destination"
                        value={searchDestination}
                        onChange={(e) => setSearchDestination(e.target.value)}
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Dates
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        type="date"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Travelers
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                </div>
                <Button className="mt-4 w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Search Flights
                </Button>
              </TabsContent>
              <TabsContent value="hotels" className="mt-4">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Destination
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        placeholder="Where are you going?"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Check-in
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        type="date"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Check-out
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        type="date"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        type="number"
                        min="1"
                        defaultValue="2"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                </div>
                <Button className="mt-4 w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Search Hotels
                </Button>
              </TabsContent>
              <TabsContent value="packages" className="mt-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Destination
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        placeholder="Where to?"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Travel Dates
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        type="text"
                        placeholder="Select dates"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Budget
                    </label>
                    <div className="relative">
                      <Wallet className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                      <Input
                        type="text"
                        placeholder="Budget range"
                        className="pl-10 text-foreground" />

                    </div>
                  </div>
                </div>
                <Button className="mt-4 w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Find Packages
                </Button>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Featured Destinations
              </h2>
              <p className="mt-2 text-muted-foreground">
                Explore our handpicked selection of amazing places to visit
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/destinations">
                View All Destinations
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((destination) =>
            <Link
              to={`/destinations/${destination.id}`}
              key={destination.id}
              className="group">

                <Card className="card-destination overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="font-heading text-lg font-bold text-white">
                        {destination.name}, {destination.country}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      {destination.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">
                          {destination.rating}
                        </span>
                      </div>
                      <span className="font-bold text-primary">
                        {formatCurrency(destination.price)}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {destination.tags.map((tag) =>
                    <span
                      key={tag}
                      className="badge badge-primary rounded-full px-2 py-1 text-xs">

                          {tag}
                        </span>
                    )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-accent/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
            Why Travel With Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>

              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold">
                Expert Destination Knowledge
              </h3>
              <p className="text-muted-foreground">
                Our travel specialists have extensive firsthand experience in all
                our destinations, ensuring you get the best recommendations.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>

              <div className="mb-4 rounded-full bg-secondary/10 p-4">
                <Compass className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold">
                Personalized Itineraries
              </h3>
              <p className="text-muted-foreground">
                We craft custom travel experiences tailored to your interests,
                preferences, and travel style.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}>

              <div className="mb-4 rounded-full bg-accent/10 p-4">
                <Wallet className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold">
                Value for Money
              </h3>
              <p className="text-muted-foreground">
                We negotiate the best rates with our partners and offer
                transparent pricing with no hidden fees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Ready to Start Your Adventure?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Let us help you create unforgettable travel experiences tailored to
            your preferences and budget.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
              <Link to="/itinerary-builder">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>);

};

export default HomePage;