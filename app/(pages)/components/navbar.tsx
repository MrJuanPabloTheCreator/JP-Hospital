import BottomNavbar from "./navbarcomp/bottomNav"
import SmallNav from "./navbarcomp/smallNav"
import TopNavbar from "./navbarcomp/topNav"


const Navbar = () => {
    
    return (  
      <>
        <div className="hidden md:block">
          <TopNavbar/>
          <BottomNavbar/>
        </div>
        <div className="md:hidden">
          <SmallNav/>
        </div>
      </>
    )
}
  
export default Navbar
