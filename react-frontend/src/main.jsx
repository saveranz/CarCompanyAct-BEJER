import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './pages/user/LandingPage.jsx'
import Listing from './pages/user/listing.jsx'
import Order from './pages/user/order.jsx'

function Router() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (path === '/listing') return <Listing />;
  if (path === '/order') return <Order />;
  return <LandingPage />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
