import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "./context/theme.context.tsx";
import {WeatherProvider} from "./context/weather.context.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
          <WeatherProvider>
              <App />
          </WeatherProvider>
      </ThemeProvider>
  </StrictMode>,
)
