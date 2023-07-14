import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import App from './App.tsx'
import theme from './theme.tsx';
import ErrorPage from './pages/ErrorPage/index.tsx';
import Home from './pages/Home/index.tsx';
import About from './pages/About/index.tsx';
import Projects from './pages/Projects/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home/> },
      { path: "/About", element: <About/> },
      { path: "/Projects", element: <Projects/> }
    ]
  }
], {
  basename: "/portfolio-react"
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
