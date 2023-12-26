import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom'; 
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
