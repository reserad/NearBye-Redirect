import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { VerifyRedirect } from './VerifyRedirect';

function App() {
  return (
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/verify/:id" element={<VerifyRedirect />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;