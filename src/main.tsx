import { NextUIProvider } from '@nextui-org/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './App.tsx'
import './index.css'
import { store } from './store/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <NextUIProvider>
        <Provider store={store}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Provider>
      </NextUIProvider>
    </ParallaxProvider>
  </StrictMode>
)
