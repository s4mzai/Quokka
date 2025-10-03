import { Button } from "@/components/ui/button"

const HomeNavbar = () => {
  return (
    <>
        <div className="fixed top-5 bg-white  left-0 right-0 w-full h-20  px-10 md:px-20">
            <div className="w-full h-full flex items-center justify-between">
                <h1 className="text-3xl font-extrabold text-black">Quokka</h1>
                <Button variant={"secondary"} className="cursor-pointer focus-visible:ring-0 bg-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">Login</Button>
            </div>
        </div>
    </>
  )
}

export default HomeNavbar