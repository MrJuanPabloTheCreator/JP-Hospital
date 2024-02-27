import { User } from "lucide-react"
import { FaLinkedin, FaGithub, FaUserCircle } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Link from "next/link"

const TopNavbar = () => {
    
    return (
        <div className="flex justify-between bg-white text-blue-950 font-bold py-3 xl:mx-20 lg:mx-10 mx-5">
            <Link href={'/'} className="flex items-center text-3xl">
                <p className="text-pink-700 mr-1">JP</p> Hospital
            </Link>
            <div className="grid grid-cols-3 gap-2">
                <Link className="hover:text-pink-700" target="_blank" href={'https://www.linkedin.com/in/juanpcerda/'}>
                    <FaLinkedin size={'36px'}/>
                </Link>
                <Link className="hover:text-pink-700" target="_blank" href={'https://github.com/MrJuanPabloTheCreator'}>
                    <FaGithub size={'36px'}/>
                </Link>
                <Link className="hover:text-pink-700" target="_blank" href={'https://juan-pablo-portfolio.vercel.app/'}>
                    <MdWork size={'36px'}/>
                </Link>
            </div>
        </div>
    )
}

export default TopNavbar