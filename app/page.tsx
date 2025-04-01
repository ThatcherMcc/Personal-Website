'use client';
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { Parallax, ParallaxProvider} from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
      <>
        {/* Background Image */}
        <header className="w-full h-[80vh] bg-[url('/images/greenBG.jpg')] bg-contain bg-center bg-fixed flex flex-col justify-center items-center z-0">
          {/* Transparent Navigational Tabs */}
          <nav className="fixed top-0 right-0 w-full p-5 pr-7 z-50"> 
            <ul className="flex justify-end space-x-6 text-white text-vw-sm font-DM font-bold tracking-normal">
              <li><Link href="/about" className="hover:text-gray-500">About Me</Link></li>
              <li><Link href="/projects" className="hover:text-gray-500">Projects</Link></li>
              <li><Link href="/resume" className="hover:text-gray-500">Resume</Link></li>
            </ul>
          </nav>
          
          {/* Bio and Photo  */}
          <div className="flex w-full justify-around items-center">
            {/* Left Side - Name & Bio */}
            <Parallax speed={-10}>
              <div className="text-white/90 max-w-vw-md bg-black/60">
                <h1 className="text-vw-md font-bold">Thatcher McClure</h1>
                <p className="mt-4 text-lg md:text-xl font-alfaSlab">
                  I'm a software developer passionate about building creative digital experiences. Check out my projects below!
                </p>
              </div>
            </Parallax>

            {/* Right Side - Profile Image */}
            <div>
              <Parallax speed={-10}>
                <Image 
                  src="/images/lebronImage.jpg" 
                  alt="Thatcher McClure" 
                  width={400} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </Parallax>
            </div>
          </div>
        </header>
        

        {/* Skills Section */}
        <div className="float-child flex flex-col min-h-screen items-center gap-4">
          <div className="flex-container">
            <h2 className="text-5xl font-semibold pt-14">Skills</h2>
          </div>
          <ProductCard />
          <Link href="/users" className="text-blue-500 hover:underline">
            View Users
          </Link>
        </div>


        {/* Footer NEEDS CHANGING */}
        <footer className="w-full bg-gray-800 text-white text-center py-4 mt-auto">
          <p>© 2024 My Website. All rights reserved.</p>
        </footer>
      </>
    </ParallaxProvider>
  )
}
