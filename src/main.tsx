import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router';
import { SiteProvider } from '@/lib/content';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SiteProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SiteProvider>
    </QueryClientProvider>
  </StrictMode>,
)
