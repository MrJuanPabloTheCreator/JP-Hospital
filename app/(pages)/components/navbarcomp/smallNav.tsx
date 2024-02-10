import { AlignJustify } from "lucide-react"

const SmallNav = () => {
    
    return (
        <div className="flex justify-between bg-blue-950 h-[90px]">
            <div className="flex items-center ml-5">
                <h1 className="text-pink-700 font-bold text-3xl">JP</h1>
                <h1 className="text-white font-bold text-3xl ml-1">Hospital</h1>
            </div>
            <div className="flex items-center mr-5">
                <AlignJustify size='36px' className="text-white"/>
            </div>
        </div>
    )
}

export default SmallNav