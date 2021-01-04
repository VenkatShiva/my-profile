import './App.css';
import PdfViewer from './components/pdf-viewer.component';
import Header from './components/header.component';

function App() {
  return (
    <div className="app column-flex">
      <Header />
      <PdfViewer />
    </div>
  );
}

export default App;
