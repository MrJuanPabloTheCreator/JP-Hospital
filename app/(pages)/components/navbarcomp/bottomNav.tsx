"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const BottomNavbar = () => {
    const [activePage, setActivePage] = useState('')
    const pathname = usePathname();

    useEffect(() => {
        const fixedPath = pathname.split('/')
        setActivePage(`/${fixedPath[1]}`)
    }, [pathname])
    
    const isLinkActive = (href: string) => activePage === href;

    return (
        <div className="flex justify-center bg-blue-950 px-5">
            <div className="flex text-white font-bold text-md">
                <Link href={"/"} className={`flex justify-center py-4 border-l-2 items-center px-7 ${isLinkActive("/") ? "bg-pink-700 " : ""}`}>
                    Home
                </Link>
                <Link href={"/find-a-doctor"} className={`flex justify-center py-4 items-center border-l-2 px-7 ${isLinkActive("/find-a-doctor") ? "bg-pink-700 text-white" : ""}`}>
                    Find a Doctor
                </Link>
                {/* <Link href={"/request-appointment"} className={`flex justify-center py-4 items-center border-l-2 px-7 ${isLinkActive("/request-appointment") ? "bg-pink-700 " : ""}`}>
                    Request an Appointment
                </Link>
                <Link href={"/locations"} className={`flex justify-center py-4 items-center border-l-2 px-7 ${isLinkActive("/locations") ? "bg-pink-700 " : ""}`}>
                    Our Locations
                </Link> */}
                <Link href={"/about"} className={`flex justify-center py-4 items-center border-l-2 border-r-2 px-7 ${isLinkActive("/about") ? "bg-pink-700 " : ""}`}>
                    About Us
                </Link>
            </div>
        </div>
    )
}

export default BottomNavbar
