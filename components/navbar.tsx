'use client';

import Link from "next/link";
import { Check, ChevronDown, Copy, ExternalLink, FileText, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('gautamkumar96801@gmail.com');
    setIsEmailCopied(true);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  return (
    <>
      {isSticky && <div className="h-22" />}

      {isSticky ? (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-287">
          <header
            className="
        animate-slideDown
        flex justify-between items-center
        py-3 px-4 md:px-6 lg:px-8
        bg-[#f5f2eb]
        border-2 border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      "
          >
            <div className="smooth-60fps scale-100"
              style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)", willChange: "transform" }}>
              <Link className="hover:opacity-80 transition-opacity duration-300" href="/">
                <span className="font-bold text-xl md:text-2xl text-black hover:text-gray-700 transition-colors duration-300">Goutam Choudhary</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 transform -translate-x-1/2">
              <Link
                className="nav-link-hover font-medium px-3 py-1.5 relative text-sm lg:text-base"
                href="/projects"
                style={{ transition: "0.25s cubic-bezier(0.23, 1, 0.32, 1)" }}>
                Work
              </Link>
              <Link
                className="nav-link-hover font-medium px-3 py-1.5 relative text-sm lg:text-base"
                href="/life"
                style={{ transition: "0.25s cubic-bezier(0.23, 1, 0.32, 1)" }}>
                Life
              </Link>
              <Link
                className="nav-link-hover font-medium px-3 py-1.5 relative text-sm lg:text-base"
                href="/playground"
                style={{ transition: "0.25s cubic-bezier(0.23, 1, 0.32, 1)" }}>
                Play
              </Link>
            </nav>
            <div
              className="hidden md:block shrink-0 smooth-60fps scale-100"
              style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}>
              <div className="relative " ref={menuRef}>
                <button
                  data-sound="on"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setIsOpen(!isOpen)}
                  className=" inline-flex items-center gap-1.5 px-3 lg:px-4 py-1.5 text-sm font-semibold bg-daisy-green border-2 border-black text-black bg-orange-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.75 hover:translate-y-0.75  hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:bg-white  active:translate-x-0.75 active:translate-y-0.75  active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  style={{ transition: "0.15s cubic-bezier(0.23, 1, 0.32, 1)", borderRadius: "0px", letterSpacing: "0.025em", fontFamily: "Sora, sans-serif" }}
                >
                  <span>CV &amp; Socials</span>
                  <ChevronDown size={18} className={isOpen ? "rotate-180 transform duration-300" : "rotate-0 transform duration-300"} />
                </button>

                <div className="absolute top-full right-0 mt-2 z-50" style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "none" : "translateY(-10px)", transition: "opacity 0.2s, transform 0.2s" }}>
                  <div className="overflow-hidden bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-45">
                    <button
                      data-sound="off"
                      onClick={handleCopy}
                      className={`flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black ${isEmailCopied ? 'bg-green-400 hover:bg-green-400/40' : ' hover:bg-orange-400'}`} >
                      <span className="shrink-0">
                        {
                          isEmailCopied ? <Check size={16} /> : <Mail size={16} />
                        }
                      </span>
                      <span className="flex-1 text-left">{isEmailCopied ? 'Copied' : 'Email'}</span>
                      <Copy className="ml-auto w-3 h-3 opacity-40" />
                    </button>
                    <a
                      href="https://github.com/Goutam96801"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black hover:bg-orange-400" >
                      <span className="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </span>
                      <span className="relative">GitHub</span>
                      <ExternalLink className="ml-auto w-3 h-3 opacity-40" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/goutam-kumar-choudhary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black hover:bg-orange-400" >
                      <span className="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </span>
                      <span className="relative">LinkedIn</span>
                      <ExternalLink className="ml-auto w-3 h-3 opacity-40" />
                    </a>
                    <a
                      href="https://www.instagram.com/goutam_choudhary19/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black hover:bg-orange-400" >
                      <span className="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                      </span>
                      <span className="relative">
                        Instagram
                        <span className="absolute -top-2 -right-8 text-[7px] font-semibold uppercase px-1 py-px bg-orange-400/80 text-black rounded-xs leading-none">active</span>
                      </span>
                      <ExternalLink className="ml-auto w-3 h-3 opacity-40" />
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1uOd4KZpQWR73YO0o5YrhkRCdu2sqGXXm/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black hover:bg-orange-400" >
                      <span className="shrink-0">
                        <FileText size={16} />
                      </span>
                      <span className="relative">Resume</span>
                      <ExternalLink className="ml-auto w-3 h-3 opacity-40" />
                    </a></div></div>
              </div>
            </div>
            <div className="md:hidden ">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 transition-all duration-200 active:scale-95"
              >
                <svg
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 32 32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`size-7 text-black transition-transform duration-400 ease-in-out ${mobileMenuOpen ? "-rotate-45" : "rotate-0"
                    }`}
                >
                  <path
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    className="transition-all duration-400 ease-in-out "
                    style={{
                      strokeDasharray: mobileMenuOpen ? "20 300" : "12 63",
                      strokeDashoffset: mobileMenuOpen ? "-32.42" : "0",
                    }}
                  />
                  <path d="M7 16 27 16" />
                </svg>
              </button>
            </div>
            {
              mobileMenuOpen && <div id="mobile-navigation" role="navigation" aria-label="Mobile navigation" className="
            absolute md:hidden z-50 transition-all duration-300 ease-out left-0 right-0 
            animate-fadeInUp cursor-auto bg-[#faf9f6] border-2 border-black
            top-full mt-3 mx-4
          ">
                <div className="p-5 cursor-auto">
                  <nav className="flex flex-col space-y-1">
                    <Link
                      className="text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10"
                      href="/projects"
                      style={{ fontFamily: "Sora, sans-serif" }}>
                      Work
                    </Link>
                    <Link
                      className="text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10"
                      href="/life"
                      style={{ fontFamily: "Sora, sans-serif" }}>
                      Life
                    </Link>
                    <Link className="text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10"
                      href="/playground"
                      style={{ fontFamily: "Sora, sans-serif" }}>
                      Play
                    </Link>

                    <div className="pt-4 mt-2 border-t border-black/10">
                      <p
                        className="text-xs font-semibold text-black/50 uppercase tracking-wider mb-3 px-4"
                        style={{ fontFamily: "Sora, sans-serif" }}>
                        Connect with me
                      </p>
                      <div className="px-4 mb-2">
                        <button
                          data-sound="off"
                          onClick={handleCopy}
                          className={`
                        border-2 border-black font-semibold
                        px-4 py-3 text-sm flex items-center justify-center gap-2 w-full cursor-pointer
                        transition-all duration-150 ease-out
                        active:scale-[0.98]
                        bg-daisy-green text-black hover:bg-orange-400
                      `}
                          style={{ fontFamily: "Sora, sans-serif" }}>
                          {
                            isEmailCopied ? <Check size={16} /> : <Mail size={16} />
                          }
                          <span>{isEmailCopied ? 'Copied' : 'Copy Email'}</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 px-4">
                        <a
                          href="https://github.com/Goutam96801"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                        bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-orange-400 hover:text-black
                        active:scale-[0.98] rounded-none font-sora"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          <span>GitHub</span>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/goutam-kumar-choudhary"
                          target="_blank"
                          rel="noopener noreferrer" className="
                        bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-orange-400 hover:text-black
                        active:scale-[0.98] rounded-none font-sora
                      "
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                          <span>LinkedIn</span></a>
                        <a
                          href="https://www.instagram.com/goutam_choudhary19/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                        col-span-2 bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-orange-400 hover:text-black
                        active:scale-[0.98] rounded-none font-sora
                      ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                          </svg>
                          <span className="relative">
                            Instagram
                            <span className="absolute -top-2 -right-8 text-[7px] font-semibold uppercase px-1 py-px bg-orange-400/80 text-black rounded-xs leading-none">active</span>
                          </span>
                        </a>
                      </div>
                      <div className="px-4 mt-2">
                        <a
                          href="https://drive.google.com/file/d/1uOd4KZpQWR73YO0o5YrhkRCdu2sqGXXm/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                        bg-white border-2 border-black font-semibold text-black
                        px-4 py-3 text-sm flex items-center justify-center gap-2 w-full cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-orange-400 hover:text-black
                        active:scale-[0.98] rounded-none font-sora
                      ">
                          <FileText size={16} />
                          <span>Resume</span>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            }
          </header>
        </div>
      ) : (
        <header className="relative flex justify-between items-center py-4 md:py-5 px-4 md:px-6 lg:px-8 z-50">
          <div className="smooth-60fps scale-100"
            style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)", willChange: "transform" }}>
            <Link className="hover:opacity-80 transition-opacity duration-300" href="/">
              <span className="font-bold text-xl md:text-2xl text-black hover:text-gray-700 transition-colors duration-300">Goutam Choudhary</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 absolute left-1/2 transform -translate-x-1/2">
            <Link
              className="nav-link-hover font-medium px-3 py-1.5 relative text-sm lg:text-base"
              href="/projects"
              style={{ transition: "0.25s cubic-bezier(0.23, 1, 0.32, 1)" }}>
              Work
            </Link>
            <Link
              className="nav-link-hover font-medium px-3 py-1.5 relative text-sm lg:text-base"
              href="/life"
              style={{ transition: "0.25s cubic-bezier(0.23, 1, 0.32, 1)" }}>
              Life
            </Link>
            <Link
              className="nav-link-hover font-medium px-3 py-1.5 relative text-sm lg:text-base"
              href="/playground"
              style={{ transition: "0.25s cubic-bezier(0.23, 1, 0.32, 1)" }}>
              Play
            </Link>

          </nav>
          <div
            className="hidden md:block shrink-0 smooth-60fps scale-100"
            style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}>
            <div className="relative " ref={menuRef}>
              <button
                data-sound="on"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={() => setIsOpen(!isOpen)}
                className=" inline-flex items-center gap-1.5 px-3 lg:px-4 py-1.5 text-sm font-semibold bg-daisy-green border-2 border-black text-black bg-orange-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.75 hover:translate-y-0.75  hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:bg-white  active:translate-x-0.75 active:translate-y-0.75  active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                style={{ transition: "0.15s cubic-bezier(0.23, 1, 0.32, 1)", borderRadius: "0px", letterSpacing: "0.025em", fontFamily: "Sora, sans-serif" }}
              >
                <span>CV &amp; Socials</span>
                <ChevronDown size={18} className={isOpen ? "rotate-180 transform duration-300" : "rotate-0 transform duration-300"} />
              </button>
                <div
                  className="absolute top-full right-0 mt-2 z-50"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "none" : "translateY(-10px)",
                    pointerEvents: isOpen ? "auto" : "none",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                >
                  <div className="overflow-hidden bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-45">
                    <button
                      data-sound="off"
                      onClick={handleCopy}
                      className={`flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black ${isEmailCopied ? 'bg-green-400 hover:bg-green-400/40' : ' hover:bg-orange-400'}`} >
                      <span className="shrink-0">
                        {
                          isEmailCopied ? <Check size={16} /> : <Mail size={16} />
                        }
                      </span>
                      <span className="flex-1 text-left">{isEmailCopied ? 'Copied' : 'Email'}</span>
                      <Copy className="ml-auto w-3 h-3 opacity-40" />
                    </button>
                    <a
                      href="https://github.com/Goutam96801"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black hover:bg-orange-400" >
                      <span className="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </span>
                      <span className="relative">GitHub</span>
                      <ExternalLink className="ml-auto w-3 h-3 opacity-40" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/goutam-kumar-choudhary"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black hover:bg-orange-400" >
                      <span className="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </span>
                      <span className="relative">LinkedIn</span>
                      <ExternalLink className="ml-auto w-3 h-3 opacity-40" />
                    </a>
                    <a
                      href="https://www.instagram.com/goutam_choudhary19/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black hover:bg-orange-400" >
                      <span className="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                      </span>
                      <span className="relative">
                        Instagram
                        <span className="absolute -top-2 -right-8 text-[7px] font-semibold uppercase px-1 py-px bg-orange-400/80 text-black rounded-xs leading-none">active</span>
                      </span>
                      <ExternalLink className="ml-auto w-3 h-3 opacity-40" />
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1uOd4KZpQWR73YO0o5YrhkRCdu2sqGXXm/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-sora gap-3 px-4 py-3 w-full text-sm font-medium transition-colors duration-150 border-b border-black/10 text-black hover:bg-orange-400" >
                      <span className="shrink-0">
                        <FileText size={16} />
                      </span>
                      <span className="relative">Resume</span>
                      <ExternalLink className="ml-auto w-3 h-3 opacity-40" />
                    </a>
                  </div>
                </div>

            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-all duration-200 active:scale-95"
            >
              <svg
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 32 32"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-7 text-black transition-transform duration-400 ease-in-out ${mobileMenuOpen ? "-rotate-45" : "rotate-0"
                  }`}
              >
                <path
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  className="transition-all duration-400 ease-in-out "
                  style={{
                    strokeDasharray: mobileMenuOpen ? "20 300" : "12 63",
                    strokeDashoffset: mobileMenuOpen ? "-32.42" : "0",
                  }}
                />
                <path d="M7 16 27 16" />
              </svg>
            </button>
          </div>
          {
            mobileMenuOpen && <div id="mobile-navigation" role="navigation" aria-label="Mobile navigation" className="
            absolute md:hidden z-50 transition-all duration-300 ease-out left-0 right-0 
            animate-fadeInUp cursor-auto bg-[#faf9f6] border-2 border-black
            top-full mt-3 mx-4
          ">
              <div className="p-5 cursor-auto">
                <nav className="flex flex-col space-y-1">
                  <Link
                    className="text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10"
                    href="/projects"
                    style={{ fontFamily: "Sora, sans-serif" }}>
                    Work
                  </Link>
                  <Link
                    className="text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10"
                    href="/life"
                    style={{ fontFamily: "Sora, sans-serif" }}>
                    Life
                  </Link>
                  <Link className="text-black font-semibold py-3 px-4 transition-all duration-150 hover:bg-black hover:text-white focus:outline-none active:scale-[0.98] text-lg cursor-pointer border-b border-black/10"
                    href="/playground"
                    style={{ fontFamily: "Sora, sans-serif" }}>
                    Play
                  </Link>

                  <div className="pt-4 mt-2 border-t border-black/10">
                    <p
                      className="text-xs font-semibold text-black/50 uppercase tracking-wider mb-3 px-4"
                      style={{ fontFamily: "Sora, sans-serif" }}>
                      Connect with me
                    </p>
                    <div className="px-4 mb-2">
                      <button
                        data-sound="off"
                        className="
                        border-2 border-black font-semibold
                        px-4 py-3 text-sm flex items-center justify-center gap-2 w-full cursor-pointer
                        transition-all duration-150 ease-out
                        active:scale-[0.98]
                        bg-daisy-green text-black hover:bg-black hover:text-white
                      "
                        style={{ fontFamily: "Sora, sans-serif" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>Copy Email</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 px-4">
                      <a
                        href="https://x.com/nischalskanda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98] rounded-none font-sora"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        <span>X</span>
                      </a>
                      <a
                        href="https://github.com/RexO77"
                        target="_blank"
                        rel="noopener noreferrer" className="
                        bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98] rounded-none font-sora
                      "
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <span>GitHub</span></a>
                      <a
                        href="https://www.linkedin.com/in/nischalskanda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        col-span-2 bg-white border-2 border-black font-semibold text-black
                        px-3 py-3 text-sm flex items-center justify-center gap-2 cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98] rounded-none font-sora
                      ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                    <div className="px-4 mt-2">
                      <a
                        href="https://www.dropbox.com/scl/fi/d4c7l11u4d0xdwndentqn/Nischal_Resume.pdf?rlkey=0bx78a5ov03848z5ie9g3n2t0&amp;st=22im99an&amp;dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        bg-white border-2 border-black font-semibold text-black
                        px-4 py-3 text-sm flex items-center justify-center gap-2 w-full cursor-pointer
                        transition-all duration-150 ease-out
                        hover:bg-black hover:text-white 
                        active:scale-[0.98] rounded-none font-sora
                      ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        <span>Download Resume</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          }

        </header>
      )
      }
    </>
  );
}

export default Navbar