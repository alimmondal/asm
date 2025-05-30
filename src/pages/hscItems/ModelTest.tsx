import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import the worker from the installed `pdfjs-dist` package
import "pdfjs-dist/build/pdf.worker.entry";

const ModelTest = () => {
  return (
    <div className="h-full w-full md:w-[85%] mx-auto">
      <div className="py-20">
        <h1 className="text-center">HSC Test Questions</h1>
      </div>

      <div className="py-5">
        <div>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl="/HscTestPapers2025.pdf" />
          </Worker>
        </div>
        <div className="text-center py-4">
          <a
            href="/HscTestPapers2025.pdf"
            download
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModelTest;
