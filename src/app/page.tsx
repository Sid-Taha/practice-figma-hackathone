import Category from "@/components/category";
import Feature from "@/components/feature";
import FlashSale from "@/components/flashSale";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Month from "@/components/month";
import OurProducts from "@/components/ourProducts";

export default function Home() {
  return (
    <div className="px-[135px] overflow-hidden mb-[500px]">
      <Hero/>
      <FlashSale/>
      <Category/>
      <Month/>
      <OurProducts/>
      <Feature/>
      
    </div>
  );
}
