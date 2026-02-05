import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Storia from './pages/Storia'
import Menu from './pages/Menu'
import Eventi from './pages/Eventi'
import Contatti from './pages/Contatti'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="storia" element={<Storia />} />
          <Route path="menu" element={<Menu />} />
          <Route path="eventi" element={<Eventi />} />
          <Route path="contatti" element={<Contatti />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
