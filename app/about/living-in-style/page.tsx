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
  <strong>Living In Style</strong> is the lifestyle division of Caprock Capital Group, created to provide high-quality, fully furnished rentals for professionals, executives, and long-term travelers. Backed by the reliability and trust of Caprock, we focus on comfort, convenience, and practical design that makes every stay effortless.
</p>

<p className="mb-6">
  Each property is carefully selected and maintained to meet high standards of cleanliness, functionality, and modern appeal. Suites are move-in ready, featuring premium furnishings, stocked kitchens, fast Wi-Fi, and hotel-grade amenities — everything you need to feel at home from day one.
</p>

<p className="mb-6">
  Whether you’re in Vancouver for business, relocation, or an extended visit, Living In Style offers spaces that are well-located, well-equipped, and managed with care. We handle the details so you can focus on your work and lifestyle without compromise.
</p>

<h2 className="text-2xl font-semibold mt-10 mb-4">Our Approach</h2>

<p className="mb-6">
  Living In Style connects design, comfort, and financial integrity. Every property operates on sound investment principles guided by Caprock Capital Group, ensuring quality housing options that serve both residents and owners responsibly.
</p>

<p className="mb-6">
  Our clients value transparency, responsiveness, and a professional experience. From booking to check-out, we deliver consistent service, clear communication, and reliable accommodations that match the standards of modern living.
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
