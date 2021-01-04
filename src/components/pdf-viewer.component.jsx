import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './assets/newVenkatShiva.pdf';
import goArrow from './assets/next.png';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: numberOfPages }) {
    setNumPages(numberOfPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="pdf-container column-flex flex-center-align">
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="pdf-footer column-flex flex-center-align">
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <div className="page-nav">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="nav-btns"
          >
            <img src={goArrow} alt="next" />
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className="nav-btns"
          >
            <img src={goArrow} alt="prev" />
          </button>
        </div>
        <p>
          <span>Click here to download resume </span>
          <a href={pdf} className="download-link" download>
            DOWNLOAD
          </a>
        </p>
      </div>
    </div>
  );
}
