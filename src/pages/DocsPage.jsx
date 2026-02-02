import { useParams, Link } from "react-router-dom";
import { docsMap } from "../constants/docsMap";

function DocsPage() {
  const { docId } = useParams();
  const DocComponent = docsMap[docId];

  if (DocComponent) {
    return <DocComponent />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B10] px-4">
      <div className="text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">404</h1>

        <p className="text-gray-400 text-lg mb-1">
          Oops, something went wrong.
        </p>

        <p className="text-gray-500 mb-6">ขออภัย ไม่พบเอกสารที่คุณกำลังค้นหา</p>

        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            px-5 py-2.5 rounded-lg
            bg-[#151821] text-white
            border border-white/10
            hover:bg-[#1f2330]
            transition
          "
        >
          ← กลับหน้าแรก
        </Link>
      </div>
    </div>
  );
}

export default DocsPage;
