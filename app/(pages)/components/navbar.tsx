import BottomNavbar from "./navbarcomp/bottomNav"
import SmallNav from "./navbarcomp/smallNav"
import TopNavbar from "./navbarcomp/topNav"


const Navbar = () => {
    
    return (  
      <>
        <div className="hidden sm:block w-full">
          <TopNavbar/>
          <BottomNavbar/>
        </div>
        <div className="sm:hidden w-full">
          <SmallNav/>
        </div>
      </>
    )
}
  
export default Navbar
