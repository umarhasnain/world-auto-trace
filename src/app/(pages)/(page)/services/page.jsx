import IncludedReport from '@/components/IncludedReport'
import ServiceCards from '@/components/ServiceCards'
import React from 'react'

const page = () => {
    return (
        <div>
            <section className="relative flex items-center justify-center h-[200px] md:h-[300px] w-full bg-gradient-to-r from-black via-gray-900 to-black text-center">
                <div className="z-10 px-4">
                    <p className="text-red-700 text-sm md:text-base font-semibold mb-2">What We Offer</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Our Services</h2>
                </div>
            </section>
            <IncludedReport/>
            {/* <ServiceCards /> */}
        </div>
    )
}

export default page
