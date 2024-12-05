import Category from "@/components/category";
import FlashSale from "@/components/flashSale";
import Hero from "@/components/hero";
import Month from "@/components/month";

export default function Home() {
  return (
    <div className="px-[135px] overflow-hidden">
      <Hero/>
      <FlashSale/>
      <Category/>
      <Month/>
    </div>
  );
}
