import { Search, Home, Calendar, Key } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Search",
      description: "Browse our fully furnished properties in your desired location or contact to inquire about any location.",
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Book",
      description: "Select your move-in dates and submit a booking request to the property owner.",
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Confirm",
      description: "Receive confirmation from the property owner and prepare for your stay.",
    },
    {
      icon: <Key className="h-10 w-10" />,
      title: "Move In",
      description: "Arrive at your new furnished home and enjoy a hassle-free living experience.",
    },
  ]

  return (
    <div>
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl">
          Renting a furnished property has never been easier. Follow these simple steps to find your perfect home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
