import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Star, MapPin, ListFilter as Filter, X } from





"lucide-react";
import { destinations } from "@/data/destinations";
import { formatCurrency } from "@/lib/utils";
import { Link } from "react-router-dom";

const regions = ["All", "Asia", "Europe", "Americas", "Africa"];
const tags = ["Beach", "Culture", "Adventure", "Nature", "Food", "History", "Luxury", "Romantic", "Wildlife", "Urban"];

const DestinationsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(searchParams.get("region") || "All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const regionParam = searchParams.get("region");
    if (regionParam) {
      setSelectedRegion(regionParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = [...destinations];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (dest) =>
        dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by region
    if (selectedRegion !== "All") {
      filtered = filtered.filter((dest) => dest.region === selectedRegion);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((dest) =>
      selectedTags.some((tag) => dest.tags.includes(tag))
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (dest) => dest.price >= priceRange[0] && dest.price <= priceRange[1]
    );

    setFilteredDestinations(filtered);
  }, [searchTerm, selectedRegion, selectedTags, priceRange]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
    prev.includes(tag) ?
    prev.filter((t) => t !== tag) :
    [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedRegion("All");
    setSelectedTags([]);
    setPriceRange([0, 2000]);
    setSearchParams({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Explore Destinations
        </h1>
        <p className="mt-2 text-muted-foreground">
          Discover amazing places around the world and plan your next adventure
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10" />

        </div>
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) =>
            <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            )}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2">

          <Filter className="h-4 w-4" />
          Filters
        </Button>
        {(searchTerm || selectedRegion !== "All" || selectedTags.length > 0 || priceRange[0] > 0 || priceRange[1] < 2000) &&
        <Button
          variant="ghost"
          onClick={clearFilters}
          className="flex items-center gap-2">

            <X className="h-4 w-4" />
            Clear Filters
          </Button>
        }
      </div>

      {/* Advanced Filters */}
      {isFilterOpen &&
      <div className="mb-8 rounded-lg border border-border bg-card p-4 shadow-sm">
          <h3 className="mb-4 font-medium">Advanced Filters</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-medium">Price Range</h4>
              <div className="px-2">
                <Slider
                defaultValue={priceRange}
                min={0}
                max={2000}
                step={50}
                onValueChange={setPriceRange}
                className="py-4" />

                <div className="flex items-center justify-between">
                  <span>{formatCurrency(priceRange[0])}</span>
                  <span>{formatCurrency(priceRange[1])}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium">Experience Type</h4>
              <div className="grid grid-cols-2 gap-2">
                {tags.map((tag) =>
              <div key={tag} className="flex items-center space-x-2">
                    <Checkbox
                  id={`tag-${tag}`}
                  checked={selectedTags.includes(tag)}
                  onCheckedChange={() => handleTagToggle(tag)} />

                    <label
                  htmlFor={`tag-${tag}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">

                      {tag}
                    </label>
                  </div>
              )}
              </div>
            </div>
          </div>
        </div>
      }

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          {filteredDestinations.length} destinations found
        </p>
      </div>

      {/* Destinations Grid */}
      {filteredDestinations.length > 0 ?
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDestinations.map((destination) =>
        <Link
          to={`/destinations/${destination.id}`}
          key={destination.id}
          className="group">

              <Card className="card-destination h-full overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                src={destination.imageUrl}
                alt={destination.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {destination.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {destination.country}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {destination.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
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
                    {destination.tags.slice(0, 3).map((tag) =>
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
        </div> :

      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 text-center">
          <Search className="mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-xl font-medium">No destinations found</h3>
          <p className="mb-4 text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
          <Button onClick={clearFilters}>Clear All Filters</Button>
        </div>
      }
    </div>);

};

export default DestinationsPage;