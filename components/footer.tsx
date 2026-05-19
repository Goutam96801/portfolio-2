"use client"

import Image from "next/image";
import { useState } from "react";

const Footer = () => {
    const [isEmailCopied, setIsEmailCopied] = useState(false);


    const handleCopy = async () => {
        await navigator.clipboard.writeText('gautamkumar96801@gmail.com');
        setIsEmailCopied(true);
        setTimeout(() => {
            setIsEmailCopied(false);
        }, 2000);
    };


    return (
        <footer className="group/footer relative isolate overflow-hidden border-t border-[#d9c7a8]/70 bg-[#fbf5ec] text-[#2c241b] animate-fadeInUp">
            <div className="min-h-0 overflow-hidden relative z-10" style={{ aspectRatio: "1200 / 422" }}>
                <Image
                    src="/footer-light.webp"
                    alt=""
                    className="footer-scene__image  footer-art pointer-events-none "
                    loading="eager"
                    decoding="async"
                    aria-hidden="true"
                    fill
                />
                <div className=" pt-4 md:pt-8 w-full relative z-10 mx-auto px-6">
                    <div className=" max-w-350 flex items-start justify-between mx-auto">
                        <div className="max-w-md">
                            <a className="footer-brand inline-block text-xl font-bold leading-none tracking-tight text-[#21180f] transition-transform duration-300 hover:-translate-y-0.5 md:text-3xl lg:text-4xl" href="/">
                                Goutam Choudhary
                            </a>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-[#4b3b29] md:mt-6 md:gap-x-5 md:gap-y-2 md:text-sm">
                                <button type="button" className="footer-nav-link cursor-pointer text-left" onClick={handleCopy}>{isEmailCopied ? "Copied" : "Email"}</button>
                                <a href="https://www.linkedin.com/in/goutam-kumar-choudhary" target="_blank" rel="noopener noreferrer" className="footer-nav-link">LinkedIn</a>
                                <a href="https://github.com/Goutam96801" target="_blank" rel="noopener noreferrer" className="footer-nav-link">GitHub</a>
                                <a href="https://www.instagram.com/goutam_choudhary19/" target="_blank" rel="noopener noreferrer" className="footer-nav-link">Instagram</a>
                            </div>
                        </div>
                        <p className="text-end" aria-label="Copyright 2026">
                            {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
