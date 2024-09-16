'use client';
import HomeBody from '@/modules/home/HomeBody';
import HomeNav from '@/modules/home/HomeNav';
import { Steps } from 'intro.js-react';
import Link from 'next/link';

function Home() {
  
  return (
    <>
      <div className="font-jakarta md:bg-white bg-[#D6FBC4]  flex flex-col gap-10">
        <HomeNav />
        <HomeBody />
      </div>
    </>
  );
}

export default Home;
