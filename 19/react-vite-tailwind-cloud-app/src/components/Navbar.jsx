import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
function Navbar() {
  return (
    <div className="  z-10 h-[80px] w-screen bg-red-200 drop-shadow-lg">
      <Bars3Icon className=" w-5 " />
      <XMarkIcon className=" w-5 " />
    </div>
  )
}

export default Navbar
