import { useParams } from "react-router-dom";
import DocsPageDevfolio from "../components/DocsPageDevfolio.jsx";

function DocsPage() {
  const { docId } = useParams();

  if (docId === "DocsPageDevfolio") {
    return <DocsPageDevfolio />;
  }

  return (
    <div>
      <h2>ไม่พบเอกสาร</h2>
    </div>
  );
}

export default DocsPage;
