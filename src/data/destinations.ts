export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  price: number;
  rating: number;
  tags: string[];
  activities: string[];
  bestTimeToVisit: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const destinations: Destination[] = [
  {
    id: "bali-indonesia",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    description:
      "Bali is a living postcard, an Indonesian paradise that feels like a fantasy. Soak up the sun on a stretch of fine white sand, or commune with the tropical creatures as you dive along coral ridges or the colorful wreck of a WWII war ship. On shore, the lush jungle shelters stone temples and mischievous monkeys. The 'artistic capital' of Ubud is the perfect place to see a cultural dance performance, take a batik or silver-smithing workshop, or invigorate your mind and body in a yoga class.",
    shortDescription: "Tropical paradise with rich culture and beautiful beaches",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 1299,
    rating: 4.8,
    tags: ["Beach", "Culture", "Adventure"],
    activities: [
      "Surfing in Kuta",
      "Visit Ubud Monkey Forest",
      "Explore Tegalalang Rice Terraces",
      "Visit Uluwatu Temple",
      "Relax at Nusa Dua Beach",
    ],
    bestTimeToVisit: ["April", "May", "June", "September"],
    coordinates: {
      lat: -8.4095,
      lng: 115.1889,
    },
  },
  {
    id: "santorini-greece",
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    description:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    shortDescription: "Iconic island with white-washed buildings and stunning sunsets",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    price: 1899,
    rating: 4.9,
    tags: ["Romantic", "Beach", "Luxury"],
    activities: [
      "Watch sunset in Oia",
      "Visit ancient Akrotiri",
      "Wine tasting tour",
      "Boat tour to volcanic hot springs",
      "Relax at Red Beach",
    ],
    bestTimeToVisit: ["April", "May", "September", "October"],
    coordinates: {
      lat: 36.3932,
      lng: 25.4615,
    },
  },
  {
    id: "kyoto-japan",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    description:
      "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It's also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    shortDescription: "Ancient city with over 1,600 Buddhist temples and 400 Shinto shrines",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: 1599,
    rating: 4.7,
    tags: ["Culture", "History", "Food"],
    activities: [
      "Visit Fushimi Inari Shrine",
      "Explore Arashiyama Bamboo Grove",
      "Tour Kinkaku-ji (Golden Pavilion)",
      "Experience traditional tea ceremony",
      "Stroll through Gion district",
    ],
    bestTimeToVisit: ["March", "April", "October", "November"],
    coordinates: {
      lat: 35.0116,
      lng: 135.7681,
    },
  },
  {
    id: "machu-picchu-peru",
    name: "Machu Picchu",
    country: "Peru",
    region: "Americas",
    description:
      "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.",
    shortDescription: "Ancient Incan citadel set amidst breathtaking mountain scenery",
    imageUrl: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    price: 1799,
    rating: 4.9,
    tags: ["History", "Adventure", "UNESCO"],
    activities: [
      "Hike the Inca Trail",
      "Explore the ancient ruins",
      "Visit Huayna Picchu",
      "Tour Sacred Valley",
      "Experience Cusco city",
    ],
    bestTimeToVisit: ["May", "June", "July", "August", "September"],
    coordinates: {
      lat: -13.1631,
      lng: -72.5450,
    },
  },
  {
    id: "marrakech-morocco",
    name: "Marrakech",
    country: "Morocco",
    region: "Africa",
    description:
      "Marrakech, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire, with mazelike alleys where thriving souks (marketplaces) sell traditional textiles, pottery and jewelry. A symbol of the city, and visible for miles, is the Moorish minaret of 12th-century Koutoubia Mosque.",
    shortDescription: "Vibrant city with colorful markets, palaces and gardens",
    imageUrl: "https://images.unsplash.com/photo-1597212618440-806262de4f6b",
    price: 1199,
    rating: 4.6,
    tags: ["Culture", "Shopping", "Food"],
    activities: [
      "Explore Jemaa el-Fnaa square",
      "Visit Bahia Palace",
      "Tour Majorelle Garden",
      "Shop in the souks",
      "Experience a traditional hammam",
    ],
    bestTimeToVisit: ["March", "April", "May", "October", "November"],
    coordinates: {
      lat: 31.6295,
      lng: -7.9811,
    },
  },
  {
    id: "reykjavik-iceland",
    name: "Reykjavik",
    country: "Iceland",
    region: "Europe",
    description:
      "Reykjavik, on the coast of Iceland, is the country's capital and largest city. It's home to the National and Saga museums, tracing Iceland's Viking history. The striking concrete Hallgrimskirkja church and rotating Perlan glass dome offer sweeping views of the sea and nearby hills. Exemplifying the island's volcanic activity is the geothermal Blue Lagoon spa, near the village of Grindavik.",
    shortDescription: "Gateway to stunning natural wonders including geysers and northern lights",
    imageUrl: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    price: 1699,
    rating: 4.7,
    tags: ["Nature", "Adventure", "Unique"],
    activities: [
      "See the Northern Lights",
      "Relax in the Blue Lagoon",
      "Tour the Golden Circle",
      "Whale watching",
      "Visit Hallgrimskirkja",
    ],
    bestTimeToVisit: ["June", "July", "August", "September"],
    coordinates: {
      lat: 64.1466,
      lng: -21.9426,
    },
  },
  {
    id: "cape-town-south-africa",
    name: "Cape Town",
    country: "South Africa",
    region: "Africa",
    description:
      "Cape Town is a port city on South Africa's southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain's flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island, the notorious prison that once held Nelson Mandela, which is now a living museum.",
    shortDescription: "Stunning coastal city nestled between mountains and ocean",
    imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
    price: 1499,
    rating: 4.8,
    tags: ["Nature", "Beach", "Wildlife"],
    activities: [
      "Visit Table Mountain",
      "Tour Robben Island",
      "Explore Cape of Good Hope",
      "Wine tasting in Stellenbosch",
      "Visit Boulders Beach penguin colony",
    ],
    bestTimeToVisit: ["January", "February", "March", "October", "November", "December"],
    coordinates: {
      lat: -33.9249,
      lng: 18.4241,
    },
  },
  {
    id: "new-york-usa",
    name: "New York City",
    country: "United States",
    region: "Americas",
    description:
      "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
    shortDescription: "Iconic metropolis known for its skyscrapers, culture and energy",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    price: 1899,
    rating: 4.7,
    tags: ["Urban", "Culture", "Shopping"],
    activities: [
      "Visit Times Square",
      "Explore Central Park",
      "Tour the Metropolitan Museum of Art",
      "See the Statue of Liberty",
      "Walk across Brooklyn Bridge",
    ],
    bestTimeToVisit: ["April", "May", "September", "October", "November", "December"],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
  },
];