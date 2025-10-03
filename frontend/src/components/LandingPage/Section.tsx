import Balancer from "react-wrap-balancer";
import LandingButton from "./LandingButton";

const Section = () => {
  return (
    <div className="h-[30rem] mb-10 md:mb-0 md:h-screen flex flex-col gap-15 px-3 md:gap-20 items-center justify-center text-center mt-40 lg:mt-0">
        <h1 className="text-4xl font-montserrat font-extrabold md:text-7xl ">
          <Balancer>
            Skip the <span className="bg-clip-text text-transparent bg-[radial-gradient(circle_at_top_left,_#10b981,_#84cc16,_#14b8a6)]  bg-[length:200%_200%] animate-gradient-move">Boring</span>, Keep the Story
          </Balancer>
        </h1>
        <p className="hidden font-alan md:block text-xl font-medium text-gray-600 md:w-[70%]">Life’s too short to drown in never-ending PDFs, articles, and study notes. Summarize instantly, skip the clutter, keep the essence, and move forward smarter, faster, lighter, always</p>
        <p className="block font-alan md:hidden text-xl font-medium text-gray-600 md:w-[70%] px-9">Life’s too short to pretend you’ll “read it later.” Summarize it now. And move on.</p>
        <LandingButton text="Try Quokko" className="text-xl font-medium h-12 w-40" whereto="/dashboard"/>
    </div>
  )
}

export default Section