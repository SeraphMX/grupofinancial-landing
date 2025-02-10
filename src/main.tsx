import { NextUIProvider } from '@nextui-org/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
          <App />
        </Provider>
      </NextUIProvider>
    </ParallaxProvider>
  </StrictMode>
)
