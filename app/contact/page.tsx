import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-slate-600">+880 1782-888888</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-slate-600">support@needproduct.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-slate-600">123 Business Street, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
