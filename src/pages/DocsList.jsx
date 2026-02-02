import { Link } from "react-router-dom";
import { docsList } from "../constants/docsList";

function DocsList() {
  return (
    <div className="space-y-6">
      {docsList.map((doc) => (
        <Link
          key={doc.id}
          to={`/docs/${doc.id}`}
          className="
            group
            block bg-[#0B0B10] rounded-2xl
            overflow-hidden border border-[#1f2330]
            hover:border-blue-500 transition
          "
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={doc.image}
              alt={doc.title}
              className="
                  w-full object-cover
                  transition-all duration-700 ease-out
                  group-hover:scale-105 group-hover:brightness-110
                "
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <p className="text-sm text-gray-400 mb-1">{doc.date}</p>

            <h2 className="text-xl font-semibold text-white">{doc.title}</h2>

            <p className="text-gray-400 mt-2 text-sm">{doc.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {doc.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    text-sm px-3 py-1 rounded-lg
                    bg-[#1f2330]  text-gray-300
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DocsList;
