import { motion } from 'framer-motion'
import { ReactNode, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import ChatAssistant from './components/ChatAssistant'
import Footer from './components/Footer'
import Header from './components/Header'
import PageLoader from './components/PageLoader'
import ScrollToTop from './components/ScrollToTop'
import CreditWizard from './components/Wizard'
import AboutUs from './pages/AboutUs'
import Arrendamiento from './pages/Arrendamiento'
import CreditoRevolvente from './pages/CreditoRevolvente'
import CreditoSimple from './pages/CreditoSimple'
import Fees from './pages/Fees'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    //<AnimatePresence mode='wait'> TODO:Rompe la UI
    <Routes location={location} key={location.pathname}>
      <Route
        path='/'
        element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        }
      />
      <Route
        path='/productos/credito-simple'
        element={
          <PageWrapper>
            <CreditoSimple />
          </PageWrapper>
        }
      />
      <Route
        path='/productos/credito-revolvente'
        element={
          <PageWrapper>
            <CreditoRevolvente />
          </PageWrapper>
        }
      />
      <Route
        path='/productos/arrendamiento'
        element={
          <PageWrapper>
            <Arrendamiento />
          </PageWrapper>
        }
      />
      <Route
        path='/solicitud'
        element={
          <PageWrapper>
            <CreditWizard />
          </PageWrapper>
        }
      />
      <Route
        path='/solicitud-credito-simple'
        element={
          <PageWrapper>
            <CreditWizard pCreditType='simple' />
          </PageWrapper>
        }
      />
      <Route
        path='/solicitud-credito-revolvente'
        element={
          <PageWrapper>
            <CreditWizard pCreditType='revolvente' />
          </PageWrapper>
        }
      />
      <Route
        path='/solicitud-arrendamiento'
        element={
          <PageWrapper>
            <CreditWizard pCreditType='arrendamiento' />
          </PageWrapper>
        }
      />

      <Route
        path='/nosotros'
        element={
          <PageWrapper>
            <AboutUs />
          </PageWrapper>
        }
      />
      <Route
        path='/privacidad'
        element={
          <PageWrapper>
            <PrivacyPolicy />
          </PageWrapper>
        }
      />
      <Route
        path='/terminos'
        element={
          <PageWrapper>
            <Terms />
          </PageWrapper>
        }
      />
      <Route
        path='/comisiones'
        element={
          <PageWrapper>
            <Fees />
          </PageWrapper>
        }
      />
    </Routes>
    //</AnimatePresence>
  )
}

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='min-h-screen '>
        <Header />
        <main className='relative z-10 bg-white'>
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  )
}

export default App
