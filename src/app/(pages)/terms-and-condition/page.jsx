import TermsAndConditions from '@/components/TermsAndConditions'
import React from 'react'

const page = () => {
    return (
        <div>
            <section className="relative flex items-center justify-center h-[200px] md:h-[300px] w-full bg-gradient-to-r from-black via-gray-900 to-black text-center">
                <div className="z-10 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Terms & Conditions
                    </h2>
                </div>
            </section>
            <TermsAndConditions />
        </div>
    )
}

export default page