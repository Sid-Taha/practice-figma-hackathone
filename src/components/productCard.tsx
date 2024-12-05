import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Eye, Heart, Star, Trash2 } from "lucide-react";

function ProductCard() {
  return (
    <>
      <Card className="w-[270px] h-full overflow-hidden">
        {/* Top Image */}
        <div className="relative w-full h-[250px] bg-[#F5F5F5] p-3 flex justify-center items-center">
          <Image src="/card1.png" alt="image" width={172} height={152}></Image>

          {/* Badge */}
          <Badge className="bg-[#DB4444] py-1 px-3 absolute top-3 left-3">
            -40%
          </Badge>

          {/* icon div */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {/* trash */}
            <Button
              size={"icon"}
              variant={"outline"}
              className="rounded-full w-[34px] h-[34px]"
            >
              <Trash2 size={24} />
            </Button>

            {/* heart */}
            <Button
              size={"icon"}
              variant={"outline"}
              className="rounded-full w-[34px] h-[34px]"
            >
              <Heart size={24} />
            </Button>

            {/* eye */}
            <Button
              size={"icon"}
              variant={"outline"}
              className="rounded-full w-[34px] h-[34px]"
            >
              <Eye size={24} />
            </Button>
          </div>
        </div>

        {/* Bottom content */}
        <div className="w-full flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]">
          {/* 1 */}
          <p className="mt-[10px]">HAVIT HV-G92 Gamepad</p>

          {/* 2 */}
          <div className="flex gap-3">
            <span className="text-red-500">$120</span>
            <span className="text-gray-500 line-through">$160</span>
          </div>

          {/* 3 */}
          <div className="flex gap-1 items-center">
            {[...Array(5)].map(() => {
              return <Star size={20} fill="#FFAD33" color="#FFAD33" />;
            })}

            <p className="text-gray-500">(88)</p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProductCard;
