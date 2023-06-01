import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import Container from '@/components/container/page'

export default function page() {
  return (
    <Container>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 pb-8'>
        <div>
            <div className="logo">
                <img src="/vercel.svg" alt="" className='h-24 w-24'/>
            </div>
            <address className='py-1'><strong>Address:</strong> Punjab, Pakistan</address>
            <span className='py-1'><strong>Phone:</strong> +92 314 4878266</span> <br />
            <span className='py-1'><strong>Email:</strong> hello@gmail.com</span>
        </div>
        <div>
            <h4 className='my-3 font-bold text-xl text-blue-400'>Usefuls Links</h4>
            <ul className='grid grid-cols-2 gap-y-4'>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Who We Are</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Innovation</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Innovation</a></li>
                <li><a href="">Testimonials</a></li>
            </ul>
        </div>
        <div>
        <h4 className='my-3 font-bold text-xl text-blue-400'>Join our Newsletter Now</h4>
        <div className="new">
            <input type="text" className='w-full px-8 py-3 text-gray-800 bg-gray-100 border-none outline-none' 
            placeholder='Enter your Email'/>
            <button className='w-full bg-blue-500 text-white py-3 rounded-md mt-3'>Subscribe</button>
        </div>
        <div className="social pt-6">
            <ul className='flex gap-3'>
                <li className='hover:bg-blue-400 bg-gray-100 h-12 w-12 flex justify-center items-center text-xl text-gray-500 hover:text-white rounded-full'><a href=""><FaFacebook /></a></li>
                <li className='hover:bg-blue-400 bg-gray-100 h-12 w-12 flex justify-center items-center text-xl text-gray-500 hover:text-white rounded-full'><a href=""><FaTwitter /></a></li>
            </ul>
        </div>
        </div>
    </div>
    <div className='copyright border-t-2 border-solid border-gray-100'>
        <div className="container mx-auto px-6 flex justify-between flex-wrap py-4 items-center">
            <div>
                <span>Copyright 2023 All rights reserved. Muhammad Muzammil</span>
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
    </Container>
  )
}
