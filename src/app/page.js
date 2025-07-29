import CarHistoryReport from '@/components/CarHistoryReport'
import Categories from '@/components/Categories'
import CategorySlider from '@/components/CategorySlider'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import IncludedReport from '@/components/IncludedReport'
import StylishBorderBox from '@/components/StylishBorderBox '
import VehicleReportPlans from '@/components/VehicleReportPlans'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
   
      <HeroSection/>
      {/* <Categories/> */}
      {/* <CategorySlider/> */}
      {/* <StylishBorderBox/> */}
      <CarHistoryReport/>
      <VehicleReportPlans/>
      <IncludedReport/>
      <ContactForm/>
  
    </div>
  )
}

export default page
