export interface Review {
  name: string
  rating: number
  comment: string
}

export interface Property {
  id: string
  title: string
  location: string
  lat: number // Added missing lat property
  lng: number // Added missing lng property
  price: number
  pricePeriod?: "week" | "month" // Added missing pricePeriod property
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
    rating: 4.9, // Uncommented rating property
    reviewCount: 124,
    beds: 1,
    baths: 1,
    guests: 4,
    description:
      "This elegant residence at L'Hermitage Hotel & Residences offers the perfect blend of luxury and convenience in the heart of downtown Vancouver. Situated at 788 Richards Street, this beautifully designed condo features a fully equipped kitchen with stainless steel appliances, an open-air balcony, and sophisticated furnishings that create a modern, welcoming atmosphere. <p> The residence showcases thoughtful design elements such as hardwood flooring, large windows, and refined lighting accents that enhance every space. The open-concept layout allows natural light to flow throughout, creating a bright and airy environment ideal for both relaxation and entertaining. Whether you're preparing dinner in the gourmet kitchen or enjoying a quiet morning coffee on the balcony, this suite provides an elevated living experience. <p> Residents enjoy exclusive access to L'Hermitage Hotel's renowned amenities, including a fitness centre, a beautifully appointed library, an elegant resident lounge, and a tranquil rooftop garden terrace — perfect for reading, socializing, or simply unwinding above the city. The hotel's 24-hour concierge and professional staff ensure every detail is taken care of, offering true peace of mind. <p> Step outside and you'll find yourself surrounded by Vancouver's most desirable attractions and conveniences. Stroll to Café Medina for brunch, pick up essentials from IGA Marketplace, or enjoy coffee at Tim Hortons — all just moments from your door. The neighbourhood is also home to several of Vancouver's best salons, restaurants, and boutique shops, giving you endless options for dining and leisure. <p> Within minutes, you can walk to Yaletown, BC Place, Rogers Arena, and the Vancouver Public Library, or explore the vibrant Granville Entertainment District for an evening out. Whether you're visiting Vancouver for business, relocation, or an extended stay, this premium condo at L'Hermitage Residences combines the prestige of hotel-style living with the comfort, privacy, and convenience of a fully furnished executive home",
    amenities: [
      "High-speed WiFi",
      "50 inch television",
      "Fully equipped gourmet kitchen",
      "In-unit washer/dryer",
      "Central air conditioning",
      "Parking space available",
      "24/7 Concierge",
      "Rooftop terrace access",
      "Fitness center",
      "Hotel lounge",
    ],
    availability: "Located In Heart Of Downtown", // Uncommented availability property
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
        rating: 5, // Uncommented rating property
        comment:
          "This was the perfect downtown stay. The condo was spotless, beautifully decorated, and in an unbeatable location. I loved being able to walk to Yaletown, grab breakfast at Cafe Medina, and relax on the balcony in the evenings. Will definitely book again.",
      },
      {
        name: "James Wu",
        rating: 5,
        comment:
          "The building amenities like the lounge, gym and rooftop garden really made it feel like a luxury hotel. It was clean, quiet, and had everything I needed for a comfortable stay.",
      },
      {
        name: "Emily Tran",
        rating: 4,
        comment:
          "The unit itself was very well-appointed and the kitchen had everything I needed. The location is super central, which was great for getting around.",
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
    rating: 4.8, // Uncommented rating property
    reviewCount: 86,
    beds: 4,
    baths: 3,
    guests: 8,
    description:
      "Experience world-class luxury at the Fairmont Pacific Rim — Vancouver's most prestigious waterfront address. Located in the heart of Coal Harbour, this exceptional residence combines the sophistication of a five-star hotel with the privacy and comfort of a modern home. Every detail has been designed for those who expect the finest in architecture, design, and service. <p> Step inside and discover refined interiors featuring high ceilings, rich hardwood flooring, and expansive floor-to-ceiling windows framing panoramic views of the ocean, Stanley Park, and the North Shore Mountains. The gourmet kitchen is equipped with top-of-the-line appliances, sleek cabinetry, and polished stone countertops — perfect for both entertaining and everyday indulgence. <p> As a resident, you'll enjoy 24-hour access to Fairmont Pacific Rim's renowned amenities and white-glove services. This includes a fully equipped fitness centre, a world-class spa, a heated rooftop pool with private cabanas, concierge and valet service, and exclusive access to the resident lounge and private terraces. Whether you're unwinding after a day in the city or hosting guests in elegant surroundings, every moment here feels elevated. <p> Positioned just steps from the seawall, waterfront dining, and the business and entertainment districts, this home offers unparalleled convenience and prestige. From sunrise walks along Coal Harbour to evening cocktails overlooking the ocean, living at Fairmont Pacific Rim Residences is the ultimate Vancouver lifestyle — effortless, sophisticated, and truly unforgettable.",
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
    availability: "World-class Luxury", // Uncommented availability property
    images: [
      "/fairmont_livingroom.jpg?height=600&width=800&text=Penthouse+Living+Room",
      "/fairmont_livingroom2.jpg?height=600&width=800&text=Penthouse+Living+Room+2",
      "/fairmont_balcony.jpg?height=600&width=800&text=Penthouse+Balcony",
      "/fairmont_bathroom.jpg?height=600&width=800&text=Penthouse+Bathroom",
      "/fairmont_lobby.jpg?height=600&width=800&text=Penthouse+Lobby",
    ],
    featured: true,
    reviewsList: [
      {
        name: "Oliver Smith",
        rating: 5,
        comment:
          "Absolutely stunning penthouse and world-class service. From the private terrace with its fire pit to the chef's kitchen, everything exceeded expectations. The location is perfect — close to the waterfront and convention centre. Felt like living in a five-star resort.",
      },
      {
        name: "Grace Patel",
        rating: 5,
        comment:
          "This was hands down the best stay I've ever had in Vancouver. The Fairmont staff was incredibly attentive, and the amenities were unmatched — especially the spa and infinity pool. The penthouse was immaculate and spacious, with views that took my breath away every morning.",
      },
      {
        name: "Liam Chen",
        rating: 4,
        comment:
          "Luxury at its finest — from the sleek interior design to the exceptional amenities, this place is elite. The price is steep, but you definitely get what you pay for. Only downside was that parking was valet-only, which was a minor inconvenience for me.",
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
    rating: 4.7, // Uncommented rating property
    reviewCount: 52,
    beds: 1,
    baths: 1,
    guests: 4,
    description:
      "Located at 1477 West Pender Street in the heart of Downtown Vancouver, this exceptional residence offers a prestigious Coal Harbour address just blocks from Stanley Park and the world-famous Seawall. <p> This refined condominium combines sophistication with modern comfort, featuring expansive floor-to-ceiling windows that flood the interior with natural light and capture stunning city and water views. The spacious open layout is complemented by 9-foot ceilings, brushed hardwood floors, and a warm, neutral palette that enhances the home's elegant character. <p> The Italian Dada kitchen is equipped with premium Gaggenau appliances, quartz countertops, custom cabinetry, and a large central island — ideal for both everyday living and entertaining. The spa-inspired bathrooms showcase sleek marble finishes, frameless glass showers, and deep soaker tubs, creating a true retreat experience. <p> Thoughtfully designed for comfort and functionality, this residence also features a private balcony overlooking the city, in-suite laundry, and high-end fixtures throughout. <p> The building itself offers a collection of amenities designed to support a luxurious urban lifestyle — including a fitness centre, indoor pool, hot tub, and 24-hour concierge service. Secure underground parking and controlled access provide peace of mind, while the welcoming lobby sets the tone for the building's calm and professional atmosphere. <p> Situated within one of Vancouver's most desirable neighbourhoods, residents enjoy immediate access to the Coal Harbour Marina, waterfront dining, and a variety of upscale boutiques and cafés. Within minutes, you can walk to Stanley Park, the Vancouver Convention Centre, and downtown's business and entertainment districts. <p> This property represents a rare opportunity to live in one of Vancouver's most sought-after waterfront communities — where architecture, location, and lifestyle come together in perfect balance. Ideal for professionals, executives, an... <truncated>",
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
    availability: "Blocks from Stanley Park", // Uncommented availability property
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
        comment:
          "This condo exceeded all expectations. The floor-to-ceiling windows brought in so much natural light and offered incredible views of the harbour. The high-end finishes, especially the Gaggenau kitchen and spa-style bathroom, made it feel like a high-end retreat. I would absolutely recommend it to anyone wanting a peaceful yet central Vancouver stay.",
      },
      {
        name: "David Kim",
        rating: 4,
        comment:
          "Very elegant unit with an unbeatable Coal Harbour location. Everything from the brushed hardwood floors to the concierge service was top-notch. The only reason I'm not giving 5 stars is that parking was a bit tight. Other than that, I'd gladly stay here again.",
      },
      {
        name: "Nina Rivera",
        rating: 5,
        comment:
          "Quiet, luxurious, and just a few blocks from Stanley Park. I was able to walk everywhere — the Seawall, great restaurants, even downtown shopping. The building is very secure and beautifully maintained. Loved having coffee each morning with that view!",
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
    rating: 4.6, // Uncommented rating property
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
    availability: "A Perfect Escape", // Uncommented availability property
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
        comment:
          "This was such a peaceful and family-friendly getaway. The open-concept living space was perfect for spending time together, and the outdoor deck became our favorite hangout spot. Being walking distance to the lake made it so easy to enjoy the water without any hassle. Everything was clean, cozy, and well-equipped. We'll be back next summer for sure.",
      },
      {
        name: "Jason Moore",
        rating: 4,
        comment:
          "Really enjoyed our stay — the location is fantastic, just a short walk to the lake and some great hiking trails. The kitchen was modern and had everything we needed, and the community fire pit was a great touch for evening hangouts. The only thing I'd suggest is adding a couple more fans for the warmer nights.",
      },
      {
        name: "Tara Singh",
        rating: 5,
        comment:
          "Perfect for a weekend away with friends! The space was much bigger than I expected, and the deck with the BBQ was ideal for dinners and late-night chats. It's rare to find a place that feels remote yet is so close to all the fun of Cultus Lake. The hosts thought of everything — even board games and extra towels.",
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
      "Experience breathtaking luxury on the 27th floor of Water Street by the Park, Kelowna's newest and most prestigious waterfront development. This brand-new 2-bedroom, 2-bathroom condo offers spectacular panoramic views of Okanagan Lake, the surrounding mountains, and the vibrant downtown marina. <p> This stunning residence features floor-to-ceiling windows that frame postcard-perfect lake and mountain vistas from every room. The open-concept layout showcases premium finishes throughout, including engineered hardwood flooring, contemporary lighting, and a gourmet kitchen equipped with high-end stainless steel appliances, quartz countertops, and sleek custom cabinetry. <p> The master bedroom boasts a generous walk-in closet and a luxurious ensuite bathroom with spa-inspired finishes. The second bedroom offers flexible space perfect for guests or as a home office. Step out onto your expansive 378 sq ft private balcony to enjoy morning coffee while watching sailboats drift across the lake or evening sunsets painting the mountains in golden hues. <p> As a resident of Water Street by the Park, you'll enjoy access to world-class amenities and be positioned in the heart of Kelowna's Cultural District. The building's prime location places you steps from the marina, waterfront parks, the renowned Prospera Place arena, and an exceptional collection of restaurants, wineries, boutiques, and cafés. <p> Whether you're visiting for the summer season, relocating to the Okanagan, or seeking an extended stay in wine country, this penthouse residence offers the perfect blend of modern sophistication and resort-style living. Now taking bookings for summer 2026 — don't miss your chance to experience Kelowna from the top.",
    amenities: [
      "Floor-to-ceiling windows",
      "Panoramic lake and mountain views",
      "378 sq ft private balcony",
      "High-end stainless steel appliances",
      "Quartz countertops",
      "Engineered hardwood flooring",
      "Master bedroom with walk-in closet",
      "Ensuite bathroom with spa finishes",
      "In-suite laundry",
      "High-speed WiFi",
      "Central air conditioning",
      "Secure underground parking",
      "24/7 building security",
      "Fitness center",
      "Resident lounge",
    ],
    availability: "Taking bookings for Spring 2026",
    images: [
      "/waterstreet_view.jpg?height=600&width=800&text=Water+Street+View",
      "/waterstreet_balcony.jpg?height=600&width=800&text=Water+Street+Balcony",
      "/waterstreet_balcony2.jpg?height=600&width=800&text=Water+Street+Balcony+2",
      "/waterstreet_floorplan.png?height=600&width=800&text=Water+Street+Floor+Plan",
      "/waterstreet_model.jpg?height=600&width=800&text=Water+Street+Development",
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
