import { Github, Linkedin, User } from "lucide-react"
import Link from "next/link"

const TopNavbar = () => {
    
    return (
        <div className="flex justify-between bg-white text-blue-950 font-bold py-5 xl:mx-20 lg:mx-10 mx-5">
            <Link href={'/'} className="flex items-center text-3xl">
                <p className="text-pink-700 mr-1">JP</p> Hospital
            </Link>
            <div className="grid grid-cols-3 gap-2">
                <Link className="hover:text-pink-700" href={'https://www.linkedin.com/in/juanpcerda/'}>
                    <Linkedin size={'36px'}/>
                </Link>
                <Link className="hover:text-pink-700" href={'https://github.com/MrJuanPabloTheCreator'}>
                    <Github size={'36px'}/>
                </Link>
                <Link className="hover:text-pink-700" href={'https://main.d1wqsrgpxi6f4p.amplifyapp.com/'}>
                    <User size={'36px'}/>
                </Link>
            </div>
        </div>
    )
}

export default TopNavbar