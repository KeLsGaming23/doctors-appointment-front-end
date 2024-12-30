import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* -left side- */}
            <div>
                {/*<img className='mb-5 w-40' src={assets.logo} alt="" /> */}
                <p className='text-xl font-medium mb-5'>DOCTORS SCHEDULE</p>
                <p className='text-md w-full md:w-2/3 text-gray-600 leading-6'>Central Luzon Doctors Hospital Gerona Tarlac <br />Clinic room 3 <br />Monday, Tuesday Thursday and Friday <br />12 noon - 2 pm </p>
                <p className='text-md  mt-2 w-full md:w-2/3 text-gray-600 leading-6'>Central Luzon Doctors Hospital Gerona Tarlac <br />Clinic room 3 <br />Monday, Tuesday Thursday and Friday <br />12 noon - 2 pm </p>
                <p className='text-md  mt-2 w-full md:w-2/3 text-gray-600 leading-6'>Central Luzon Doctors Hospital Gerona Tarlac <br />Clinic room 3 <br />Monday, Tuesday Thursday and Friday <br />12 noon - 2 pm </p>
            </div>
            {/* -Center side- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* -Right side- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>example@email.com</li>
                </ul>
            </div>
        </div>

        {/* -Copyright Section- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright © 2024 COMPANY - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer