import logo from '@/assets/logo1.png'
import { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
function Navbar() {
  const [nav, steNav] = useState(false)
  const handleClick = () => {
    steNav(!nav)
  }
  return (
    <div className=" fixed flex h-[80px] w-full items-center justify-between bg-[#0a192f] px-4 text-gray-300">
      <div>
        <img src={logo} alt="" className="w-[50px]" />
      </div>
      {/* menu */}
      <div className="hidden md:flex">
        <ul className="hidden  md:flex ">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className="  z-10 md:hidden" onClick={handleClick}>
        {/* <FaBars className={nav ? 'hidden' : 'block'} />
        <FaTimes className={!nav ? 'hidden' : 'block'} /> */}
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu  */}
      <ul
        className={
          !nav
            ? 'hidden'
            : ' absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]'
        }
      >
        <li className=" py-6 text-4xl ">Home</li>
        <li className=" py-6 text-4xl ">About</li>
        <li className=" py-6 text-4xl ">Skills</li>
        <li className=" py-6 text-4xl ">Work</li>
        <li className=" py-6 text-4xl ">Contact</li>
      </ul>
      {/* Social icons  */}
      <div className=" fixed left-0 top-[35%] flex flex-col">
        <ul>
          <li>
            <a href="">
              Linkedin <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
