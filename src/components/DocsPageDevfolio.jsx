import CodeBlock from "../ui/CodeBlock";

const Section = ({ title, children }) => (
  <section className="border border-[#1f2330] rounded-2xl shadow-sm p-6 md:p-8 mb-10">
    <h2 className="text-2xl font-bold mb-4 text-slate-100">{title}</h2>
    {children}
  </section>
);

function DocsPageDevfolio() {
  return (
    <div className="min-h-screen px-4">
      <div className="max-w-5xl mx-auto py-10">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white ">
            Devfolio Seminar + Deploy ขึ้น Vercel
          </h1>
          <p className="text-gray-400 mt-2 mb-6">
            คู่มือการติดตั้งและจัดโครงสร้างโปรเจกต์ Devfolio
            ตั้งแต่เริ่มต้น
          </p>
          <img
            className="mb-4 rounded-2xl border border-[#1f2330]"
            src="/DocsPageDevfolio/PortfolioSeminar.png"
            alt="Portfolio Seminar"
          />
        </header>

        <Section title="ขั้นตอนที่ 1: ดาวน์โหลดรูปภาพจาก Github repository">
          <ol className="list-decimal pl-6 space-y-2 text-slate-100">
            <li>
              เข้าเว็บไซต์{" "}
              <a
                href="https://github.com/Pachared42/image-seminar"
                className="font-medium underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                image-seminar
              </a>
            </li>
          </ol>
          <p className="mt-4 text-slate-100">ตัวอย่างที่ 1</p>
          <img
            className="rounded-2xl mt-2 border border-[#1f2330]"
            src="/DocsPageDevfolio/DownloadExample1.png"
            alt="username Github"
          />
          <p className="mt-4 text-slate-100">ตัวอย่างที่ 2</p>
          <img
            className="rounded-2xl mt-2 border border-[#1f2330]"
            src="/DocsPageDevfolio/DownloadExample2.png"
            alt="username Github"
          />
        </Section>

        <Section title="ขั้นตอนที่ 2: ติดตั้ง Git">
          <ol className="list-decimal pl-6 space-y-2 text-slate-100">
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
            <li>
              ดาวน์โหลด Git ให้ตรงกับระบบปฏิบัติการ (Windows / macOS / Linux)
            </li>
            <li>ติดตั้งโดยใช้ค่า Default ทั้งหมด</li>
            <li>เปิด cmd ตรวจสอบการติดตั้งด้วยคำสั่ง</li>
          </ol>

          <CodeBlock>{`git --version`}</CodeBlock>

          <p className="mt-4 text-slate-100">
            ถ้าเห็นผลลัพธ์ลักษณะนี้ แสดงว่าติดตั้งสำเร็จ:
          </p>

          <CodeBlock>{`git version 2.xx.x.windows.x`}</CodeBlock>

          <p className="mt-4 text-slate-100">
            ตั้งค่าข้อมูลผู้ใช้ เปิด cmd แล้วรันคำสั่งต่อไปนี้ (แนะนำเป็นชื่อ
            Username GitHub และอีเมลที่ใช้สมัคร GitHub):
          </p>

          <CodeBlock>{`git config --global user.name "ชื่อของคุณ"`}</CodeBlock>
          <p className="mt-4 text-slate-100">ตัวอย่าง Username GitHub</p>
          <img
            className="rounded-2xl mt-2 border border-[#1f2330]"
            src="/DocsPageDevfolio/usernameGithub.jpeg"
            alt="username Github"
          />
          <CodeBlock>{`git config --global user.email "email@example.com"`}</CodeBlock>

          <p className="mt-4 text-slate-100">ตรวจสอบค่าที่ตั้งไว้:</p>

          <CodeBlock>{`git config --list`}</CodeBlock>

          <p className="mt-4 text-slate-100">
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

        <Section title="ขั้นตอนที่ 3: สร้างโปรเจกต์ด้วย Vite + React + TailwindCSS + Framer Motion">
          <h3 className="font-semibold text-lg mt-2 text-slate-100">
            3.1 สร้างโปรเจกต์ Vite
          </h3>
          <CodeBlock>{`cd Documents`}</CodeBlock>
          <CodeBlock>{`npm create vite@latest devfolio-pachara`}</CodeBlock>
          <CodeBlock>{`cd devfolio-pachara`}</CodeBlock>
          <CodeBlock>{`npm install`}</CodeBlock>
          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            3.2 ติดตั้ง TailwindCSS v4.1
          </h3>
          <p className="text-slate-100">
            เข้าเว็บไซต์{" "}
            <a
              href="https://tailwindcss.com/docs/installation/using-vite"
              className="font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              tailwindcss.com
            </a>
          </p>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            3.3 ติดตั้ง Framer Motion, React Icons & Lenis
          </h3>
          <CodeBlock>{`npm install @studio-freight/lenis framer-motion react-icons`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            3.4 Run Project
          </h3>
          <CodeBlock>{`npm run dev`}</CodeBlock>
        </Section>

        <Section title="ขั้นตอนที่ 4: สร้าง Folder Structure & Sections">
          <p className="text-slate-100 mb-4">
            โครงสร้างไฟล์สำหรับ Devfolio Website โดยแยก Section
          </p>
          <CodeBlock>{`public
├─ image.Hero
├─ image.decorative
├─ image.videos
└─ image.Projects
src
├─ components/
│  ├─ CircularGallery.jsx
├─ constants/
│  ├─ constants.jsx
├─ sections/
│  ├─ Navbar.jsx
│  ├─ Hero.jsx
│  ├─ About.jsx
│  ├─ Education.jsx
│  ├─ Projects.jsx
│  ├─ ImageShowcase.jsx
│  ├─ VideoShowcase.jsx
│  ├─ Skills.jsx
│  ├─ Contact.jsx
│  └─ Footer.jsx
├─ App.css
├─ App.jsx
├─ index.css
└─ main.jsx`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            constants.jsx
          </h3>
          <CodeBlock>{`// Skills icons
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

// Tools icons
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io5";
import { SiXampp } from "react-icons/si";
import { SiMamp } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiWarp } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import { SiBruno } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiGit } from "react-icons/si";

// Database icons
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// Cloud icons
import { SiRailway } from "react-icons/si";
import { SiVercel } from "react-icons/si";

// Social media icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "ประวัติ", href: "#about" },
  { label: "ผลงาน", href: "#projects" },
  { label: "การศึกษา", href: "#education" },
  { label: "ทักษะ", href: "#skills" },
  { label: "ติดต่อ", href: "#contact" },
];

export const HERO = {
  name: "PACHARA",
  greet: "FRONT-END DEVELOPER",
  greet2: "BACK-END DEVELOPER",
  greet3: "FULL-STACK DEVELOPER",
  greet4: "LEAD FRONT-END DEVELOPER",
};

export const ABOUT = [
  "ผมเป็นนักศึกษาระดับปริญญาตรี จากมหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี มีความหลงใหลในการออกแบบและพัฒนาเว็บไซต์ โดยเฉพาะในสายงาน Front-End Developer พร้อมให้ความสำคัญกับการสร้างสรรค์ผลงานที่สวยงามและตอบโจทย์ผู้ใช้งานอยู่เสมอ",
  "ด้วยความมุ่งมั่นในการเรียนรู้และพัฒนาทักษะอย่างต่อเนื่อง ผมตั้งเป้าหมายในการเติบโตสู่การเป็น Lead Front-End Developer โดยเน้นการออกแบบซอฟต์แวร์ที่มีคุณภาพ และประสบการณ์ผู้ใช้ที่ดีเยี่ยมควบคู่กันไป",
];

export const PROJECTS = [
  {
    id: 1,
    title: "ระบบจัดการสต๊อกสินค้า",
    description:
      "ระบบจัดการสต๊อกสินค้าแบบครบวงจร รองรับการค้นหาและสแกนบาร์โค้ดแบบเรียลไทม์แสดงข้อมูลสินค้า คงเหลือ และประวัติการขายอย่างเป็นระบบออกแบบมาเพื่อเพิ่มความรวดเร็วและลดความผิดพลาดในการจัดการสินค้า",
    image: "/image.Projects/Project1.jpeg",
    techStack: ["React", "TailwindCSS", "Golang", "MySQL", "JWT"],
  },
  {
    id: 2,
    title: "ระบบแดชบอร์ดผู้ดูแลระบบ",
    description:
      "แดชบอร์ดสำหรับผู้ดูแลระบบ ใช้แสดงข้อมูลภาพรวมและสถิติสำคัญแบบเรียลไทม์รองรับการกำหนดสิทธิ์ผู้ใช้งานและการยืนยันตัวตนอย่างปลอดภัยออกแบบ UI ให้ใช้งานง่าย รองรับการแสดงผลทุกอุปกรณ์",
    image: "/image.Projects/Project2.jpeg",
    techStack: ["React", "MUI", "Golang", "REST API"],
  },
  {
    id: 3,
    title: "แพลตฟอร์มการเรียนรู้ออนไลน์",
    description:
      "แพลตฟอร์มการเรียนรู้ออนไลน์สำหรับจัดการบทเรียนและเนื้อหาแบบดิจิทัลรองรับระบบแบบฝึกหัด การติดตามความก้าวหน้า และสรุปผลการเรียนมุ่งเน้นประสบการณ์ผู้ใช้ที่เรียบง่ายและโต้ตอบได้อย่างลื่นไหล",
    image: "/image.Projects/Project3.jpeg",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
  },
];

export const GALLERY_IMAGES = [
  {
    image:
      "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/cea1/live/1de105b0-f5a5-11ef-bcea-7b70a14a5556.jpg",
    text: "",
  },
  {
    image:
      "https://media.formula1.com/image/upload/t_16by9North/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202490999.webp",
    text: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0693/9957/6767/files/SF-25-still-both-02_6c1c08a1-5474-4cab-bc14-b32cb54c4785.jpg?v=1766483997",
    text: "",
  },
  {
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_2048/q_auto/v1740000000/content/dam/fom-website/manual/2023/Launches2023/Ferrari2023Launch/Ferrari%20front.webp",
    text: "",
  },
  {
    image:
      "https://cdn-8.motorsport.com/images/amp/2jEDVkk0/s1000/scuderia-ferrari.jpg",
    text: "",
  },
  {
    image:
      "https://cdn-2.motorsport.com/images/amp/YBVoVaMY/s6/charles-leclerc-ferrari.jpg",
    text: "",
  },
  {
    image:
      "https://image.makewebcdn.com/makeweb/m_1920x0/ZeRUazFMT/contentPic/2023_Ferrari_SF_23_Bangkoksupercar_8.jpg",
    text: "",
  },
  {
    image:
      "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/ferrari-pit-stop_ver_1.png",
    text: "",
  },
  {
    image:
      "https://www.formulaonehistory.com/wp-content/uploads/2025/05/Charles-Leclerc-Ferrari-2025-Monaco-GP-FP1.webp",
    text: "",
  },
  {
    image:
      "https://www.techzine.eu/wp-content/uploads/2024/04/shutterstock_2428935571.jpg",
    text: "",
  },
  {
    image:
      "https://cdn.motorsport.com/images/mgl/YP7rOyX2/s1000/lewis-hamilton-ferrari-sf25.jpg",
    text: "",
  },
  {
    image:
      "https://a.espncdn.com/combiner/i?img=/photo/2026/0127/r1606450_1296x729_16-9.jpg",
    text: "",
  },
];

export const IMAGE_SHOWCASE = {
  title: "ผลงานการออกแบบกราฟิก",
};

export const VIDEO_SHOWCASE = {
  title: "ผลงานวิดีโอโปรโมชัน",
  items: [
    {
      thumbnail: "/image.videos/video1.jpg",
      link: "https://www.youtube.com/watch?v=PeF28qjw10Q&t=4s",
      title: "วิดีโอแนะนำบริการ",
      description:
        "รวบรวมความคิดเห็นและรีวิวจากลูกค้าเพื่อนำเสนอความน่าเชื่อถือ",
    },
    {
      thumbnail: "/image.videos/video2.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอแนะนำบริการ",
      description: "ผลิตวิดีโอที่อธิบายและแสดงถึงประโยชน์ของบริการต่างๆ",
    },
    {
      thumbnail: "/image.videos/video3.jpg",
      link: "https://www.youtube.com/watch?v=zzzzz",
      title: "วิดีโอรีวิวลูกค้า",
      description:
        "รวบรวมความคิดเห็นและรีวิวจากลูกค้าเพื่อนำเสนอความน่าเชื่อถือ",
    },
    {
      thumbnail: "/image.videos/video4.jpg",
      link: "https://www.youtube.com/watch?v=PeF28qjw10Q&t=4s",
      title: "วิดีโอแนะนำบริการ",
      description:
        "รวบรวมความคิดเห็นและรีวิวจากลูกค้าเพื่อนำเสนอความน่าเชื่อถือ",
    },
    {
      thumbnail: "/image.videos/video5.jpg",
      link: "https://www.youtube.com/watch?v=yyyyy",
      title: "วิดีโอแนะนำบริการ",
      description: "ผลิตวิดีโอที่อธิบายและแสดงถึงประโยชน์ของบริการต่างๆ",
    },
    {
      thumbnail: "/image.videos/video6.jpg",
      link: "https://www.youtube.com/watch?v=zzzzz",
      title: "วิดีโอรีวิวลูกค้า",
      description:
        "รวบรวมความคิดเห็นและรีวิวจากลูกค้าเพื่อนำเสนอความน่าเชื่อถือ",
    },
  ],
};

export const EDUCATION = [
  {
    degree: "มัธยมศึกษาตอนปลาย แผนการเรียนวิทย์–คณิต",
    institution: "[ ABC Secondary School ]",
    duration: "May 2559 - March 2562",
    description:
      "ศึกษาในแผนการเรียนวิทยาศาสตร์–คณิตศาสตร์ ควบคู่กับการเรียนรู้ด้วยตนเองด้านเทคโนโลยีและการออกแบบ เริ่มสนใจงานกราฟิกและการสร้างสื่อดิจิทัลตั้งแต่ช่วงนี้",
  },
  {
    degree: "ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาเทคโนโลยีสารสนเทศ",
    institution: "[ XYZ Technical College ]",
    duration: "May 2562 - March 2565",
    description:
      "เรียนรู้พื้นฐานด้านเทคโนโลยีสารสนเทศ การเขียนโปรแกรมเบื้องต้น การออกแบบกราฟิก และการพัฒนาเว็บไซต์ ฝึกปฏิบัติงานจริงผ่านโปรเจกต์และการทำงานเป็นทีม",
  },
  {
    degree: "ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์",
    institution: "[ Example University ]",
    duration: "July 2565 - Present",
    description:
      "ศึกษาเกี่ยวกับการพัฒนาซอฟต์แวร์ ระบบฐานข้อมูล เว็บแอปพลิเคชัน และเทคโนโลยีสมัยใหม่ เน้นการพัฒนาแบบ Full-stack รวมถึงการออกแบบประสบการณ์ผู้ใช้ (UI/UX) และการทำงานเชิงระบบ",
  },
];

export const SKILLS = [
  {
    skill1: (
      <SiReact className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#61DAFB]" />
    ),
    name: "React",
    experience: "",
  },
  {
    skill2: (
      <SiNextdotjs className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Next.js",
    experience: "",
  },
  {
    skill3: (
      <SiVite className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#646CFF]" />
    ),
    name: "Vite",
    experience: "",
  },
  {
    skill4: (
      <SiPhp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#8892BF]" />
    ),
    name: "PHP",
    experience: "",
  },
  {
    skill5: (
      <RiTailwindCssFill className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#38BDF8]" />
    ),
    name: "Tailwind CSS",
    experience: "",
  },
  {
    skill6: (
      <FaHtml5 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#E34F26]" />
    ),
    name: "HTML",
    experience: "",
  },
  {
    skill7: (
      <FaCss3Alt className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#264DE4]" />
    ),
    name: "CSS",
    experience: "",
  },
  {
    skill8: (
      <SiJavascript className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F7DF1E]" />
    ),
    name: "JavaScript",
    experience: "",
  },
  {
    skill9: (
      <SiTypescript className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#3178C6]" />
    ),
    name: "Typescript",
    experience: "",
  },
  {
    skill10: (
      <FaGolang className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#00ADD8]" />
    ),
    name: "GoLang",
    experience: "",
  },
  {
    skill11: (
      <SiMui className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007FFF]" />
    ),
    name: "MUI",
    experience: "",
  },
];

export const TOOLS = [
  {
    tool1: (
      <VscVscodeInsiders className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#007ACC]" />
    ),
    name: "Visual Studio Code",
    experience: "",
  },
  {
    tool2: (
      <IoLogoGithub className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#586069]" />
    ),
    name: "GitHub",
    experience: "",
  },
  {
    tool3: (
      <SiXampp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF7A00]" />
    ),
    name: "XAMPP",
    experience: "",
  },
  {
    tool4: (
      <SiMamp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#7D7D7D]" />
    ),
    name: "MAMP",
    experience: "",
  },
  {
    tool5: (
      <SiAdobeillustrator className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF9A00]" />
    ),
    name: "Adobe Illustrator",
    experience: "",
  },
  {
    tool6: (
      <SiAdobephotoshop className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#31A8FF]" />
    ),
    name: "Adobe Photoshop",
    experience: "",
  },
  {
    tool7: (
      <SiWarp className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Warp",
    experience: "",
  },
  {
    tool8: (
      <SiOpenai className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "OpenAI",
    experience: "",
  },
  {
    tool9: (
      <SiGithubcopilot className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4CB0FB]" />
    ),
    name: "GitHub Copilot",
    experience: "",
  },
  {
    tool10: (
      <SiBruno className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2E3A59]" />
    ),
    name: "SiBruno",
    experience: "",
  },
  {
    tool11: (
      <SiPostman className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FF6C37]" />
    ),
    name: "Postman",
    experience: "",
  },
  {
    tool12: (
      <SiCanva className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#01C3CC]" />
    ),
    name: "Canva",
    experience: "",
  },
  {
    tool13: (
      <SiDocker className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2496ED]" />
    ),
    name: "Docker",
    experience: "",
  },
  {
    tool14: (
      <SiGit className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F1502F]" />
    ),
    name: "Git",
    experience: "",
  },
];

export const DATABASES = [
  {
    database1: (
      <SiMysql className="text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#4479A1]" />
    ),
    name: "MySQL",
    experience: "",
  },
  {
    database2: (
      <SiMongodb className="text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#4DB33D]" />
    ),
    name: "MongoDB",
    experience: "",
  },
  {
    database3: (
      <BiLogoPostgresql className="text-7xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#336791]" />
    ),
    name: "PostgreSQL",
    experience: "",
  },
];

export const CLOUDS = [
  {
    cloud1: (
      <SiVercel className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Vercel",
    experience: "",
  },
  {
    cloud2: (
      <SiRailway className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-[#FFFFFF]" />
    ),
    name: "Railway",
    experience: "",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/pacharaaaaaaa",
    icon: <FaFacebook fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/axm.pcr/",
    icon: <FaInstagram fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Pachared42",
    icon: <FaGithub fontSize={50} className="hover:opacity-80" />,
  },
];`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            Navbar.jsx
          </h3>
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
                                <h1 className='text-red-500'>Pachara</h1>
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
                                <h1 className='text-red-500'>Pachara</h1>
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

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            Hero.jsx
          </h3>
          <CodeBlock>{`import { HERO } from "../constants/constants";
import { motion } from "framer-motion";

function Hero() {
  const sectionContainer = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const textItem = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const imageItem = {
    hidden: {
      opacity: 0,
      x: 120,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={sectionContainer}
      initial="hidden"
      animate="show"
      className="
        relative overflow-hidden
        pt-20 pb-40
        sm:pt-28 sm:pb-48
        lg:pt-40 lg:pb-80
      "
    >
      {/* Text */}
      <div className="relative z-10">
        <motion.h1
          variants={textItem}
          className=" font-bold leading-none text-white m-0 text-[clamp(3.5rem,10vw,15rem)] " >
          HI, I&apos;M {HERO.name}
        </motion.h1>
        <motion.h2
          variants={textItem}
          className=" font-bold leading-none -mt-2 text-transparent text-[clamp(3rem,9vw,11rem)] [-webkit-text-stroke:clamp(1px,0.15vw,3px)_white] " >
          {HERO.greet4}
        </motion.h2>
      </div>

      {/* Decorative Image */}
      <motion.img
        variants={imageItem}
        src="Hero/Hero3.jpg""
        alt="decorative"
        className="
          absolute top-1/2 -translate-y-1/2
          right-[-15%] sm:right-[-10%] lg:right-0
          w-[18rem] sm:w-[24rem] md:w-120 lg:w-xl xl:w-2xl
          opacity-40 sm:opacity-70
          pointer-events-none
          z-0
        "
      />
    </motion.section>
  );
}

export default Hero;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            About.jsx
          </h3>
          <CodeBlock>{`import { ABOUT } from "../constants/constants";
import { motion } from "framer-motion";

function About() {
  const sectionContainer = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageItem = {
    hidden: { opacity: 0, y: 24, rotate: -6 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const glowItem = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="
          relative
          bg-white rounded-3xl
          pt-20 pb-24
          sm:pt-24 sm:pb-28
          lg:pt-32 lg:pb-36
        "
      >
        {/* Decorative Images */}
        <motion.img
          variants={imageItem}
          src="image.decorative/5.png"
          alt="5"
          className="
            absolute top-0 left-[20%] lg:left-[10%]
            -translate-x-1/2 -translate-y-1/2
            w-[20rem] sm:w-90 lg:w-106
            -rotate-20
            opacity-40 sm:opacity-70
            pointer-events-none
          "
        />

        <motion.img
          variants={imageItem}
          src="image.decorative/fox.png"
          alt="fox"
          className="
            absolute top-[80%] right-[-10%] lg:right-0
            w-[18rem] sm:w-88 lg:w-104
            rotate-12
            opacity-40 sm:opacity-70
            pointer-events-none
          "
        />

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="
            text-center font-bold leading-none
            text-transparent
            text-[clamp(3rem,9vw,11rem)]
            [-webkit-text-stroke:clamp(1px,0.2vw,3px)_black]
          "
        >
          ABOUT ME
        </motion.h1>

        {/* Glow Effects */}
        <motion.div
          variants={glowItem}
          className="
            absolute top-10 right-[15%]
            w-[18rem] h-72
            bg-orange-300/30
            rounded-full blur-3xl
            pointer-events-none
          "
        />

        <motion.div
          variants={glowItem}
          className="
            absolute bottom-10 left-[10%]
            w-56 h-56
            bg-orange-300/30
            rounded-full blur-3xl
            pointer-events-none
          "
        />

        {/* Content */}
        <div
          className="
            relative z-10
            text-black
            mx-auto
            mt-10
            px-4 sm:px-8 lg:px-24 xl:px-40
            max-w-5xl
            text-[clamp(1rem,1.2vw,1.125rem)]
            leading-relaxed
          "
        >
          <motion.p variants={fadeUp} className="mb-4">
            {ABOUT[0]}
          </motion.p>
          <motion.p variants={fadeUp}>
            {ABOUT[1]}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            Projects.jsx
          </h3>
          <CodeBlock>{`import React, { useEffect, useRef } from "react";
import { PROJECTS } from "../constants/constants";
import { motion } from "framer-motion";

function Projects() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const slides = [PROJECTS[PROJECTS.length - 1], ...PROJECTS, PROJECTS[0]];

  const startAutoPlay = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider || isDragging.current) return;

      slider.scrollTo({
        left: slider.scrollLeft + slider.clientWidth,
        behavior: "smooth",
      });
    }, 3500);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.clientWidth;
    slider.scrollLeft = slideWidth;

    const onScroll = () => {
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slideWidth * PROJECTS.length;
      }

      if (slider.scrollLeft >= slideWidth * (PROJECTS.length + 1)) {
        slider.scrollLeft = slideWidth;
      }
    };

    slider.addEventListener("scroll", onScroll);
    startAutoPlay();

    return () => {
      slider.removeEventListener("scroll", onScroll);
      stopAutoPlay();
    };
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    stopAutoPlay();
    startX.current = e.pageX;
    startScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const walk = e.pageX - startX.current;
    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const snapToClosestSlide = () => {
    const slider = sliderRef.current;
    const slideWidth = slider.clientWidth;
    const index = Math.round(slider.scrollLeft / slideWidth);

    slider.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    snapToClosestSlide();
    startAutoPlay();
  };

  const slideFade = {
    hidden: { opacity: 0, scale: 0.97 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const contentStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        pt-20 pb-14
        sm:pt-28 sm:pb-32
        lg:pt-36 lg:pb-24
      "
    >
      {/* Title */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="
          text-center font-bold text-white
          mb-16 sm:mb-20
          text-[clamp(3rem,9vw,11rem)]
        "
      >
        PROJECTS
      </motion.h1>

      {/* Slider */}
      <div
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="
          flex overflow-x-hidden
          cursor-grab active:cursor-grabbing
          select-none
          border border-white/20 rounded-3xl
        "
      >
        {slides.map((project, index) => (
          <motion.div
            key={project.id + "-" + index}
            variants={slideFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="min-w-full px-4 py-8 sm:px-6 lg:px-10"
          >
            <div className="mx-auto max-w-6xl">
              <motion.div
                variants={contentStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="
                  grid grid-cols-1
                  md:grid-cols-2
                  gap-10 lg:gap-16
                  items-center
                "
              >
                {/* Image */}
                <motion.img
                  variants={fadeUp}
                  src={project.image}
                  alt={project.title}
                  className="
                    w-[clamp(16rem,40vw,28rem)]
                    rounded-2xl
                    mx-auto
                    pointer-events-none
                  "
                />

                {/* Content */}
                <motion.div variants={fadeUp} className="text-white space-y-6">
                  <motion.h2
                    variants={fadeUp}
                    className="
                      font-bold
                      text-[clamp(1.75rem,4vw,2.5rem)]
                    "
                  >
                    {project.title}
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    className="
                      text-white/80
                      leading-relaxed
                      text-[clamp(0.95rem,1.2vw,1.125rem)]
                    "
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap gap-3"
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4 py-2
                          rounded-full
                          bg-white/10
                          text-[0.8rem]
                          sm:text-sm
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-4 text-slate-100">
            CircularGallery.jsx
          </h3>
          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            ติดตั้ง React Bits
          </h3>
          <p className="text-slate-100">
            เข้าเว็บไซต์{" "}
            <a
              href="https://reactbits.dev/"
              className="font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              reactbits.dev
            </a>
          </p>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            ค้นหาแพ็กเกจที่ชื่อว่า "Circular Gallery"
          </h3>
          <CodeBlock>{`Circular Gallery`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            ติดตั้ง OGL
          </h3>
          <CodeBlock>{`npm install ogl`}</CodeBlock>

          <img
            className="w-full rounded-2xl mt-8 border border-[#1f2330]"
            src="/DocsPageDevfolio/ReactBitsDefaultItems.png"
            alt="ReactBitsDefaultItems"
          />

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            เปลี่ยน Code จากรูปภาพตัวอย่างเป็น
          </h3>
          <CodeBlock>{`const galleryItems = items && items.length ? items : GALLERY_IMAGES;`}</CodeBlock>

          <img
            className="w-full rounded-2xl mt-8 border border-[#1f2330]"
            src="/DocsPageDevfolio/ReactBits_vec3.png"
            alt="ReactBits_vec3"
          />

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            เปลี่ยน Code จากรูปภาพตัวอย่างเป็น
          </h3>
          <CodeBlock>{`vec3 p = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            ImageShowcase.jsx
          </h3>
          <CodeBlock>{`import React from "react";
import CircularGallery from "../components/CircularGallery";
import { IMAGE_SHOWCASE } from "../constants/constants";
import { motion } from "motion/react";

function ImageShowcase() {
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeUpSlow = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.2 },
    },
  };

  return (
    <section>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2
          variants={fadeUp}
          className="
            text-center font-bold text-white
            text-[clamp(1.75rem,3vw,2.25rem)]
          "
        >
          {IMAGE_SHOWCASE.title}
        </motion.h2>
        <motion.div
          className="relative h-[25vh] md:h-[41vh] lg:h-[50vh]"
          variants={fadeUpSlow}
        >
          <CircularGallery
            bend={0.3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={1}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ImageShowcase;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            VideoShowcase.jsx
          </h3>
          <CodeBlock>{`import React from "react";
import { motion } from "framer-motion";
import { VIDEO_SHOWCASE } from "../constants/constants";

function VideoShowcase() {
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardHover = {
    hover: {
      y: -6,
      scale: 1.02,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  const fadeUpSlow = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay: 0.2 },
    },
  };

  return (
    <section className="relative pb-44">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl px-0 sm:px-8"
      >
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="
            text-center font-bold text-white mb-24
            text-[clamp(1.75rem,3vw,2.25rem)]
          "
        >
          {VIDEO_SHOWCASE.title}
        </motion.h2>

        {/* Grid */}
        <motion.div variants={fadeUpSlow}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {VIDEO_SHOWCASE.items.map((video, index) => (
              <motion.a
                key={index}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover="hover"
                className="
                                        group block overflow-hidden
                                        rounded-3xl
                                        bg-white/5
                                        backdrop-blur
                                        border border-white/20
                                    "
              >
                <motion.div variants={cardHover}>
                  {/* Video Preview */}
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-56 object-cover"
                    />

                    {/* Play Overlay */}
                    <div
                      className="
                    absolute inset-0
                    flex items-center justify-center
                    bg-black/20
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                    >
                      <div
                        className="
                      w-14 h-14
                      rounded-full
                      bg-white
                      text-black
                      flex items-center justify-center
                      text-xl
                    "
                      >
                        ▶
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-6 text-white space-y-1">
                    <h3 className="font-semibold text-lg">{video.title}</h3>
                    <p className="text-sm text-white/70">{video.description}</p>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default VideoShowcase;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            Education.jsx
          </h3>
          <CodeBlock>{`import React from "react";
import { EDUCATION } from "../constants/constants";
import { motion } from "framer-motion";

function Education() {
  const sectionContainer = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageFloat = {
    hidden: { opacity: 0, y: 40, rotate: -8 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const glowFade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="relative">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="
          relative 
          bg-white rounded-3xl
          pt-20 pb-24
          sm:pt-24 sm:pb-28
          lg:pt-32 lg:pb-36
        "
      >
        {/* Decorative Images */}
        <motion.img
          variants={imageFloat}
          src="image.decorative/parrot.png"
          alt="parrot"
          className="
            absolute top-0 left-[30%] lg:left-[15%]
            -translate-x-1/2 -translate-y-1/2
            w-[16rem] sm:w-[20rem] lg:w-[24rem]
            -rotate-22
            opacity-40 sm:opacity-70
            pointer-events-none
          "
        />

        <motion.img
          variants={imageFloat}
          src="image.decorative/w.png"
          alt="w"
          className="
            absolute top-[85%] right-[-5%] lg:right-0
            w-[18rem] sm:w-88 lg:w-104
            rotate-12
            opacity-40 sm:opacity-70
            pointer-events-none
          "
        />

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="
            text-center font-bold leading-none
            text-transparent
            text-[clamp(3rem,9vw,11rem)]
            [-webkit-text-stroke:clamp(1px,0.2vw,3px)_black]
          "
        >
          EDUCATION
        </motion.h1>

        {/* Glow Effects */}
        <motion.div
          variants={glowFade}
          className="
            absolute top-16 right-[15%]
            w-[18rem] h-72
            bg-green-300/30
            rounded-full blur-3xl
            pointer-events-none
          "
        />

        <motion.div
          variants={glowFade}
          className="
            absolute bottom-16 left-[10%]
            w-[20rem] h-80
            bg-green-300/30
            rounded-full blur-3xl
            pointer-events-none
          "
        />

        {/* Content */}
        <motion.div
          variants={sectionContainer}
          className="
            relative z-10
            mx-auto
            mt-12 sm:mt-16
            px-4 sm:px-8 lg:px-24 xl:px-40
            max-w-5xl
            space-y-14
            text-black
          "
        >
          {EDUCATION.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <h3
                className="
                  font-bold
                  text-[clamp(1.25rem,2.5vw,1.75rem)]
                "
              >
                {item.degree}
              </h3>

              <p className="text-gray-700 mt-1">
                {item.institution}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {item.duration}
              </p>

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-relaxed
                  text-[clamp(0.95rem,1.2vw,1.125rem)]
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            Skills.jsx
          </h3>
          <CodeBlock>{`import React from "react";
import { SKILLS, TOOLS, DATABASES, CLOUDS } from "../constants/constants";
import { motion } from "framer-motion";

function Skills() {
  const sectionContainer = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const gridContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const iconItem = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const renderGrid = (data) => (
    <motion.div
      variants={gridContainer}
      className="
        grid
        grid-cols-4
        sm:grid-cols-5
        md:grid-cols-6
        lg:grid-cols-7
        gap-y-10
        place-items-center
      "
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          variants={iconItem}
          className="
            group relative
            flex flex-col items-center
            transition-transform duration-300 ease-out
            hover:-translate-y-2 hover:scale-110
          "
        >
          <div
            className="
              flex items-center justify-center
              w-[clamp(4.5rem,10vw,6rem)]
              h-[clamp(4.5rem,10vw,6rem)]
            "
          >
            {Object.values(item).find((val) => typeof val === "object")}
          </div>

          {/* Tooltip */}
          <div
            className="
              pointer-events-none
              absolute -bottom-8
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200
              bg-white text-black
              text-xs
              px-3 py-1 rounded-full
              whitespace-nowrap
            "
          >
            {item.name}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        pt-20 pb-28
        sm:pt-28 sm:pb-36
        lg:pt-36 lg:pb-44
      "
    >
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl px-4 sm:px-8"
      >
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="
            text-center font-bold text-white
            text-[clamp(3rem,9vw,11rem)]
          "
        >
          SKILLS
        </motion.h1>

        {/* Skills */}
        <motion.div variants={fadeUp} className="mt-5">
          <h2
            className="
              text-white font-semibold text-center
              mb-15
              text-[clamp(1.5rem,3vw,1.875rem)]
            "
          >
            ทักษะด้านเทคโนโลยี
          </h2>
          {renderGrid(SKILLS)}
        </motion.div>

        {/* Tools */}
        <motion.div variants={fadeUp} className="mt-10">
          <h2
            className="
              text-white font-semibold text-center
              mb-15
              text-[clamp(1.5rem,3vw,1.875rem)]
            "
          >
            เครื่องมือสำหรับการพัฒนา
          </h2>
          {renderGrid(TOOLS)}
        </motion.div>

        {/* Databases */}
        <motion.div variants={fadeUp} className="mt-10">
          <h2
            className="
              text-white font-semibold text-center
              mb-15
              text-[clamp(1.5rem,3vw,1.875rem)]
            "
          >
            ฐานข้อมูล
          </h2>
          {renderGrid(DATABASES)}
        </motion.div>

        {/* Clouds */}
        <motion.div variants={fadeUp} className="mt-10">
          <h2
            className="
              text-white font-semibold text-center
              mb-15
              text-[clamp(1.5rem,3vw,1.875rem)]
            "
          >
            คลาวด์
          </h2>
          {renderGrid(CLOUDS)}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            Contact.jsx
          </h3>
          <CodeBlock>{`import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants/constants";
import { motion } from "framer-motion";

function Contact() {
    const sectionContainer = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.15,
                staggerChildren: 0.12,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 26 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    const imageFloat = {
        hidden: { opacity: 0, y: 40, rotate: -8 },
        show: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const glowFade = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.9, ease: "easeOut" },
        },
    }

    return (
        <section id="contact" className="relative">
            <motion.div
                variants={sectionContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="relative bg-white rounded-3xl pt-24 pb-24"
            >
                {/* Decorative Images */}
                <motion.img
                    src="image.decorative/8.png"
                    alt="8"
                    variants={imageFloat}
                    className="
            absolute top-0 left-20 lg:left-40
            -translate-x-1/2 -translate-y-1/2
            w-55 md:w-[320px] lg:w-100
            -rotate-25 pointer-events-none
          "
                />

                <motion.img
                    src="image.decorative/donisaur.png"
                    alt="donisaur"
                    variants={imageFloat}
                    className="
            absolute top-85 -right-5
            w-60 md:w-80 lg:w-100
            rotate-12 pointer-events-none
          "
                />

                {/* Title */}
                <motion.h1
                    variants={fadeUp}
                    className="
            text-center font-bold leading-none
            text-transparent
            text-[clamp(3rem,9vw,11rem)]
            [-webkit-text-stroke:clamp(1px,0.2vw,3px)_black]
          "
                >
                    CONTACT ME
                </motion.h1>

                <motion.div
                    variants={glowFade}
                    className="
                            absolute top-16 right-[15%]
                            w-[18rem] h-72
                            bg-purple-300/30
                            rounded-full blur-3xl
                            pointer-events-none
                          "
                />

                <motion.div
                    variants={glowFade}
                    className="
                            absolute bottom-16 left-[10%]
                            w-[20rem] h-80
                            bg-green-300/30
                            rounded-full blur-3xl
                            pointer-events-none
                          "
                />

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="
            mx-auto mt-6 max-w-3xl
            text-center text-black
            text-sm sm:text-base
            px-4 sm:px-8
          "
                >
                    หากคุณสนใจร่วมงาน มีคำถามเพิ่มเติม หรืออยากพูดคุยเกี่ยวกับโปรเจกต์ต่างๆ
                    สามารถติดต่อผมได้ผ่านช่องทางโซเชียลมีเดียด้านล่างนี้
                    ผมยินดีรับฟังและตอบกลับทุกการติดต่อ
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    variants={fadeUp}
                    className="mt-10 flex justify-center gap-8"
                >
                    {SOCIAL_MEDIA_LINKS.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={iconVariants}
                            whileHover={{ scale: 1.2, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                text-3xl sm:text-4xl
                text-black hover:text-gray-600
                transition-colors duration-300
              "
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Contact;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            Footer.jsx
          </h3>
          <CodeBlock>{`import React from "react";

function Footer() {
  return (
    <footer className="text-center pt-32 sm:pt-40 lg:pt-56 pb-8">
      <p className="text-sm sm:text-base text-slate-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-slate-300">
          Frontend Devfolio
        </span>
      </p>

      <p className="mt-1 text-xs sm:text-sm text-slate-500">
        Built by{" "}
        <span className="text-slate-300 font-medium">Pachara Kalapakdee</span>
      </p>
    </footer>
  );
}

export default Footer;`}</CodeBlock>

          <h3 className="font-semibold text-lg mt-6 text-slate-100">App.jsx</h3>
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

          <p className="mt-6 text-slate-100">ตัวอย่าง Profile Github README</p>
          <img
            className="w-full rounded-2xl mt-6 border border-[#1f2330]"
            src="/DocsPageDevfolio/ProfileGithubREADME.png"
            alt="username Github"
          />

          <h3 className="font-semibold text-lg mt-6 text-slate-100">
            README.md
          </h3>
          <CodeBlock>{`Hi ![](https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif) My name is Pachara Kalapakdee
===========================================================================================================================================

### Front-End Developer | Passionate about UI/UX & Modern Web

* 🌍  I'm based in Suphan Buri
* 🖥️  See my portfolio at [Pachara](http://pachara.vercel.app/)
* ✉️  You can contact me at [pachared.amr12@gmail.com](mailto:pachared.amr12@gmail.com)
-------------------
# </ Skills >
### Front-End
<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="skills/html5.svg" width="50" height="50" /></a>&nbsp;
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="skills/css.svg" width="50" height="50" /></a>&nbsp;
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="skills/javascript.svg" width="50" height="50" /></a>&nbsp;
<a href="https://vitejs.dev/" target="_blank" rel="noreferrer"><img src="skills/vite.svg" width="50" height="50" /></a>&nbsp;
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="skills/react_dark.svg" width="50" height="50" /></a>&nbsp;
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="skills/nextjs_icon_dark.svg" width="50" height="50" /></a>&nbsp;
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="skills/tailwindcss.svg" width="50" height="50" /></a>&nbsp;
<a href="https://mui.com/" target="_blank" rel="noreferrer"><img src="skills/materialui.svg" width="50" height="50" /></a>&nbsp;
</p>

### Back-End
<p align="left">
<a href="https://go.dev/doc/" target="_blank" rel="noreferrer"><img src="skills/golang_dark.svg" width="50" height="50" /></a>&nbsp;
<a href="https://www.php.net/" target="_blank" rel="noreferrer"><img src="skills/php_dark.svg" width="50" height="50" /></a>
</p>

### Database
<p align="left">
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="skills/mysql-wordmark-dark.svg" width="60" height="60" /></a>&nbsp;
</p>

### Dev Tools
<p align="left">
<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="skills/vscode.svg" width="50" height="50" /></a>&nbsp;
<a href="https://cursor.com/home?from=agents" target="_blank" rel="noreferrer"><img src="skills/cursor_dark.svg" width="50" height="50" /></a>&nbsp;
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="skills/git.svg" width="50" height="50" /></a>&nbsp;
<a href="https://github.com/" target="_blank" rel="noreferrer"><img src="skills/github_dark.svg" width="50" height="50" /></a>&nbsp;
<a href="https://www.postman.com/" target="_blank" rel="noreferrer"><img src="skills/postman.svg" width="50" height="50" /></a>&nbsp;
<a href="https://www.warp.dev/" target="_blank" rel="noreferrer"><img src="skills/warp.svg" width="50" height="50" /></a>&nbsp;
<a href="https://n8n.io/" target="_blank" rel="noreferrer"><img src="skills/n8n.svg" width="50" height="50" /></a>&nbsp; -->
</p>

### Design Tools
<p align="left">
<a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noreferrer"><img src="skills/photoshop.svg" width="50" height="50" /></a>&nbsp;
<a href="https://www.adobe.com/uk/products/illustrator.html" target="_blank" rel="noreferrer"><img src="skills/illustrator.svg" width="50" height="50" /></a>
</p>`}</CodeBlock>
        </Section>

        <footer className="text-center text-slate-500 mt-10">
          <p className="text-sm sm:text-base text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-300">
              Frontend Devfolio Docs
            </span>
          </p>

          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Built & documented by{" "}
            <span className="text-slate-300 font-medium">
              Pachara Kalapakdee
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default DocsPageDevfolio;
