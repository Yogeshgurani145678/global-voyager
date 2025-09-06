import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { User, Settings, Bell, Lock, CreditCard, MapPin, Calendar1 as Calendar, Heart, Bookmark, Clock, Save, Upload, Globe, Edit, Plus } from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    bio: "Passionate traveler with a love for exploring new cultures and cuisines. Always planning my next adventure!"
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData({
      ...profileData,
      [field]: value
    });
  };

  const savedTrips = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    dates: "Jun 15 - Jun 28, 2023",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
  },
  {
    id: 2,
    destination: "Santorini, Greece",
    dates: "Sep 5 - Sep 15, 2023",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff"
  },
  {
    id: 3,
    destination: "Kyoto, Japan",
    dates: "Nov 10 - Nov 20, 2023",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
  }];


  const upcomingTrips = [
  {
    id: 1,
    destination: "Machu Picchu, Peru",
    dates: "Mar 5 - Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    countdown: "45 days"
  }];


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          My Profile
        </h1>
        <p className="mt-2 text-muted-foreground">
          Manage your account settings and view your travel history
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://i.pravatar.cc/150?img=12" alt={profileData.name} />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  {isEditing &&
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">

                      <Upload className="h-4 w-4" />
                      <span className="sr-only">Upload new photo</span>
                    </Button>
                  }
                </div>
                <h2 className="mt-4 text-xl font-bold">{profileData.name}</h2>
                <p className="text-muted-foreground">{profileData.location}</p>

                <div className="mt-6 w-full space-y-4">
                  {isEditing ?
                  <>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="name">Name</Label>
                        <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) =>
                        handleInputChange("name", e.target.value)
                        } />

                      </div>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                        handleInputChange("email", e.target.value)
                        } />

                      </div>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                        } />

                      </div>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="location">Location</Label>
                        <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) =>
                        handleInputChange("location", e.target.value)
                        } />

                      </div>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) =>
                        handleInputChange("bio", e.target.value)
                        }
                        rows={4} />

                      </div>
                      <div className="flex gap-2">
                        <Button
                        className="flex-1"
                        onClick={() => setIsEditing(false)}>

                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                        <Button
                        variant="outline"
                        onClick={() => setIsEditing(false)}>

                          Cancel
                        </Button>
                      </div>
                    </> :

                  <>
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Email</span>
                        <span>{profileData.email}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Phone</span>
                        <span>{profileData.phone}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Member Since</span>
                        <span>January 2022</span>
                      </div>
                      <div className="pt-2 text-left">
                        <h3 className="mb-2 font-medium">About Me</h3>
                        <p className="text-muted-foreground">{profileData.bio}</p>
                      </div>
                      <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setIsEditing(true)}>

                        <Edit className="mr-2 h-4 w-4" />
                        Edit Profile
                      </Button>
                    </>
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Tabs */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="trips">
            <TabsList className="w-full">
              <TabsTrigger value="trips" className="flex-1">
                <Globe className="mr-2 h-4 w-4" />
                My Trips
              </TabsTrigger>
              <TabsTrigger value="saved" className="flex-1">
                <Heart className="mr-2 h-4 w-4" />
                Saved
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* My Trips Tab */}
            <TabsContent value="trips" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="font-heading text-xl font-semibold">
                      Upcoming Trips
                    </h2>
                    {upcomingTrips.length > 0 ?
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {upcomingTrips.map((trip) =>
                      <div
                        key={trip.id}
                        className="group overflow-hidden rounded-lg border border-border">

                            <div className="relative h-40">
                              <img
                            src={trip.image}
                            alt={trip.destination}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />

                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="font-medium text-white">
                                  {trip.destination}
                                </h3>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center text-sm text-white/80">
                                    <Calendar className="mr-1 h-3 w-3" />
                                    {trip.dates}
                                  </div>
                                  <div className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                                    <Clock className="mr-1 inline-block h-3 w-3" />
                                    {trip.countdown}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between p-3">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button size="sm">Modify</Button>
                            </div>
                          </div>
                      )}
                      </div> :

                    <div className="mt-4 flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-8 text-center">
                        <Calendar className="mb-2 h-10 w-10 text-muted-foreground" />
                        <h3 className="mb-1 text-lg font-medium">
                          No upcoming trips
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Start planning your next adventure
                        </p>
                        <Button>Plan a Trip</Button>
                      </div>
                    }
                  </div>

                  <div className="mt-8">
                    <h2 className="font-heading text-xl font-semibold">
                      Past Trips
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {savedTrips.map((trip) =>
                      <div
                        key={trip.id}
                        className="group overflow-hidden rounded-lg border border-border">

                          <div className="relative h-40">
                            <img
                            src={trip.image}
                            alt={trip.destination}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                              <h3 className="font-medium text-white">
                                {trip.destination}
                              </h3>
                              <div className="flex items-center text-sm text-white/80">
                                <Calendar className="mr-1 h-3 w-3" />
                                {trip.dates}
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <Button variant="outline" size="sm" className="w-full">
                              View Trip Details
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Saved Tab */}
            <TabsContent value="saved" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h2 className="font-heading text-xl font-semibold">
                      Saved Destinations
                    </h2>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {savedTrips.map((trip) =>
                      <div
                        key={trip.id}
                        className="group overflow-hidden rounded-lg border border-border">

                          <div className="relative h-40">
                            <img
                            src={trip.image}
                            alt={trip.destination}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />

                            <Button
                            variant="secondary"
                            size="icon"
                            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 text-rose-500 hover:bg-white">

                              <Heart className="h-4 w-4 fill-current" />
                              <span className="sr-only">Remove from saved</span>
                            </Button>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                              <h3 className="font-medium text-white">
                                {trip.destination}
                              </h3>
                            </div>
                          </div>
                          <div className="p-3">
                            <Button variant="outline" size="sm" className="w-full">
                              View Details
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="font-heading text-xl font-semibold">
                      Saved Itineraries
                    </h2>
                    <div className="mt-4 space-y-3">
                      {[1, 2].map((item) =>
                      <div
                        key={item}
                        className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border p-4">

                          <div>
                            <h3 className="font-medium">
                              {item === 1 ?
                            "Southeast Asia Adventure" :
                            "European Capitals Tour"}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item === 1 ?
                            "Thailand, Vietnam, Cambodia • 14 days" :
                            "Paris, Berlin, Prague, Vienna • 10 days"}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Bookmark className="mr-1 h-4 w-4" />
                              View
                            </Button>
                            <Button size="sm">
                              <Edit className="mr-1 h-4 w-4" />
                              Edit
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-4 flex items-center font-heading text-xl font-semibold">
                        <Bell className="mr-2 h-5 w-5" />
                        Notification Settings
                      </h2>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="email-notifications" className="font-medium">
                              Email Notifications
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about your trips and special offers
                            </p>
                          </div>
                          <Switch id="email-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="price-alerts" className="font-medium">
                              Price Alerts
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Get notified when prices drop for your saved destinations
                            </p>
                          </div>
                          <Switch id="price-alerts" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="trip-reminders" className="font-medium">
                              Trip Reminders
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Receive reminders before your upcoming trips
                            </p>
                          </div>
                          <Switch id="trip-reminders" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h2 className="mb-4 flex items-center font-heading text-xl font-semibold">
                        <Lock className="mr-2 h-5 w-5" />
                        Security
                      </h2>
                      <div className="space-y-4">
                        <Button variant="outline">Change Password</Button>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="two-factor" className="font-medium">
                              Two-Factor Authentication
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch id="two-factor" />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h2 className="mb-4 flex items-center font-heading text-xl font-semibold">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Payment Methods
                      </h2>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg border border-border p-3">
                          <div className="flex items-center">
                            <div className="mr-3 h-10 w-16 rounded bg-gradient-to-r from-blue-600 to-blue-800"></div>
                            <div>
                              <p className="font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-muted-foreground">
                                Expires 12/2025
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                        <Button variant="outline">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Payment Method
                        </Button>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h2 className="mb-4 flex items-center font-heading text-xl font-semibold">
                        <User className="mr-2 h-5 w-5" />
                        Account
                      </h2>
                      <div className="space-y-3">
                        <Button variant="outline">Export My Data</Button>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>);

};

export default ProfilePage;