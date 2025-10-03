import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-[120px]">

        {/* Hero Section */}
        <section className="bg-yellow-400 text-slate-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have a question or want to get in touch? We’d love to hear from you. Fill out the form below or reach us via contact details.
            </p>
          </div>
        </section>

        {/* Contact Form & Get in Touch */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <Input placeholder="Your Name *" />
                  <Input type="email" placeholder="Your Email *" />
                  <Input placeholder="Phone" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </div>

              {/* Get in Touch */}
              <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p>+880 1782-######</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>support@needproduct.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p>123 Business Street, Rajshahi, Bangladesh</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p>Support : 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Find Us</h2>
            <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-slate-700">[Interactive Map Placeholder]</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
