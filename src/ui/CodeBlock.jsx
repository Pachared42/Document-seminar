import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Highlight, themes } from "prism-react-renderer";

function CodeBlock({
  code,
  children,
  language = "jsx",
  showLineNumbers = true,
}) {
  const [copied, setCopied] = useState(false);

  const sourceCode = String(code ?? children ?? "").trimEnd();

  const handleCopy = async () => {
    if (!sourceCode || copied) return;
    await navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative mt-6">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        disabled={copied}
        className={`
            absolute top-11 right-3 z-10
            flex items-center gap-1
            rounded-md px-2 py-1 text-xs
            transition
    ${
      copied
        ? "bg-emerald-600/80 text-white cursor-not-allowed scale-95 opacity-90"
        : "bg-slate-600/80 text-slate-200 hover:bg-slate-700 cursor-pointer"
    }
  `}
      >
        {copied ? <FiCheck /> : <FiCopy />}
        {copied ? "คัดลอกแล้ว" : "คัดลอก"}
      </button>

      {/* macOS Header */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-t-xl bg-[#161b22] border border-b-0 border-[#1f2330]">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <Highlight theme={themes.dracula} code={sourceCode} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} code-scrollbar rounded-b-xl
            border border-[#1f2330]
            p-5 overflow-x-auto
            text-sm sm:text-base`}
            style={{ ...style, background: "#0d1117" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-right select-none text-slate-500">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export default CodeBlock;
