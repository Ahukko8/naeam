// app/page.tsx

import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Products } from '@/components/Products'

export default async function Home() {
  // const products = await getProducts()
  
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products products={[]} />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}