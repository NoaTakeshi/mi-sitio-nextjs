import Navbar from "../componentes/Navbar"
import HeroSection from "../componentes/HeroSection"
import Gallery from "../componentes/Gallery"
import BlogSection from "../componentes/BlogSection"
import ContactForm from "../componentes/ContactForm"
import Footer from "../componentes/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section id="gallery">
        <Gallery />
      </section>
      <BlogSection />
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </main>
  )
}