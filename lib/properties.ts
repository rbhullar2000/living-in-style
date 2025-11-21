export interface Review {
  name: string
  rating: number
  comment: string
}

export interface Property {
  id: string
  title: string
  location: string
  lat: number
  lng: number
  price: number
  pricePeriod?: "week" | "month"
  rating: number
  reviewCount: number
  beds: number
  baths: number
  guests: number
  description: string
  amenities: string[]
  availability: string
  images: string[]
  featured?: boolean
  reviewsList: Review[]
}

export const properties: Property[] = [
  {
    id: "LHermitage",
    title: "Luxury 1-Bed at L'Hermitage Hotel & Residences",
    location: "788 Richards, Vancouver, BC",
    lat: 49.2809,
    lng: -123.1166,
    price: 4500,
    rating: 4.9,
    reviewCount: 124,
    beds: 1,
    baths: 1,
    guests: 4,
    description:
      "This elegant residence at L'Hermitage Hotel & Residences offers the perfect blend of luxury and convenience in the heart of downtown Vancouver. Situated at 788 Richards Street, this beautifully designed condo features a fully equipped kitchen with stainless steel appliances, an open-air balcony, and sophisticated furnishings that create a modern, welcoming atmosphere. The residence showcases thoughtful design elements such as hardwood flooring, large windows, and refined lighting accents that enhance every space. The open-concept layout allows natural light to flow throughout, creating a bright and airy environment ideal for both relaxation and entertaining.",
    amenities: [
      "24/7 Concierge Service",
      "L'Orangerie at L'Hermitage",
      "Café Medina",
      "IGA Marketplace",
      "Tim Hortons",
      "Rooftop Terrace",
      "Fitness Centre",
      "High-Speed WiFi",
      "Parking Included",
      "Fully Furnished",
    ],
    availability: "Located In Heart Of Downtown",
    images: [
      "/Lhermitage_kitchen.JPG",
      "/Lhermitage_livingroom.JPG",
      "/Lhermitage_bedroom.JPG",
      "/Lhermitage_bathroom.JPG",
      "/Lhermitage_office.JPG",
      "/Lhermitage_building.JPG",
      "/Lhermitage_boardroom.JPG",
      "/Lhermitage_gym.JPG",
      "/Lhermitage_entry.JPG",
      "/Lhermitage_lounge.JPG",
    ],
    featured: true,
    reviewsList: [
      {
        name: "Sarah Johnson",
        rating: 5,
        comment:
          "This was the perfect downtown stay. The condo was spotless, beautifully decorated, and in an unbeatable location.",
      },
      {
        name: "James Wu",
        rating: 5,
        comment:
          "The building amenities like the lounge, gym and rooftop garden really made it feel like a luxury hotel.",
      },
      {
        name: "Emily Tran",
        rating: 4,
        comment: "The unit itself was very well-appointed and the kitchen had everything I needed.",
      },
    ],
  },
  {
    id: "FairmontPacificRim",
    title: "Fairmont Pacific Rim Penthouse",
    location: "1038 Canada Place, Vancouver, BC",
    lat: 49.2885,
    lng: -123.117,
    price: 12000,
    rating: 4.8,
    reviewCount: 86,
    beds: 4,
    baths: 3,
    guests: 8,
    description:
      "Experience world-class luxury at the Fairmont Pacific Rim. This exceptional residence combines the sophistication of a five-star hotel with the privacy and comfort of a modern home. Step inside and discover refined interiors featuring high ceilings, rich hardwood flooring, and expansive floor-to-ceiling windows framing panoramic views of the ocean, Stanley Park, and the North Shore Mountains.",
    amenities: [
      "Botanist",
      "Botanist Bar",
      "The Lobby Lounge",
      "Fairmont Gold Lounge",
      "Willow Stream Spa",
      "Fitness center",
      "Infinity pool with cabanas",
      "Private terrace with fire pit",
    ],
    availability: "World-class Luxury",
    images: [
      "/fairmont_livingroom.JPG",
      "/fairmont_livingroom2.JPG",
      "/fairmont_balcony.JPG",
      "/fairmont_bathroom.JPG",
      "/fairmont_lobby.JPG",
    ],
    featured: true,
    reviewsList: [
      {
        name: "Oliver Smith",
        rating: 5,
        comment: "Absolutely stunning penthouse and world-class service.",
      },
      {
        name: "Grace Patel",
        rating: 5,
        comment: "This was hands down the best stay I've ever had in Vancouver.",
      },
      {
        name: "Liam Chen",
        rating: 4,
        comment: "Luxury at its finest. The price is steep, but you definitely get what you pay for.",
      },
    ],
  },
  {
    id: "CoalHarbour",
    title: "Prestigious Coal Harbour Stay",
    location: "1477 West Pender St, Vancouver, BC",
    lat: 49.2903,
    lng: -123.1241,
    price: 4500,
    rating: 4.7,
    reviewCount: 52,
    beds: 1,
    baths: 1,
    guests: 4,
    description:
      "Located at 1477 West Pender Street in the heart of Downtown Vancouver, this exceptional residence offers a prestigious Coal Harbour address just blocks from Stanley Park. This refined condominium combines sophistication with modern comfort, featuring expansive floor-to-ceiling windows that flood the interior with natural light and capture stunning city and water views.",
    amenities: [
      "Gourmet kitchen with Gaggenau appliances",
      "Floor-to-ceiling windows",
      "9-foot ceilings",
      "Brushed hardwood floors",
      "Private balcony with stunning views",
      "24/7 concierge service",
      "Secure underground parking",
      "Fitness center",
      "Indoor pool and hot tub",
    ],
    availability: "Blocks from Stanley Park",
    images: [
      "/coalharbour_livingroom.JPG",
      "/coalharbour_kitchen.JPG",
      "/coalharbour_washroom.JPG",
      "/coalharbour_building.JPG",
    ],
    featured: true,
    reviewsList: [
      {
        name: "Maya Green",
        rating: 5,
        comment: "This condo exceeded all expectations. The floor-to-ceiling windows brought in so much natural light.",
      },
      {
        name: "David Kim",
        rating: 4,
        comment: "Very elegant unit with an unbeatable Coal Harbour location.",
      },
      {
        name: "Nina Rivera",
        rating: 5,
        comment: "Quiet, luxurious, and just a few blocks from Stanley Park.",
      },
    ],
  },
  {
    id: "CultusLake",
    title: "Cultus Lake Retreat",
    location: "Cultus Lake, BC",
    lat: 49.0539,
    lng: -121.9888,
    price: 6000,
    rating: 4.6,
    reviewCount: 38,
    beds: 3,
    baths: 2,
    guests: 8,
    description:
      "Escape to your own private oasis at Cultus Lake. This stunning 3-bedroom, 2-bathroom home is perfect for families or groups looking to enjoy the natural beauty of British Columbia.",
    amenities: [
      "Spacious open-concept living area",
      "Modern kitchen with stainless steel appliances",
      "Large outdoor deck with BBQ",
      "Private backyard with fire pit",
      "Walking distance to Cultus Lake",
      "Parking for 3 vehicles",
      "Pet-friendly",
      "High-speed WiFi",
    ],
    availability: "A Perfect Escape",
    images: [
      "/cabin_outside.JPG",
      "/cabin_outside2.JPG",
      "/cabin_kitchen.JPG",
      "/cabin_patio.JPG",
      "/cabin_clubhouse.JPG",
      "/cabin_swimmingpool.JPG",
      "/cultus.JPG",
    ],
    featured: true,
    reviewsList: [
      {
        name: "Sophie Lin",
        rating: 5,
        comment: "This was such a peaceful and family-friendly getaway.",
      },
      {
        name: "Jason Moore",
        rating: 4,
        comment: "Really enjoyed our stay. The location is fantastic.",
      },
      {
        name: "Tara Singh",
        rating: 5,
        comment: "Perfect for a weekend away with friends!",
      },
    ],
  },
  {
    id: "WaterStreetByThePark",
    title: "Water Street by the Park - 27th Floor",
    location: "1626 Water Street, Kelowna, BC",
    lat: 49.8891,
    lng: -119.496,
    price: 3500,
    pricePeriod: "week",
    rating: 5,
    reviewCount: 0,
    beds: 2,
    baths: 2,
    guests: 4,
    description:
      "Experience breathtaking luxury on the 27th floor of Water Street by the Park. This brand-new 2-bedroom, 2-bathroom condo offers spectacular panoramic views of Okanagan Lake, the surrounding mountains, and the vibrant downtown marina.",
    amenities: [
      "Floor-to-ceiling windows",
      "Panoramic lake and mountain views",
      "378 sq ft private balcony",
      "High-end stainless steel appliances",
      "Quartz countertops",
      "Master bedroom with walk-in closet",
      "In-suite laundry",
      "High-speed WiFi",
      "Secure underground parking",
      "Fitness center",
    ],
    availability: "Taking bookings for Spring 2026",
    images: [
      "/waterstreet_view.JPG",
      "/waterstreet_balcony.JPG",
      "/waterstreet_balcony2.JPG",
      "/waterstreet_floorplan.png",
      "/waterstreet_model.JPG",
    ],
    featured: true,
    reviewsList: [],
  },
]

export async function getPropertyById(id: string): Promise<Property | undefined> {
  return properties.find((property) => property.id === id)
}

export function getFeaturedProperties(): (Property & { image: string })[] {
  return properties
    .filter((property) => property.featured)
    .map((property) => ({
      ...property,
      image: property.images?.[0] || "/placeholder.svg",
    }))
}
