
'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../RCLogo.png";
import NavLinks from '@/app/ui/nav-links';
//        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
//import { PowerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
export default function SideNav() {
  const router = useRouter();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 " style = {{backgroundColor:'maroon',backgroundPosition:"top"}}>
      <Link

        className="mb-2 flex h-20 items-end justify-start rounded-md bg-maroon-600 pb-1 p-5 md:h-40 "
        href = "/"
      >        
      <Image  
        fill = {false}
        src= {Logo}
        alt = "background"/>
      </Link>
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="w-6" />
            <div onClick={()=> router.push('/')}
            className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
