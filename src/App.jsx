import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import { ThemeProvider } from "@/components/theme-provider"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './guards/ProtectedRoute';
import AlreadyLoginRoute from './guards/AlreadyLoginRoute';


function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Signup />} />
        <Route element={<AlreadyLoginRoute />}>
        <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/profileDetails' element={<ProfileDetails />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </ThemeProvider>
  )
}

export default App
