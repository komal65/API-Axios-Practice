import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    
    <div className='h-8  bg-blue-200 flex items-center justify-between px-5'>
        <h2 className='focus:text-blue-600  text-3xl'>Logo</h2>
        <div className='flex gap-8'>
           
        <Link href="/Kajal">Kajal</Link>
        <Link href="/Komal">Komal</Link>
       
        </div>
        
    

    </div>
    
    
  )
}

export default Header;