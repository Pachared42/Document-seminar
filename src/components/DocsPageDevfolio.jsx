import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CodeBlock = ({ children }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className='relative mt-4'>
            <button onClick={handleCopy}
                className='absolute top-3 right-3 flex item-center gap-1 rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-200 hover:bg-slate-700 transition'>
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? 'คัดลอกแล้ว' : 'คัดลอก'}
            </button>
            <pre className='bg-slate-900 text-slate-100 rounded-xl p-5 overflow-x-auto text-sm'>
                <code>{children}</code>
            </pre>
        </div>
    );
};

const Section = ({ title, children }) => (
    <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm p-6 md:p-8 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">{title}</h2>
        {children}
    </section>
);

function DocsPageDevfolio() {
    return (
        <div className="min-h-screen px-4">
            <div className="max-w-5xl mx-auto py-10">

                <header className="mb-14">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white ">
                        Portfolio Seminar + Deploy ขึ้น Vercel
                    </h1>
                    <p className="text-gray-400 mt-2 mb-6">
                        คู่มือการติดตั้งและจัดโครงสร้างโปรเจกต์ React Portfolio ตั้งแต่เริ่มต้น
                    </p>
                    <img className='mb-4 rounded-2xl' src="/PortfolioSeminar.png" alt="Portfolio Seminar" />
                </header>

                <Section title="ขั้นตอนที่ 1: ติดตั้ง Git">
                    <ol className="list-decimal pl-6 space-y-2 text-slate-700">
                        <li>
                            เข้าเว็บไซต์{" "}
                            <a
                                href="https://git-scm.com/"
                                className="font-medium underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                git-scm.com
                            </a>
                        </li>
                        <li>ดาวน์โหลด Git ให้ตรงกับระบบปฏิบัติการ (Windows / macOS / Linux)</li>
                        <li>ติดตั้งโดยใช้ค่า Default ทั้งหมด</li>
                        <li>เปิด cmd ตรวจสอบการติดตั้งด้วยคำสั่ง</li>
                    </ol>

                    <CodeBlock>{`git --version`}</CodeBlock>

                    <p className="mt-4 text-slate-700">
                        ถ้าเห็นผลลัพธ์ลักษณะนี้ แสดงว่าติดตั้งสำเร็จ:
                    </p>

                    <CodeBlock>{`git version 2.xx.x.windows.x`}</CodeBlock>

                    <p className="mt-4 text-slate-700">
                        ตั้งค่าข้อมูลผู้ใช้ เปิด cmd แล้วรันคำสั่งต่อไปนี้ (แนะนำเป็นชื่อ Username GitHub และอีเมลที่ใช้สมัคร GitHub):
                    </p>

                    <CodeBlock>{`git config --global user.name "ชื่อของคุณ"`}</CodeBlock>
                    <p className="mt-4 text-slate-700">
                        ตัวอย่าง Username GitHub
                    </p>
                    <img className='rounded-2xl mt-2' src="/usernameGithub.jpeg" alt="username Github" />
                    <CodeBlock>{`git config --global user.email "email@example.com"`}</CodeBlock>

                    <p className="mt-4 text-slate-700">
                        ตรวจสอบค่าที่ตั้งไว้:
                    </p>

                    <CodeBlock>{`git config --list`}</CodeBlock>

                    <p className="mt-4 text-slate-700">
                        ถ้าเห็นผลลัพธ์ลักษณะนี้ แสดงว่าตั้งค่าสำเร็จ:
                    </p>

                    <CodeBlock>{`user.name=Somchai Jaidee
user.email=somchai@example.com
core.autocrlf=true
core.editor=code
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
`}</CodeBlock>
                </Section>

                <Section title="ขั้นตอนที่ 2: สร้างโปรเจกต์ด้วย Vite + React + TailwindCSS + Framer Motion">
                    <h3 className="font-semibold text-lg mt-2">2.1 สร้างโปรเจกต์ Vite</h3>
                    <CodeBlock>{`cd Documents`}</CodeBlock>
                    <CodeBlock>{`npm create vite@latest portfolio-pachara`}</CodeBlock>
                    <CodeBlock>{`cd portfolio-pachara`}</CodeBlock>
                    <CodeBlock>{`npm install`}</CodeBlock>
                    <h3 className="font-semibold text-lg mt-6">2.2 ติดตั้ง TailwindCSS v4.1</h3>
                    <p>เข้าเว็บไซต์{" "}
                        <a
                            href="https://tailwindcss.com/docs/installation/using-vite"
                            className="font-medium underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            tailwindcss.com
                        </a></p>

                    <h3 className="font-semibold text-lg mt-6">2.3 ติดตั้ง Framer Motion & React Icons</h3>
                    <CodeBlock>{`npm install framer-motion react-icons`}</CodeBlock>

                    <h3 className="font-semibold text-lg mt-6">2.4 Run Project</h3>
                    <CodeBlock>{`npm run dev`}</CodeBlock>
                </Section>

                <Section title="ขั้นตอนที่ 3: สร้าง Folder Structure & Sections">
                    <p className="text-slate-700 mb-4">
                        โครงสร้างไฟล์สำหรับ Portfolio Website โดยแยก Section
                    </p>

                    <CodeBlock>{`src/
 ├─ components/
 │   ├─ CircularGallery.jsx
 ├─ constants/
 │   ├─ constants.jsx
 ├─ sections/
 │   ├─ Navbar.jsx
 │   ├─ Hero.jsx
 │   ├─ About.jsx
 │   ├─ Education.jsx
 │   ├─ Projects.jsx
 │   ├─ ImageShowcase.jsx
 │   ├─ VideoShowcase.jsx
 │   ├─ Skills.jsx
 │   ├─ Contact.jsx
 │   └─ Footer.jsx
 ├─ App.jsx
 ├─ App.css
 ├─ index.css
 └─ main.jsx`}</CodeBlock>

                    <h3 className="font-semibold text-lg mt-6">App.jsx</h3>
                    <CodeBlock>{`import { useEffect } from "react";
import Lenis from "lenis";

import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ImageShowcase from "./sections/ImageShowcase";
import VideoShowcase from "./sections/VideoShowcase";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      <main className="flex flex-col p-5 lg:p-10">
        <Hero />
        <About />
        <Projects />
        <ImageShowcase/>
        <VideoShowcase/>
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;`}</CodeBlock>

                    <h3 className="font-semibold text-lg mt-6">Navbar.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>

                    <h3 className="font-semibold text-lg mt-6">Hero.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>

                    <h3 className="font-semibold text-lg mt-6">About.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>
                    <h3 className="font-semibold text-lg mt-6">Education.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>

                    <h3 className="font-semibold text-lg mt-6">Projects.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>

                    <h3 className="font-semibold text-lg mt-6">ImageShowcase.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>
                    <h3 className="font-semibold text-lg mt-6">VideoShowcase.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>
                    <h3 className="font-semibold text-lg mt-6">Skills.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>
                    <h3 className="font-semibold text-lg mt-6">Contact.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>
                    <h3 className="font-semibold text-lg mt-6">Footer.jsx</h3>
                    <CodeBlock>{`import { useState } from 'react'
import { NAVIGATION_LINKS } from '../constants/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'motion/react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -25;
            const elemantPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elemantPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Navbar */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>
                    <div className='flex items-center justify-center gap-6'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-white hover:text-stone-300 transition-colors duration-300">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex items-center justify-between mx-5'>
                        <div>
                            <a href="/">
                                <img src="image.decorative/Pachara.png" width={100} alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='text-white' size={30} />
                                ) : (
                                    <FaBars className='text-white' size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
                            >
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="block w-full text-[#ffffff] text-lg hover:text-purple-400 transition-colors"
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar`}</CodeBlock>
                </Section>

                <footer className="text-center text-slate-500 mt-20">
                    © 2026 Frontend Portfolio Docs
                </footer>
            </div>
        </div>
    );
}

export default DocsPageDevfolio;