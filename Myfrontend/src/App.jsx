import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './week6/signup';
import Navigation from './week6/navigation';
import Index from './week6/index';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
  <Route path="/" element={<Index />} />
  <Route path="/signup" element={<Signup />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;