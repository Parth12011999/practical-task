import React, { useEffect, useState } from 'react'
import Banner from '../components/ui/Banner'
import MainBanner from '../components/ui/MainBanner'
import News from '../components/News'
import Footer from '../components/Footer'
import { ArrowUp } from 'lucide-react'

function Home() {


  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return (
    <div className='p-6 lg:w-full sm:min-w-fit'>
      {
        showTopBtn && (<button className='sm:fixed sm:bottom-0 sm:right-0 sm:m-6 sm:bg-red-500 sm:p-3 sm:rounded sm:text-white' onClick={handleClick}><ArrowUp /></button>)
      }
      <Banner />
      <MainBanner />
      <News />
      <Footer />
    </div>
  )
}

export default Home