import React, { Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Loading from './components/Loading'
import NotFound from './Pages/NotFound'
import AnimatedTitle from './components/AnimatedTitle'

export default function App(){
  return (
    <>
      <AnimatedTitle />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}
