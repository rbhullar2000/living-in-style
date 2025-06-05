import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function LivingInStylePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800 flex-grow">
  <div className="flex justify-center items-center gap-8 mb-8">
    <Image
      src="/LISlogo_black.png"
      alt="Living In Style Logo"
      width={180}
      height={50}
    />
    <Image
      src="/ccglogo_black.png"
      alt="Caprock Capital Group Logo"
      width={180}
      height={50}
    />
  </div>

        <h1 className="text-3xl font-bold mb-6">About Living In Style</h1>

        <p className="mb-6">
          <strong>Living In Style</strong> is the lifestyle division of Caprock Capital Group, created to serve those who believe that how you live matters as much as where you live. Rooted in the strength, stability, and trust that define Caprock, Living In Style is about more than real estate—it's about thoughtful spaces, elevated service, and the comfort of knowing everything has been considered.
        </p>

        <p className="mb-6">
          Our mission is simple: to deliver refined living experiences for modern professionals, executives, and individuals who seek more than just a place to stay. Every suite, home, and offering under the Living In Style brand is curated with precision—from premium furnishings and fully stocked kitchens to boutique decor and hotel-grade amenities. We make transitions seamless, and short- or long-term stays feel like home.
        </p>

        <p className="mb-6">
          Whether you're relocating, traveling for business, or simply value living well, Living In Style gives you the confidence to settle in quickly and live with ease. Our homes are situated in desirable neighborhoods and designed to reflect a clean, modern aesthetic. Functionality, warmth, and design-forward thinking come together to create a welcoming environment where quality is felt in every detail.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">A Philosophy of Purposeful Living</h2>
        <p className="mb-6">
          Living In Style was founded on a belief that lifestyle and financial wellbeing are deeply connected. That’s why our spaces are not only beautiful, but also built on smart, sustainable investment principles championed by Caprock Capital Group. We view housing as both a service and a strategy—each property is selected with care, maintained with pride, and tailored to meet the evolving expectations of our clients.
        </p>

        <p className="mb-6">
          Our guests benefit from more than just premium housing—they enjoy concierge-level support, transparency in pricing, and responsive service from a team that understands both hospitality and finance. It's a unique combination of luxury and professionalism that few others offer.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Who We Serve</h2>
        <p className="mb-6 whitespace-pre-line">
          - Professionals on short-term or corporate assignments{"\n"}
          - Families relocating or in-between permanent housing{"\n"}
          - Digital nomads and entrepreneurs seeking flexible, upscale accommodations{"\n"}
          - Individuals seeking fully furnished, move-in-ready living spaces without compromise
        </p>

        <p className="mb-6">
          From day one, Living In Style has prioritized trust, consistency, and thoughtful design. We know that a calm, clean, and inspiring home can elevate productivity, reduce stress, and help you feel rooted—even when you're far from home.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Backed by Caprock Capital Group</h2>
        <p className="mb-6">
          As part of the Caprock Capital Group family, Living In Style benefits from deep industry expertise, financial discipline, and operational excellence. We’re proud to deliver rental solutions that meet the highest standards, backed by a company built on strength and driven by trust.
        </p>

        <p className="mb-6">
          We invite you to experience what it means to truly live in style. Whether you're staying for a few weeks or a few months, your home should meet your standards—without the hassle.
        </p>

        <p>
          <strong>Contact us</strong> to learn more about current availabilities or how to partner with Living In Style for premium furnished housing in your city.
        </p>
      </main>

      <Footer />
    </div>
  );
}
