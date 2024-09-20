import Link from 'next/link';
import React from 'react';

type LinkHeader = {
href: string
children: string
className?: string
}

function NavLink({ href, children, className } : LinkHeader) {
  return (
    <Link href={href} className={` p-[5px] relative bottom-0 flex items-center border-b-2 border-[#48297e00] transition duration-300 ease-in-out hover:border-[#48297e] cursor-pointer ${className}`}>
      {children}
    </Link>
  );
}''

export default NavLink;
