import { useEffect } from 'react'
import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from 'react-router-dom'

import Onboarding from './pages/Onboarding'
import Login from './pages/Login'
import Main from './pages/Main'


function App() {
  const action = useNavigationType()
  const location = useLocation()
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0)
    }
  }, [action, pathname])


  useEffect(() => {
    let title = '' 
    let metaDescription = ''

    switch (pathname) {
      case "/":
        title = ""
        metaDescription = ""
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescription.content = metaDescription
      }
    }
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<Onboarding />} />
      <Route path='login' element={<Login />} />
      <Route path='main' element={<Main />} />
    </Routes>
  )
}

export default App