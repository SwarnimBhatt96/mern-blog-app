import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './Layout';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <div className="App">
            <HomePage/>
          </div>
        }
        />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
      </Route>
    </Routes>

  );
}

export default App;
