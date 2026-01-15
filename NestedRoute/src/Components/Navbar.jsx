import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex py-4 items-center  bg-cyan-900 justify-between'>
            <h2 className='text-xl font-bold'>KdTech </h2>
            <div className='flex gap-10'>
                <Link className='text-lg font-medium' to='/'>Home</Link>
                <Link className='text-lg font-medium' to='/About'>About</Link>
                <Link className='text-lg font-medium' to='/Contact'>Contact</Link>
                <Link className='text-lg font-medium' to='/Cources'>Cources</Link>
                <Link className='text-lg font-medium' to='/Product'>Product </Link>

            </div>
        </div>
    )
}

export default Navbar