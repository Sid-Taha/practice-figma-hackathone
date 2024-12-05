import React from 'react'
import RedHeading from './redHeading'
import { ChevronLeft, ChevronRight, Eye, Heart, Star, Trash2 } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import ProductCard from './productCard'
import { flashCard } from '@/constant/flashCard'

function FlashSale() {
  return (
    <>
      <section className='border-b-[1px] border-black pb-[60px]'>
        {/* today's */}
        <RedHeading text={"Today's"} textColor={'red'} />


        {/* flash sale */}
        <div className='flex justify-between items-end'>
          <div className='mt-[24px] flex items-center'>
            <h2 className='inline-block text-[36px] leading-[48px] font-semibold'>Flash Sales</h2>

            {/* time divs */}
            <div className='inline-flex items-center gap-8 ml-[87px] '>

              <div className='flex gap-6'>

                <div className='text-center'>
                  <div className='text-[12px] leading-[18px] text-black'>Days</div>
                  <div className='text-[32px] leading-[30px] font-bold'>03</div>
                </div>

                <div className='flex flex-col justify-center gap-1 mt-[20px]'>
                  <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                  <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                </div>


                <div className='text-center'>
                  <div className='text-[12px] leading-[18px] text-black'>Hours</div>
                  <div className='text-[32px] leading-[30px] font-bold'>23</div>
                </div>

                <div className='flex flex-col justify-center gap-1 mt-[20px]'>
                  <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                  <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                </div>


                <div className='text-center'>
                  <div className='text-[12px] leading-[18px] text-black'>Minutes</div>
                  <div className='text-[32px] leading-[30px] font-bold'>19</div>
                </div>

                <div className='flex flex-col justify-center gap-1 mt-[20px]'>
                  <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                  <div className='w-1 h-1 bg-red-400 rounded-full'></div>
                </div>


                <div className='text-center'>
                  <div className='text-[12px] leading-[18px] text-black'>Seconds</div>
                  <div className='text-[32px] leading-[30px] font-bold'>56</div>
                </div>

              </div>

            </div>
          </div>

          {/* round button */}
          <div className='flex gap-2'>
            <Button size={"icon"} variant={"outline"} className='rounded-full'>
              <ChevronLeft size={24} />
            </Button>

            <Button size={"icon"} variant={"outline"} className='rounded-full'>
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>


        {/* cards div */}
        <div>
          <div className='w-[1308px]  mt-[40px] flex gap-[30px] overflow-x-auto'>
            <ProductCard loop={flashCard}/>
          </div>

          <div className='text-center mt-[60px]'>
            <button className='bg-[#DB4444] py-[16px] px-[48px] hover:bg-gray-600 text-white'>View All Products</button>
          </div>
        </div>



      </section>
    </>
  )
}

export default FlashSale