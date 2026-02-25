import { NavLink } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {

const [open, setOpen] = useState(false)

return (

<nav className="py-[18px] px-[20px] md:px-[48px] flex justify-between items-center bg-white relative">
{/* Logo — ALWAYS visible */}
{/* Left: Logo */}
  <h1
    className="text-[#FF7A18] text-[32px] md:text-[40.81px]"
    style={{ fontFamily: "Island Moments" }}
  >
    Chuck's Kitchen
  </h1>

  {/* Center: Links */}
  <div className="hidden md:flex flex-1 justify-between gap-[20px] pl-10 pr-40 items-center">
     <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#FF7A18]' : 'text-black'}>Home</NavLink>
        <NavLink to="/page" className={({ isActive }) => isActive ? 'text-[#FF7A18]' : 'text-black'}>Explore</NavLink>
        <NavLink to="/order" className={({ isActive }) => isActive ? 'text-[#FF7A18]' : 'text-black'}>My Orders</NavLink>
        <NavLink to="/detail" className={({ isActive }) => isActive ? 'text-[#FF7A18] font-medium' : 'text-black'}>Account</NavLink>
  </div>

  {/* Right: Login Button */}
  <div className="hidden md:flex">
    <button className="py-[10px] px-[40px] text-white bg-[#FF7A18] rounded">
      Login
    </button>
  </div>



{/* Hamburger Icon — mobile only */}
<div
className="md:hidden text-2xl cursor-pointer"
onClick={() => setOpen(!open)}
>
{open ? <FaTimes /> : <FaBars />}
</div>


{/* Mobile Menu */}
{open && (
  <div className="absolute top-[100%] left-0 w-full bg-white shadow-md flex flex-col gap-5 p-5 md:hidden z-50">

   <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-[#FF7A18]' : 'text-black'}>Home</NavLink>
          <NavLink to="/page" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-[#FF7A18]' : 'text-black'}>Explore</NavLink>
          <NavLink to="/order" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-[#FF7A18]' : 'text-black'}>My Orders</NavLink>
          <NavLink to="/detail" onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-[#FF7A18] text-lg font-medium' : 'text-black'}>Account</NavLink>
         
    <button className="py-3 text-white bg-[#FF7A18] rounded" onClick={() => setOpen(false)}>Login</button>
  </div>
)}

</nav>

)

}