import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Toaster } from 'react-hot-toast';

const TestLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {
  return (
    <div className='h-full'>
      <Navbar/>
      <main className='pb-80 bg-custwhite w-full'>
        {children} 
      </main>
      <Toaster position='top-center'/>
      <Footer/>
    </div>
  )
}

export default TestLayout