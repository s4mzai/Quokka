import { Button } from "@/components/ui/button"

const HomeNavbar = () => {
  return (
    <>
        <div className="fixed top-5 bg-white  left-0 right-0 w-full h-20  px-10 md:px-20">
            <div className="w-full h-full flex items-center justify-between">
                <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(circle_at_top_left,_#10b981,_#84cc16,_#14b8a6)]  bg-[length:200%_200%] animate-gradient-move">Quokka</h1>
                <Button variant={"secondary"} className="bg-black focus-visible:ring-0 font-medium rounded-full transform hover:-translate-y-1 transition duration-400 cursor-pointer text-white  bg-[radial-gradient(circle_at_top_left,_#10b981,_#84cc16,_#14b8a6)]  bg-[length:200%_200%] animate-gradient-move">Login</Button>
            </div>
        </div>
    </>
  )
}

export default HomeNavbar