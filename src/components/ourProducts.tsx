import React from 'react'
import RedHeading from './redHeading'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight, Eye, Heart, Star, Trash2 } from 'lucide-react'
import { ourProductArray } from '@/constant/ourProductArray'
import { Card } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'

function OurProducts() {
  return (
    <>
      <section className='w-full mt-[71px] '>
        {/* heading */}
        <RedHeading text="Our Products" textColor="red" />


        {/* category */}
        <div className='flex justify-between items-end'>
          <div className='mt-[24px] flex items-center'>
            <h2 className='inline-block text-[36px] leading-[48px] font-semibold'>Explore Our Products</h2>
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

        {/* card Div */}
        <div className='w-full h-[732px] grid gap-[30px] grid-cols-4 mt-[60px]'>
          {ourProductArray.map((item, index) => {
            return (
              <Card className="w-[270px] h-full overflow-hidden grow-0 shrink-0" key={index}>
                {/* Top Image */}
                <div className="relative w-full h-[250px] bg-[#F5F5F5] p-3 flex justify-center items-center">
                  <Image src={item.src} alt="image" width={172} height={152}></Image>

                  {/* Badge */}
                  {item.discountBtn && <Badge className="bg-green-400 py-1 px-3 absolute top-3 left-3">
                    {item.discountPrice}
                  </Badge>}

                  {/* icon div */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {/* trash */}
                    {item.trashIcon &&
                      <Button size={"icon"} variant={"outline"} className="rounded-full w-[34px] h-[34px]">
                        <Trash2 size={24} />
                      </Button>}

                    {/* heart */}
                    {item.heartIcon && <Button
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full w-[34px] h-[34px]"
                    >
                      <Heart size={24} />
                    </Button>}

                    {/* eye */}
                    {item.eyeIcon && <Button
                      size={"icon"}
                      variant={"outline"}
                      className="rounded-full w-[34px] h-[34px]"
                    >
                      <Eye size={24} />
                    </Button>}
                  </div>
                </div>

                {/* Bottom content */}
                <div className="w-full flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]">
                  {/* 1 */}
                  <p className="mt-[10px]">{item.Heading}</p>

                  {/* 2 */}
                  <div className="flex gap-3">
                    <span className="text-red-500">${item.price}</span>

                    <div className="flex gap-1 items-center">
                      {[...Array(item.star)].map(() => {
                        return <Star size={20} fill="#FFAD33" color="#FFAD33" />;
                      })}

                      <p className="text-gray-500">({item.reviews})</p>
                    </div>
                  </div>

                  {/* 3 */}
                  {item.colorDiv && <div className='flex items-center gap-2'>
                    <div className={`w-[20px] h-[20px] rounded-full border-[1px] border-black ${item.color1}`}></div>
                    <div className={`w-[20px] h-[20px] rounded-full bg-${item.color2}-500`}></div>
                  </div>}

                </div>
              </Card>
            )
          })}
        </div>

        <div className='text-center mt-[60px]'>
            <button className='bg-[#DB4444] py-[16px] px-[48px] hover:bg-gray-600 text-white'>View All Products</button>
          </div>
      </section>
    </>
  )
}

export default OurProducts