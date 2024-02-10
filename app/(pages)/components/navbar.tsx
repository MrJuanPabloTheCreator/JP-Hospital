import BottomNavbar from "./navbarcomp/bottomNav"
import SmallNav from "./navbarcomp/smallNav"
import TopNavbar from "./navbarcomp/topNav"


const Navbar = () => {
    
    return (  
      <div className="w-full">
        <div className="hidden sm:block">
          <TopNavbar/>
          <BottomNavbar/>
        </div>
        <div className="sm:hidden">
          <SmallNav/>
        </div>
      </div>
    )
}
  
export default Navbar
