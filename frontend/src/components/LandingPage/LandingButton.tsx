import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface LandingButtonProps {
  text?: string;
  className?: string;
  whereto?: string;
}

const LandingButton: React.FC<LandingButtonProps> = ({text,className,whereto}) => {
  return (
    <Link to={whereto || "/"}>
        <Button className={`${className} font-alan focus-visible:ring-0  rounded-full transform active:-translate-y-1 md:hover:-translate-y-1 transition duration-400 cursor-pointer text-white  bg-[radial-gradient(circle_at_top_left,_#10b981,_#84cc16,_#14b8a6)]  bg-[length:200%_200%] animate-gradient-move`}>
            {text}            
        </Button>
    </Link>
  )
}

export default LandingButton