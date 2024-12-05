import React from 'react'
import RedHeading from './redHeading'
import { Card } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

function feature() {
  return (
    <>
      <section className='w-full mt-[140px]'>
        {/* heading */}
        <RedHeading text="Features" textColor="red" />


        {/* feature */}
        <div className='flex justify-between items-end'>
          <div className='mt-[24px] flex items-center'>
            <h2 className='inline-block text-[36px] leading-[48px] font-semibold'>New Arrival</h2>
          </div>
        </div>







        <div className='w-full h-[600px] mt-[60px]'>
          <div className="w-full max-w-[1170px] mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PlayStation Card */}
              <Card className="relative overflow-hidden bg-black text-white rounded-md h-[600px]">
                <div className="relative h-full">
                  <Image
                    src="/placeholder.svg?height=511&width=511"
                    alt="PlayStation 5"
                    width={511}
                    height={511}
                    className="absolute left-1/2 -translate-x-1/2 top-[89px]"
                  />
                  <div className="absolute bottom-8 left-8 space-y-4">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold tracking-wide font-inter">PlayStation 5</h2>
                      <p className="text-sm text-gray-200 max-w-[242px] font-poppins">
                        Black and White version of the PS5 coming out on sale.
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="inline-block text-white hover:opacity-75 transition-opacity font-poppins font-medium border-b border-white/50"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Card>

              <div className="space-y-8">
                {/* Women's Collections Card */}
                <Card className="relative overflow-hidden bg-[#0D0D0D] text-white rounded-md h-[284px]">
                  <div className="relative h-full">
                    <Image
                      src="/placeholder.svg?height=286&width=432"
                      alt="Women's Collections"
                      width={432}
                      height={286}
                      className="absolute right-0 top-0 object-cover"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-6 space-y-4 z-10">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-wide font-inter">Women's Collections</h2>
                        <p className="text-sm text-gray-200 max-w-[255px] font-poppins">
                          Featured woman collections that give you another vibe.
                        </p>
                      </div>
                      <Link
                        href="#"
                        className="inline-block text-white hover:opacity-75 transition-opacity font-poppins font-medium border-b border-white/50"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-8">
                  {/* Speakers Card */}
                  <Card className="relative overflow-hidden bg-black text-white rounded-md h-[284px]">
                    <div className="relative h-full">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[196px] h-[196px] bg-white/90 blur-[150px]" />
                      <Image
                        src="/placeholder.svg?height=221&width=190"
                        alt="Amazon Echo"
                        width={190}
                        height={221}
                        className="absolute left-1/2 -translate-x-1/2 top-8"
                      />
                      <div className="absolute bottom-6 left-6 space-y-2">
                        <div className="space-y-2">
                          <h2 className="text-2xl font-semibold tracking-wide font-inter">Speakers</h2>
                          <p className="text-sm text-gray-200 font-poppins">Amazon wireless speakers</p>
                        </div>
                        <Link
                          href="#"
                          className="inline-block text-white hover:opacity-75 transition-opacity font-poppins font-medium border-b border-white/50"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </Card>

                  {/* Perfume Card */}
                  <Card className="relative overflow-hidden bg-black text-white rounded-md h-[284px]">
                    <div className="relative h-full">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[238px] h-[238px] bg-white/90 blur-[150px]" />
                      <Image
                        src="/placeholder.svg?height=203&width=201"
                        alt="Gucci Perfume"
                        width={201}
                        height={203}
                        className="absolute left-1/2 -translate-x-1/2 top-8"
                      />
                      <div className="absolute bottom-6 left-6 space-y-2">
                        <div className="space-y-2">
                          <h2 className="text-2xl font-semibold tracking-wide font-inter">Perfume</h2>
                          <p className="text-sm text-gray-200 font-poppins">GUCCI INTENSE OUD EDP</p>
                        </div>
                        <Link
                          href="#"
                          className="inline-block text-white hover:opacity-75 transition-opacity font-poppins font-medium border-b border-white/50"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>


  )
}

export default feature