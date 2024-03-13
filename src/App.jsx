import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
// import Home from './pages/Home';
import { ThemeProvider } from "@/components/theme-provider"
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
