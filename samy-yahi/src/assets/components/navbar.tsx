import  { useState } from 'react'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
   <nav className="relative flex items-center justify-center my-8">
     <div className="flex items-center border mx-4 max-md:w-full max-md:justify-evenly border-slate-700 px-6 py-4 rounded-full text-white text-sm">
      <div>
        <a href="https://prebuiltui.com">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </a>
      </div>
      
      <div className="hidden md:flex items-center gap-6 ml-7 ">
        <a href="/" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Home</span>
        </a>
        <a href="/experience" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">Experience</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Experience</span>
        </a>
        <a href="/projects" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">Projects</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Projects</span>
        </a>
          <a href="/skills" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">Skills</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Skills</span>
        </a>
        <a href="/about" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">About</span>
        </a>
      </div>

      <div className="hidden ml-14 md:flex items-center gap-4">
        <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Resume
        </button>
        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Connect with me
        </button>
      </div>
      
      <button onClick={toggleMobileMenu} className="md:hidden text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <div className={`absolute hidden top-48 text-base left-0 bg-black w-full ${mobileMenuOpen ? 'flex' : 'hidden'} flex-col items-center gap-4`}>
        <a className="hover:text-indigo-600" href="#">
          Home
        </a>
        <a className="hover:text-indigo-600" href="#">
          About
        </a>
        <a className="hover:text-indigo-600" href="#">
          Projects
        </a>
        <a className="hover:text-indigo-600" href="#">
          Experience
        </a>
        <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>
        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Connect with me
        </button>
      </div>
    </div>
   </nav>
  )
}
