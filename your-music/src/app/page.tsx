import FeaturedSection from '@/components/FeaturedSection'
import HeroSection from '@/components/HeroSection'
import TestimonialCards from '@/components/TestimonialCards'
import UpcommingWebinars from '@/components/UpcommingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-zinc-950 antialiased bg-grid-white/[0.03]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcommingWebinars/>
    </main>
  )
}

export default page