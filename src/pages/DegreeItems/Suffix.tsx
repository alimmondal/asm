import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import the worker from the installed `pdfjs-dist` package
import "pdfjs-dist/build/pdf.worker.entry";
function Suffix() {
  return (
    <div className="h-full w-full ">
      <div className="">
        <h1 className="text-center font-semibold text-md py-20">
          Suffix and Prefix
        </h1>
      </div>
      <div className="h-full md:w-[85%] mx-auto">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl="/suffix-prefix.pdf" />
        </Worker>
      </div>
      <div className="text-center py-4">
        <a
          href="/suffix-prefix.pdf"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default Suffix;
