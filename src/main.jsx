import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './pages/Filmes.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Home from './pages/Home.jsx'
import PaginaFilmes from './pages/pagFilme.jsx' 
import Blog from './pages/Blog.jsx'
import Contato from './pages/Contato.jsx'
import Search from './pages/Search.jsx'
import Recomendacao from './componentes/Recomendacao/recomendacao.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {index: true, element: <Home/>},
        {path: "filmes", element: <Filmes/>},
        {path: "/:id", element: <PaginaFilmes/>},
        {path: "filmes/:id", element: <PaginaFilmes/>},
        {path:"filmes/:id/:id", element: <PaginaFilmes/>},
        {path: "blog", element: <Blog/>},
        {path: "contato", element: <Contato/>},
        {path: "*", element: <PageNotFound/>},
        {path: "search", element: <Search/>},
        {path: "/:id", element: <Recomendacao/>},

      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
