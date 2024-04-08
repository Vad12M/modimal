import BestSellersBlock from "@/components/home/BestSellersBlock";

const Home = () => {
  return (
    <div className="pt-[106px]">
      <div className="object-cover w-full">
        <img src={'/images/HeroBanner.png'}/>
      </div>
      <BestSellersBlock/>
    </div>
  )
}
export default Home;
