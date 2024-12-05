import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Facebook, Twitter, Instagram, Linkedin, StepForward } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[80px] pb-[124px]">
      <div className="container mx-auto px-[135px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-[24px] leading-[24px] font-bold">Exclusive</h2>
            <h3 className="text-[20px] leading-[28px] font-medium">Subscribe</h3>
            <p className="text-base">Get 10% off your first order</p>
            <div className="relative flex items-center space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-white/40"
              />

                <StepForward className='absolute right-3 top-2'/> 
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Support</h3>
            <div className="space-y-2">
              <p className="text-base">111 Bijoy sarani, Dhaka,</p>
              <p className="text-base">DH 1515, Bangladesh.</p>
              <p className="text-base">exclusive@gmail.com</p>
              <p className="text-base">+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Account</h3>
            <div className="space-y-2">
              <p className="text-base hover:underline cursor-pointer">My Account</p>
              <p className="text-base hover:underline cursor-pointer">Login / Register</p>
              <p className="text-base hover:underline cursor-pointer">Cart</p>
              <p className="text-base hover:underline cursor-pointer">Wishlist</p>
              <p className="text-base hover:underline cursor-pointer">Shop</p>
            </div>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quick Link</h3>
            <div className="space-y-2">
              <p className="text-base hover:underline cursor-pointer">Privacy Policy</p>
              <p className="text-base hover:underline cursor-pointer">Terms Of Use</p>
              <p className="text-base hover:underline cursor-pointer">FAQ</p>
              <p className="text-base hover:underline cursor-pointer">Contact</p>
            </div>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Download App</h3>
            <p className="text-sm text-white/70">Save $3 with App New User Only</p>
            <div className="flex items-center gap-4">
              <div className="border-2 border-white p-1 rounded">
                <Image src="/qr.png" alt="QR" width={80} height={80}/>
              </div>
              <div className="space-y-2">
              <Image src="/google.png" alt="QR" width={104} height={30}/>

              <Image src="/apple.png" alt="QR" width={104} height={30}/>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 pt-8 border-t border-white/40">
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}