"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">1. Check-In / Check-Out</h2>
            <p>
              Check-in time is after 4:00 PM PST; check-out is at 10:00 AM PST. Early or late check-in/out must be arranged in advance. Late check-outs causing delays may incur a $500 fine.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Noise Policy</h2>
            <p>
              Excessive noise is not permitted, especially between 10:00 PM and 8:00 AM. Noise complaints may result in a $200 fine.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Smoking</h2>
            <p>
              All units are non-smoking. Smoking is only permitted on the patio. Evidence of smoking indoors may result in forfeiture of deposit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Pet Policy</h2>
            <p>No pets are allowed unless approved in writing beforehand.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Reservation Deposit</h2>
            <p>
              A $500 deposit is required within 24 hours of booking. If not received, the reservation will be canceled.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Damage Deposit</h2>
            <p>
              A $2,000 damage deposit is required (some properties may require more). It's refundable within 48 hours of departure if:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>No damage beyond normal wear and tear</li>
              <li>Garbage disposed, dishwasher started, and laundry begun</li>
              <li>All charges paid</li>
              <li>No missing or damaged linens</li>
              <li>No eviction or law enforcement involvement</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Final Payment</h2>
            <p>
              Full payment is due 30 days before arrival. For bookings made less than 30 days in advance, full payment and deposit are due at time of booking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Cancellations</h2>
            <p>
              Cancellations more than 30 days before arrival forfeit the $500 deposit. Less than 30 days: deposit is only refundable if unit is re-rented at the same rate. No refunds for early departure. If the unit becomes unavailable, a similar unit may be substituted or a full refund issued.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">9. Occupancy Limits</h2>
            <ul className="list-disc list-inside pl-4">
              <li>1-bedroom: 2 guests max</li>
              <li>2-bedroom: 4 guests max</li>
              <li>3+ bedrooms: 6 guests max</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">10. Cleaning Fee</h2>
            <ul className="list-disc list-inside pl-4">
              <li>1-bedroom: $200</li>
              <li>2-bedroom: $250</li>
              <li>3–4 bedroom: $300</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">11. Parking</h2>
            <p>$200/month for one vehicle. (if available)</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">12. Falsified Reservations</h2>
            <p>
              Reservations under false pretenses result in cancellation and forfeiture of all funds.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">13. Shoes-Off Policy</h2>
            <p>Do not wear shoes inside the property.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">14. Property Access</h2>
            <p>Management may access the property at any time.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">15. Maintenance & Notices</h2>
            <p>
              Guests must report issues or strata notices that need urgent attention to a Caprock Capital Group representative.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">16. Written Exceptions</h2>
            <p>Any exceptions to these terms must be approved in writing.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">17. Keys and Fobs</h2>
            <p>Lost key/fob: $200 fee. Lockout requiring staff: $100 trip charge.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">18. Lost or Stolen Items</h2>
            <p>
              Caprock Capital Group is not responsible for lost/stolen property. Do not leave valuables in the unit or vehicle.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">19. Liability</h2>
            <p>
              Caprock Capital Group is not liable for personal injuries or guest property damage during the stay.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
