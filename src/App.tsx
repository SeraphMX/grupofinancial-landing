import { motion } from 'framer-motion'
import { ReactNode, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Benefits from './components/Benefits'
import ChatAssistant from './components/ChatAssistant'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PageLoader from './components/PageLoader'
import Products from './components/Products'
import ScrollToTop from './components/ScrollToTop'
import Testimonials from './components/Testimonials'
import AboutUs from './pages/AboutUs'
import Arrendamiento from './pages/Arrendamiento'
import CreditoRevolvente from './pages/CreditoRevolvente'
import CreditoSimple from './pages/CreditoSimple'
import Fees from './pages/Fees'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import CreditWizard from './pages/Wizard'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    //<AnimatePresence mode='wait'> TODO:Rompe la UI
    <Routes location={location} key={location.pathname}>
      <Route
        path='/'
        element={
          <PageWrapper>
            <HomePage />
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
            <CreditWizard />
          </PageWrapper>
        }
      />
      <Route
        path='/solicitud-credito-revolvente'
        element={
          <PageWrapper>
            <CreditWizard />
          </PageWrapper>
        }
      />
      <Route
        path='/solicitud-arrendamiento'
        element={
          <PageWrapper>
            <CreditWizard />
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

function HomePage() {
  return (
    <>
      <Hero />
      {/* <CompanyInfo />
      <Partners /> */}
      <Benefits />
      <Products />
      <Testimonials />
      <ContactForm />
    </>
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
