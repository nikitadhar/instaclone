
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './landingPage/landingPage';
import PostView from './postView/postView';
import Form from './form/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/postView' element={<PostView />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
