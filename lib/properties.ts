export interface Review {
  name: string
  rating: number
  comment: string
}

export interface Property {
  id: string
  title: string
  location: string
  price: number
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
    title: "Beautiful Downtown Condo",
    location: "788 Richards, Vancouver, BC",
    lat: 49.2809,
    lng: -123.1166,
    price: 4000,
    rating: 4.9,
    reviewCount: 124,
    beds: 1,
    baths: 1,
    guests: 4,
    description:
      "This elegant residence at L’Hermitage Hotel & Residences offers the perfect blend of luxury and convenience in the heart of downtown Vancouver. Situated at 788 Richards Street, this beautifully designed condo features a fully equipped kitchen with stainless steel appliances, an open-air balcony, and sophisticated furnishings that create a modern, welcoming atmosphere. Residents enjoy exclusive access to L’Hermitage Hotel amenities, including a fitness centre, library, resident lounge, and rooftop garden terrace. Step outside and you’re moments from Café Medina, IGA Marketplace, Tim Hortons, and some of Vancouver’s top salons and boutiques. Within minutes, you can walk to Yaletown, BC Place, Rogers Arena, the Vancouver Public Library, and the Granville Entertainment District. Whether you’re visiting Vancouver for business or pleasure, this premium condo in the L’Hermitage Residences offers a five-star living experience in one of the city’s most desirable addresses.",
    amenities: [
      "High-speed WiFi",
      "50 inch television",
      "Fully equipped gourmet kitchen",
      "In-unit washer/dryer",
      "Central air conditioning",
      "Parking space included",
      "24/7 Concierge",
      "Rooftop terrace access",
      "Fitness center",
      "Pet friendly",
    ],
    availability: "Available August 1st",
    images: [
      "/Lhermitage_kitchen.JPG?height=600&width=800&text=Modern+Condo+Kitchen",
      "/Lhermitage_livingroom.JPG?height=600&width=800&text=Modern+Condo+Living+Room",
      "/Lhermitage_bedroom.JPG?height=600&width=800&text=Modern+Condo+Bedroom",
      "/Lhermitage_bathroom.JPG?height=600&width=800&text=Modern+Condo+Bathroom",
      "/Lhermitage_office.JPG?height=600&width=800&text=Modern+Condo+Office",
    ],
    featured: true,
    reviewsList: [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "This was the perfect downtown stay. The condo was spotless, beautifully decorated, and in an unbeatable location. I loved being able to walk to Yaletown, grab breakfast at Cafe Medina, and relax on the balcony in the evenings. Will definitely book again."
  },
  {
    name: "James Wu",
    rating: 5,
    comment: "The building amenities like the lounge, gym and rooftop garden really made it feel like a luxury hotel. It was clean, quiet, and had everything I needed for a comfortable stay."
  },
  {
    name: "Emily Tran",
    rating: 4,
    comment: "The unit itself was very well-appointed and the kitchen had everything I needed. The location is super central, which was great for getting around."
  }
]
  },
  {
    id: "FairmontPacificRim",
    title: "Fairmont Pacific Rim Penthouse",
    location: "1038 Canada Place, Vancouver, BC",
    lat: 49.2885,
    lng: -123.1170,
    price: 12000,
    rating: 4.8,
    reviewCount: 86,
    beds: 4,
    baths: 3,
    guests: 8,
    description:
      "Experience world-class living at the Fairmont Pacific Rim — Vancouver’s premier address. Residents enjoy 24/7 access to five-star amenities and services, offering the unmatched convenience, comfort, and prestige of luxury hotel living every day..",
    amenities: [
      "Botanist",
      "Botanist Bar",
      "The Lobby Lounge",
      "Fairmont Gold Lounge",
      "Willow Stream Spa",
      "Fitness center",
      "Infinity pool with cabanas",
      "Private terrace with fire pit",
      "Chef's kitchen",
      "Daily housekeeping service",
    ],
    availability: "Available from March 1st 2026",
    images: [
      "/fairmont_livingroom.jpg?height=600&width=800&text=Penthouse+Living+Room",
      "/fairmont_livingroom2.jpg?height=600&width=800&text=Penthouse+Living+Room+2",
      "/fairmont_balcony.jpg?height=600&width=800&text=Penthouse+Balcony",
      "/fairmont_bathroom.jpg?height=600&width=800&text==Penthouse+Bathroom",
      "/fairmont_lobby.jpg?height=600&width=800&text==Penthouse+Lobby",
    ],
    featured: true,
   reviewsList: [
  {
    name: "Oliver Smith",
    rating: 5,
    comment: "Absolutely stunning penthouse and world-class service. From the private terrace with its fire pit to the chef’s kitchen, everything exceeded expectations. The location is perfect — close to the waterfront and convention centre. Felt like living in a five-star resort."
  },
  {
    name: "Grace Patel",
    rating: 5,
    comment: "This was hands down the best stay I've ever had in Vancouver. The Fairmont staff was incredibly attentive, and the amenities were unmatched — especially the spa and infinity pool. The penthouse was immaculate and spacious, with views that took my breath away every morning."
  },
  {
    name: "Liam Chen",
    rating: 4,
    comment: "Luxury at its finest — from the sleek interior design to the exceptional amenities, this place is elite. The price is steep, but you definitely get what you pay for. Only downside was that parking was valet-only, which was a minor inconvenience for me."
  }
]
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
      "Located at 1477 West Pender Street in the heart of Downtown Vancouver, this exceptional residence offers a prestigious Coal Harbour address just blocks from Stanley Park. This spacious and elegant condo blends luxury with sophistication, featuring floor-to-ceiling windows, 9-foot ceilings, brushed hardwood floors, and spa-inspired marble and glass bathrooms. The Italian Dada kitchen is outfitted with premium Gaggenau appliances, delivering both form and function. A rare opportunity to live in one of Vancouver’s most sought-after waterfront communities.",
    amenities: [
      "Gourmet kitchen with Gaggenau appliances",
      "Floor-to-ceiling windows",
      "9-foot ceilings",
      "Brushed hardwood floors",
      "Spa-inspired marble and glass bathrooms",
      "Private balcony with stunning views",
      "24/7 concierge service",
      "Secure underground parking",
      "Fitness center",
      "Indoor pool and hot tub",
    ],
    availability: "Available December 1st",
    images: [
      "/coalHarbour_livingroom.jpg?height=600&width=800&text=Coal_Harbour+Living+Room",
      "/coalHarbour_kitchen.jpg?height=600&width=800&text=Coal_Harbour+Kitchen",
      "/coalHarbour_washroom.jpg?height=600&width=800&text=Coal_Harbour+Washroom",
      "/coalHarbour_building.jpg?height=600&width=800&text=Coal_Harbour+Building",
    ],
    featured: true,
    reviewsList: [
  {
    name: "Maya Green",
    rating: 5,
    comment: "This condo exceeded all expectations. The floor-to-ceiling windows brought in so much natural light and offered incredible views of the harbour. The high-end finishes, especially the Gaggenau kitchen and spa-style bathroom, made it feel like a high-end retreat. I would absolutely recommend it to anyone wanting a peaceful yet central Vancouver stay."
  },
  {
    name: "David Kim",
    rating: 4,
    comment: "Very elegant unit with an unbeatable Coal Harbour location. Everything from the brushed hardwood floors to the concierge service was top-notch. The only reason I’m not giving 5 stars is that parking was a bit tight. Other than that, I’d gladly stay here again."
  },
  {
    name: "Nina Rivera",
    rating: 5,
    comment: "Quiet, luxurious, and just a few blocks from Stanley Park. I was able to walk everywhere — the Seawall, great restaurants, even downtown shopping. The building is very secure and beautifully maintained. Loved having coffee each morning with that view!"
  }
]
  },
  {
    id: "CultusLake",
    title: "Cultus Lake Retreat",
    location: "Cultus Lake, BC",
    lat: 49.0539,
    lng: -121.9888,
    price: 7000,
    rating: 4.6,
    reviewCount: 38,
    beds: 3,
    baths: 2,
    guests: 8,
    description:
      "Escape to your own private oasis at Cultus Lake. This stunning 3-bedroom, 2-bathroom home is perfect for families or groups looking to enjoy the natural beauty of British Columbia. With a spacious open-concept living area, modern kitchen, and large outdoor deck, you can relax and unwind in style. The property is just a short walk from the lake, where you can enjoy swimming, boating, and hiking in the surrounding mountains.",
    amenities: [
      "Spacious open-concept living area",
      "Modern kitchen with stainless steel appliances",
      "Large outdoor deck with BBQ",
      "Private backyard with fire pit",
      "Walking distance to Cultus Lake",
      "Close to hiking trails",
      "Parking for 3 vehicles",
      "Pet-friendly",
      "Washer and dryer",
      "High-speed WiFi",
    ],
    availability: "Available July 2026",
    images: [
      "/cabin_outside.jpg?height=600&width=800&text=Studio+Main+Area",
      "/cabin_outside2.jpg?height=600&width=800&text=Studio+Kitchen",
      "/cabin_kitchen.jpg?height=600&width=800&text=Studio+Bathroom",
     "/cabin_patio.jpg?height=600&width=800&text=Studio+Workspace",
      "/cabin_clubhouse.jpg?height=600&width=800&text=Studio+Workspace",
      "/cabin_swimmingpool.jpg?height=600&width=800&text=Studio+Workspace",
      "/cultus.jpg?height=600&width=800&text=Studio+Workspace",
    ],
    featured: true,
    reviewsList: [
  {
    name: "Sophie Lin",
    rating: 5,
    comment: "This was such a peaceful and family-friendly getaway. The open-concept living space was perfect for spending time together, and the outdoor deck became our favorite hangout spot. Being walking distance to the lake made it so easy to enjoy the water without any hassle. Everything was clean, cozy, and well-equipped. We’ll be back next summer for sure."
  },
  {
    name: "Jason Moore",
    rating: 4,
    comment: "Really enjoyed our stay — the location is fantastic, just a short walk to the lake and some great hiking trails. The kitchen was modern and had everything we needed, and the community fire pit was a great touch for evening hangouts. The only thing I’d suggest is adding a couple more fans for the warmer nights."
  },
  {
    name: "Tara Singh",
    rating: 5,
    comment: "Perfect for a weekend away with friends! The space was much bigger than I expected, and the deck with the BBQ was ideal for dinners and late-night chats. It’s rare to find a place that feels remote yet is so close to all the fun of Cultus Lake. The hosts thought of everything — even board games and extra towels."
  }
]
  }
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
