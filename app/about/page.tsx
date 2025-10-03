import { Header } from "@/components/header"

export default function AboutPage() {
  // Sample team data
  const teamMembers = [
    { name: "Rinthi Akter", role: "Founder & CEO", image: "/images/photo-1483181957632-8bda974cbc91.avif" },
    { name: "Sarah Khan", role: "Marketing Head", image: "/images/photo-1483181957632-8bda974cbc91.avif" },
    { name: "John Doe", role: "Lead Developer", image: "/images/photo-1483181957632-8bda974cbc91.avif" },
    { name: "Jane Smith", role: "UI/UX Designer", image: "/images/photo-1483181957632-8bda974cbc91.avif" },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="bg-yellow-400 text-slate-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Learn more about NeedProduct, our mission, values, and the amazing team behind it.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-slate-700 mb-4">
              NeedProduct started with a simple idea: to provide high-quality products that cater to diverse needs and
              tastes. Over the years, we've grown into a trusted platform for shoppers looking for both variety and value.
            </p>
            <p className="text-lg text-slate-700">
              From humble beginnings to becoming a recognized brand, our journey has been fueled by passion, dedication,
              and a relentless focus on customer satisfaction.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-slate-100 py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-slate-600">We maintain the highest ethical standards in everything we do.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-slate-600">Every product we offer meets strict quality and value criteria.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-slate-600">We prioritize our customers and their shopping experience above all.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
