import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
      <div className="grid grid-cols-[17rem_1fr]">
        <Navbar />
        {children}
      </div>
    )
  }
  
  
  
  export default Layout