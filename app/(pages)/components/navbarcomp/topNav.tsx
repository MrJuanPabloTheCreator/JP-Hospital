import Link from "next/link"

const TopNavbar = () => {
    
    return (
        <div className="flex justify-between bg-white text-blue-950 font-bold">
            <Link href={'/'} className="flex items-center text-3xl ml-10">
                <p className="text-pink-700 mr-1">JP</p> Hospital
            </Link>
            <div className="flex justify-center py-7 text-sm mr-10">
                <div className="mr-5">
                    <p>Job Opening</p>
                </div>
                <div className="mr-5">
                    <p>Emergency (660)573-4789 </p>
                </div>
                <div className="">
                    <p>Search</p>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar