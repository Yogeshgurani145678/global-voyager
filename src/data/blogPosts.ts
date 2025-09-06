export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  imageUrl: string;
  category: string;
  tags: string[];
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Tips for Budget Travel in Southeast Asia",
    slug: "10-essential-tips-for-budget-travel-in-southeast-asia",
    excerpt:
      "Discover how to explore the wonders of Southeast Asia without breaking the bank with these practical budget travel tips.",
    content: `
      # 10 Essential Tips for Budget Travel in Southeast Asia

      Southeast Asia has long been a paradise for budget travelers, offering incredible experiences at a fraction of what you'd pay in Western countries. From the bustling streets of Bangkok to the serene beaches of Bali, this region offers endless adventures for those watching their wallet.

      ## 1. Travel During Shoulder Season

      The months just before and after peak tourist season offer the perfect balance of good weather and lower prices. For most of Southeast Asia, this means April-May and September-October. You'll find accommodation prices can drop by 30-50% during these periods.

      ## 2. Eat Street Food

      Some of the most delicious and authentic food in Southeast Asia comes from street vendors and small local restaurants. Not only is it incredibly tasty, but it's also very affordable, with meals often costing between $1-3 USD.

      ## 3. Use Local Transportation

      From tuk-tuks in Thailand to jeepneys in the Philippines, local transportation options are not only cheaper but also provide a more authentic experience. For longer distances, overnight buses and trains can save you both time and accommodation costs.

      ## 4. Stay in Hostels or Guesthouses

      Southeast Asia offers excellent budget accommodation options. Hostels with dorm beds can cost as little as $5-10 per night, while private rooms in guesthouses might range from $15-30.

      ## 5. Negotiate Prices

      In many Southeast Asian countries, bargaining is expected at markets and with tuk-tuk or taxi drivers. Always negotiate respectfully and remember that sometimes the difference might only be a dollar or two – significant to locals but perhaps not to you as a traveler.

      ## 6. Plan Your Visa Strategy

      Visa costs can add up quickly if you're visiting multiple countries. Research visa-free periods, visa-on-arrival options, and multi-entry visas to minimize these expenses.

      ## 7. Book Flights Strategically

      Use flight comparison tools and be flexible with your dates. Budget airlines like AirAsia, Scoot, and VietJet Air offer incredibly cheap flights between Southeast Asian countries if booked in advance.

      ## 8. Limit Alcohol Consumption

      Alcohol is often more expensive than food in Southeast Asia due to import taxes. Limiting your intake or choosing local brands can significantly reduce your daily expenses.

      ## 9. Use Local SIM Cards

      Instead of expensive international roaming, purchase local SIM cards with data packages. These are typically very affordable and can be found at airports or convenience stores.

      ## 10. Embrace Free Activities

      Many temples, parks, beaches, and hiking trails are free to enjoy. Some museums and cultural sites also offer free entry on certain days of the month.

      By following these tips, you can experience the rich cultures, stunning landscapes, and amazing food of Southeast Asia without emptying your bank account. Remember that some of the most memorable travel experiences don't cost anything at all!
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    date: "2023-06-15",
    imageUrl: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    category: "Budget Travel",
    tags: ["Southeast Asia", "Budget Tips", "Backpacking"],
    readTime: 8,
  },
  {
    id: "2",
    title: "The Ultimate Guide to Exploring Japan's Hidden Gems",
    slug: "the-ultimate-guide-to-exploring-japans-hidden-gems",
    excerpt:
      "Look beyond Tokyo and Kyoto to discover Japan's lesser-known but equally fascinating destinations.",
    content: `
      # The Ultimate Guide to Exploring Japan's Hidden Gems

      Japan is a country of contrasts, where ancient traditions blend seamlessly with cutting-edge technology. While Tokyo, Kyoto, and Osaka attract millions of visitors each year, there's much more to this fascinating country than its major cities. This guide will take you off the beaten path to discover Japan's hidden treasures.

      ## Takayama: Step Back in Time

      Nestled in the Japanese Alps, Takayama is a beautifully preserved Edo-period town. Its old town (Sanmachi Suji) features wooden merchant houses, sake breweries, and craft shops that have remained largely unchanged for centuries. Visit during the Takayama Festival (held in spring and fall) to witness elaborate floats and traditional performances.

      ## Naoshima: Island of Art

      This small island in the Seto Inland Sea has been transformed into a contemporary art destination. Dotted with installations, museums designed by renowned architect Tadao Ando, and the famous yellow pumpkin sculpture by Yayoi Kusama, Naoshima offers a unique blend of nature, art, and architecture.

      ## Koyasan: Sacred Mountain Retreat

      Mount Koya is the center of Shingon Buddhism, established over 1,200 years ago. Stay in a temple lodging (shukubo), participate in morning prayers, and explore the atmospheric Okunoin Cemetery, where stone paths wind through ancient cedar trees and moss-covered tombstones.

      ## Iya Valley: Japan's Lost World

      Deep in Shikoku's mountainous interior lies the remote Iya Valley, with its dramatic gorges, traditional vine bridges, and thatched roof farmhouses. Once a hideout for defeated warriors, today it's a place to experience rural Japan at its most authentic.

      ## Shirakawa-go: Fairytale Village

      This UNESCO World Heritage site is famous for its traditional gassho-zukuri farmhouses, some over 250 years old. Their steep thatched roofs, designed to withstand heavy snowfall, resemble hands in prayer. The village is particularly magical when illuminated on winter evenings.

      ## Yakushima: Mystical Forest Island

      This subtropical island south of Kyushu inspired the forests in Studio Ghibli's "Princess Mononoke." Hike through ancient cedar forests, some containing trees over 7,000 years old, and discover moss-covered landscapes that feel otherworldly.

      ## Kanazawa: Cultural Treasure

      Often called "Little Kyoto," Kanazawa escaped the bombing of WWII, preserving much of its cultural heritage. Visit Kenrokuen (one of Japan's three most beautiful landscape gardens), explore well-preserved samurai and geisha districts, and experience one of Japan's finest fish markets.

      ## Planning Your Journey

      - **Best Time to Visit**: Spring (March-May) and autumn (September-November) offer pleasant weather and stunning seasonal colors.
      - **Transportation**: Consider a Japan Rail Pass for cost-effective travel between regions.
      - **Accommodation**: Mix traditional ryokans (Japanese inns) with modern hotels for a balanced experience.
      - **Language**: While English is limited in rural areas, a translation app and basic Japanese phrases will go a long way.

      Exploring Japan beyond its famous cities reveals a deeper understanding of this complex and fascinating culture. These hidden gems offer authentic experiences, fewer crowds, and memories that will last a lifetime.
    `,
    author: {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    date: "2023-07-22",
    imageUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
    category: "Destinations",
    tags: ["Japan", "Off the Beaten Path", "Cultural Travel"],
    readTime: 10,
  },
  {
    id: "3",
    title: "Sustainable Travel: How to Reduce Your Environmental Impact",
    slug: "sustainable-travel-how-to-reduce-your-environmental-impact",
    excerpt:
      "Learn practical ways to make your travels more environmentally friendly without sacrificing experiences.",
    content: `
      # Sustainable Travel: How to Reduce Your Environmental Impact

      As awareness of climate change and environmental issues grows, many travelers are seeking ways to explore the world while minimizing their ecological footprint. Sustainable travel isn't about stopping exploration—it's about traveling more thoughtfully. Here's how you can make a positive difference.

      ## Choose Eco-Friendly Transportation

      Transportation typically accounts for the largest portion of travel's carbon footprint:

      - **Fly Less, Stay Longer**: Instead of several short trips, consider fewer but longer journeys.
      - **Offset Your Flights**: Many airlines now offer carbon offset programs. Alternatively, use independent organizations like Gold Standard or Climate Action Reserve.
      - **Use Public Transportation**: Trains, buses, and metros are generally more environmentally friendly than rental cars or taxis.
      - **Consider Slow Travel**: Traveling by train instead of flying not only reduces emissions but often provides a more immersive experience.

      ## Select Sustainable Accommodations

      Where you stay matters:

      - **Look for Certifications**: Eco-labels like LEED, Green Key, or EarthCheck indicate environmentally responsible practices.
      - **Support Local**: Family-run guesthouses often have smaller footprints than large hotel chains.
      - **Check Practices**: Does the accommodation use renewable energy, water conservation measures, or locally-sourced food?
      - **Conserve Resources**: Reuse towels, turn off lights and AC when leaving the room, and take shorter showers.

      ## Minimize Waste

      Single-use items are a major environmental issue:

      - **Pack Reusables**: Bring a water bottle, coffee cup, shopping bag, utensils, and food containers.
      - **Say No to Plastic**: Decline plastic straws, bags, and excessive packaging.
      - **Dispose Properly**: Learn local recycling rules and follow them.
      - **Leave No Trace**: When in natural areas, carry out everything you bring in.

      ## Support Local Communities

      Sustainable travel includes social responsibility:

      - **Buy Local Products**: Purchase souvenirs directly from artisans.
      - **Eat Local Food**: Patronize restaurants that source ingredients locally.
      - **Hire Local Guides**: They provide authentic insights while benefiting from tourism directly.
      - **Respect Cultural Norms**: Research and observe local customs and traditions.

      ## Protect Wildlife and Natural Habitats

      Responsible wildlife tourism:

      - **Choose Ethical Wildlife Experiences**: Avoid attractions that exploit animals for entertainment.
      - **Keep Your Distance**: Never touch, feed, or disturb wild animals.
      - **Stay on Marked Trails**: Prevent erosion and habitat destruction.
      - **Support Conservation**: Visit protected areas where entrance fees fund conservation efforts.

      ## Be Water-Wise

      Water scarcity affects many destinations:

      - **Take Short Showers**: Especially in drought-prone regions.
      - **Reuse Hotel Towels**: Hang them up instead of requesting daily laundering.
      - **Carry a Water Filter**: Reduce plastic bottle waste in places where tap water isn't potable.
      - **Choose Water-Conscious Activities**: Golf courses and swimming pools use enormous amounts of water.

      ## Educate Yourself and Others

      Knowledge leads to better choices:

      - **Research Destinations**: Understand local environmental challenges.
      - **Learn Key Phrases**: "No plastic bag, please" in the local language can be very useful.
      - **Share Your Experiences**: Inspire others by showing how sustainable travel enhances rather than diminishes the experience.

      Sustainable travel isn't about perfection—it's about making better choices when possible. Each small decision adds up to significant positive impact. By traveling more mindfully, we can ensure that the beautiful destinations we love remain vibrant and healthy for generations to come.
    `,
    author: {
      name: "Emma Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    date: "2023-08-05",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    category: "Sustainable Travel",
    tags: ["Eco-Friendly", "Responsible Tourism", "Green Travel"],
    readTime: 9,
  },
];