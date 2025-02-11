import { AnimatePresence, motion } from 'framer-motion'
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
import CotizadorArrendamiento from './pages/CotizadorArrendamiento'
import CotizadorRevolvente from './pages/CotizadorRevolvente'
import CreditoRevolvente from './pages/CreditoRevolvente'
import CreditoSimple from './pages/CreditoSimple'
import CreditWizard from './pages/CreditWizard'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
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
          path='/cotizador'
          element={
            <PageWrapper>
              <CreditWizard />
            </PageWrapper>
          }
        />
        <Route
          path='/cotizador-revolvente'
          element={
            <PageWrapper>
              <CotizadorRevolvente />
            </PageWrapper>
          }
        />
        <Route
          path='/cotizador-arrendamiento'
          element={
            <PageWrapper>
              <CotizadorArrendamiento />
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
      </Routes>
    </AnimatePresence>
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
      <div className='min-h-screen bg-white'>
        <Header />
        <main>
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
