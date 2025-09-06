import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import { Calendar1 as Calendar, MapPin, Plus, Trash2, Clock, Save, Download, Share2, Plane, Hotel, UtensilsCrossed as Utensils, Camera, Car, Compass } from














"lucide-react";
import { destinations } from "@/data/destinations";

interface ItineraryDay {
  id: string;
  day: number;
  activities: {
    id: string;
    time: string;
    title: string;
    description: string;
    type: string;
  }[];
}

const activityTypes = [
{ value: "transportation", label: "Transportation", icon: <Plane className="h-4 w-4" /> },
{ value: "accommodation", label: "Accommodation", icon: <Hotel className="h-4 w-4" /> },
{ value: "food", label: "Food & Dining", icon: <Utensils className="h-4 w-4" /> },
{ value: "sightseeing", label: "Sightseeing", icon: <Camera className="h-4 w-4" /> },
{ value: "activity", label: "Activity", icon: <Compass className="h-4 w-4" /> },
{ value: "other", label: "Other", icon: <Car className="h-4 w-4" /> }];


const ItineraryBuilderPage = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [itineraryDays, setItineraryDays] = useState<ItineraryDay[]>([
  {
    id: "day-1",
    day: 1,
    activities: [
    {
      id: "activity-1",
      time: "09:00",
      title: "Arrival and Check-in",
      description: "Arrive at the destination and check in to your accommodation.",
      type: "transportation"
    }]

  }]
  );
  const [itineraryName, setItineraryName] = useState("My Travel Itinerary");

  const addDay = () => {
    const newDay = {
      id: `day-${itineraryDays.length + 1}`,
      day: itineraryDays.length + 1,
      activities: []
    };
    setItineraryDays([...itineraryDays, newDay]);
  };

  const removeDay = (dayId: string) => {
    setItineraryDays(itineraryDays.filter((day) => day.id !== dayId));
  };

  const addActivity = (dayId: string) => {
    const updatedDays = itineraryDays.map((day) => {
      if (day.id === dayId) {
        return {
          ...day,
          activities: [
          ...day.activities,
          {
            id: `activity-${Date.now()}`,
            time: "12:00",
            title: "New Activity",
            description: "",
            type: "activity"
          }]

        };
      }
      return day;
    });
    setItineraryDays(updatedDays);
  };

  const removeActivity = (dayId: string, activityId: string) => {
    const updatedDays = itineraryDays.map((day) => {
      if (day.id === dayId) {
        return {
          ...day,
          activities: day.activities.filter(
            (activity) => activity.id !== activityId
          )
        };
      }
      return day;
    });
    setItineraryDays(updatedDays);
  };

  const updateActivity = (
  dayId: string,
  activityId: string,
  field: string,
  value: string) =>
  {
    const updatedDays = itineraryDays.map((day) => {
      if (day.id === dayId) {
        return {
          ...day,
          activities: day.activities.map((activity) => {
            if (activity.id === activityId) {
              return {
                ...activity,
                [field]: value
              };
            }
            return activity;
          })
        };
      }
      return day;
    });
    setItineraryDays(updatedDays);
  };

  const saveItinerary = () => {
    // In a real app, this would save to a database
    alert("Itinerary saved successfully!");
  };

  const getActivityIcon = (type: string) => {
    const activityType = activityTypes.find((t) => t.value === type);
    return activityType?.icon || <Compass className="h-4 w-4" />;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Itinerary Builder
        </h1>
        <p className="mt-2 text-muted-foreground">
          Plan your perfect trip day by day with our interactive itinerary
          builder
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Itinerary Details */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Itinerary Name
                  </label>
                  <Input
                    type="text"
                    value={itineraryName}
                    onChange={(e) => setItineraryName(e.target.value)}
                    placeholder="My Travel Itinerary" />

                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Destination
                  </label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) =>
                      <SelectItem key={dest.id} value={dest.id}>
                          {dest.name}, {dest.country}
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="pl-10" />

                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      End Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="pl-10" />

                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="mb-2 font-medium">Itinerary Actions</h3>
                  <div className="flex flex-col space-y-2">
                    <Button onClick={saveItinerary}>
                      <Save className="mr-2 h-4 w-4" />
                      Save Itinerary
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export as PDF
                    </Button>
                    <Button variant="outline">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Itinerary
                    </Button>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-4">
                  <h3 className="mb-2 font-medium">Need Inspiration?</h3>
                  <p className="text-sm text-muted-foreground">
                    Check out our suggested itineraries for popular destinations
                    or consult with our travel experts for personalized
                    recommendations.
                  </p>
                  <Button variant="link" className="mt-2 px-0">
                    View Suggested Itineraries
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Day by Day Planner */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-2xl font-semibold">
              Day by Day Planner
            </h2>
            <Button onClick={addDay}>
              <Plus className="mr-2 h-4 w-4" />
              Add Day
            </Button>
          </div>

          <div className="space-y-4">
            {itineraryDays.map((day) =>
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}>

                <Card>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible defaultValue={day.id}>
                      <AccordionItem value={day.id} className="border-none">
                        <div className="flex items-center justify-between border-b border-border p-4">
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center">
                              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                {day.day}
                              </div>
                              <h3 className="text-lg font-medium">
                                Day {day.day}
                              </h3>
                            </div>
                          </AccordionTrigger>
                          <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeDay(day.id);
                          }}
                          className="h-8 w-8 p-0">

                            <Trash2 className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Remove day</span>
                          </Button>
                        </div>
                        <AccordionContent className="p-4">
                          <div className="space-y-4">
                            {day.activities.map((activity) =>
                          <div
                            key={activity.id}
                            className="rounded-md border border-border p-4">

                                <div className="mb-4 flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                                      {getActivityIcon(activity.type)}
                                    </div>
                                    <div className="flex items-center">
                                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                                      <Input
                                    type="time"
                                    value={activity.time}
                                    onChange={(e) =>
                                    updateActivity(
                                      day.id,
                                      activity.id,
                                      "time",
                                      e.target.value
                                    )
                                    }
                                    className="w-24 border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0" />

                                    </div>
                                  </div>
                                  <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                removeActivity(day.id, activity.id)
                                }
                                className="h-8 w-8 p-0">

                                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                                    <span className="sr-only">
                                      Remove activity
                                    </span>
                                  </Button>
                                </div>
                                <div className="space-y-3">
                                  <div>
                                    <Input
                                  value={activity.title}
                                  onChange={(e) =>
                                  updateActivity(
                                    day.id,
                                    activity.id,
                                    "title",
                                    e.target.value
                                  )
                                  }
                                  placeholder="Activity Title"
                                  className="border-none bg-muted px-3 py-2 focus-visible:ring-1" />

                                  </div>
                                  <div>
                                    <Textarea
                                  value={activity.description}
                                  onChange={(e) =>
                                  updateActivity(
                                    day.id,
                                    activity.id,
                                    "description",
                                    e.target.value
                                  )
                                  }
                                  placeholder="Activity description..."
                                  className="min-h-[80px] resize-none border-none bg-muted px-3 py-2 focus-visible:ring-1" />

                                  </div>
                                  <div>
                                    <Select
                                  value={activity.type}
                                  onValueChange={(value) =>
                                  updateActivity(
                                    day.id,
                                    activity.id,
                                    "type",
                                    value
                                  )
                                  }>

                                      <SelectTrigger className="border-none bg-muted">
                                        <SelectValue placeholder="Activity Type" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {activityTypes.map((type) =>
                                    <SelectItem
                                      key={type.value}
                                      value={type.value}>

                                            <div className="flex items-center">
                                              {type.icon}
                                              <span className="ml-2">
                                                {type.label}
                                              </span>
                                            </div>
                                          </SelectItem>
                                    )}
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              </div>
                          )}
                            <Button
                            variant="outline"
                            onClick={() => addActivity(day.id)}
                            className="w-full">

                              <Plus className="mr-2 h-4 w-4" />
                              Add Activity
                            </Button>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {itineraryDays.length === 0 &&
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
              <Calendar className="mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-medium">No days added yet</h3>
              <p className="mb-4 text-muted-foreground">
                Start building your itinerary by adding your first day
              </p>
              <Button onClick={addDay}>
                <Plus className="mr-2 h-4 w-4" />
                Add Day
              </Button>
            </div>
          }
        </div>
      </div>
    </div>);

};

export default ItineraryBuilderPage;