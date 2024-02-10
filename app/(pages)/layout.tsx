import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/footer';

const TestLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {
  return (
    <div className='h-full w-full'>
      <Navbar/>
      <main className='pb-80 bg-custwhite'>
        {children} 
      </main>
      <Footer/>
    </div>
  )
}

export default TestLayout