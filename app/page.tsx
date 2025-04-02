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
        <header className="w-full h-[80vh] bg-midnight bg-cover bg-center bg-fixed flex flex-col justify-center items-center relative">
          {/* Transparent Navigational Tabs */}
          <nav className="fixed top-0 right-0 w-full p-5 pr-20 z-50"> 
            <ul className="flex justify-end space-x-6 text-cloud text-vw-sm font-DM font-bold tracking-normal">
              <li><Link href="/about" className="hover:text-gray-400">About Me</Link></li>
              <li><Link href="/projects" className="hover:text-gray-400">Projects</Link></li>
              <li><Link href="/resume" className="hover:text-gray-400">Resume</Link></li>
            </ul>
          </nav>
          
          {/* Bio and Photo  */}
          <div className="flex w-full items-center justify-evenly relative">
            {/* Left Side - Name & Bio */}
            <Parallax speed={-25}>
              <div className="text-white max-w-vw-md">

                <h1 className="text-vw-md font-bold font-DM text-cloud">Thatcher McClure</h1>

                <p className="pl-1 text-lg md:text-xl font-Raleway text-cloud">
                  I'm a software developer passionate about building creative digital experiences. Check out my projects below!
                </p>

              </div>
            </Parallax>

            {/* Right Side - Profile Image */}
            <Parallax speed={-25}>
              <Image
                src="/images/TMHead.jpeg" 
                alt="Thatcher McClure" 
                width={400} 
                height={400} 
                className="rounded-full border-8 border-cloud -z-10"
              />
            </Parallax>

          </div>
        </header>
        

        {/* Skills Section */}
        <div className="flex flex-col min-h-screen relative items-center bg-bluey z-10">

          <h2 className="text-vw-md font-semibold pt-32 font-DM text-cloud">Skills</h2>

          <div className="grid grid-flow-col grid-rows-2 justify-end space-x-6">
            <div className="flex flex-col items-center">
              <Image
                src=''
                width={100}
                height={100}
                alt="Python"
                className='rounded-lg'
              />
              <span className='mt-2 text-cloud'>Python</span>

            </div>
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
