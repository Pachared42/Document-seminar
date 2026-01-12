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

function DocsPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200">
            <div className="max-w-5xl mx-auto px-6 py-14 font-sans">

                <header className="mb-14">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Portfolio Seminar + Deploy ขึ้น Vercel
                    </h1>
                    <img className='mb-4 rounded-2xl' src="PortfolioSeminar.jpg" alt="" />
                    <p className="text-slate-600 text-lg">
                        คู่มือการติดตั้งและจัดโครงสร้างโปรเจกต์ React Portfolio ตั้งแต่เริ่มต้น
                    </p>
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
                    <img className='rounded-2xl mt-2' src="usernameGithub.jpeg" alt="" />
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
 ├─ sections/
 │   ├─ Navbar.jsx
 │   ├─ Hero.jsx
 │   ├─ About.jsx
 │   ├─ Projects.jsx
 │   ├─ Education.jsx
 │   ├─ Skills.jsx
 │   ├─ Contact.jsx
 │   └─ Footer.jsx
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css`}</CodeBlock>

                    <h3 className="font-semibold text-lg mt-6">Example: Hero.jsx</h3>
                    <CodeBlock>{`import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-slate-100">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-slate-900"
      >
        Hello, I'm Developer
      </motion.h1>
    </section>
  );
}`}</CodeBlock>
                </Section>

                <footer className="text-center text-slate-500 mt-20">
                    © 2026 Frontend Portfolio Docs
                </footer>
            </div>
        </div>
    );
}

export default DocsPage;