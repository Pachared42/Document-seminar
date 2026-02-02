import DocsList from "./DocsList";
import ScrollProgressButton from "../ui/ScrollProgressButton";

function Home() {
  return (
    <div className="bg-[#0B0B10] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-5">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Documentation</h1>
          <p className="text-gray-400 mt-2">บทความและเอกสารสำหรับการเรียนรู้</p>
        </div>
        <DocsList />
        <ScrollProgressButton />
      </div>
    </div>
  );
}

export default Home;
