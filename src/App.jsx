import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout/Layout'
import About from './Pages/About/About'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home'
import Blogs from './Pages/Blogs/Blogs'
import BlogsDetails from './Pages/BlogsDetails/BlogsDetails'
import PlacesRoute from './Pages//PlacesRoute/PlacesRoute'
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  let routing = createBrowserRouter([
    {path:'' , element:<Layout/> , children :[
      {index:true,element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/blogs',element:<Blogs/>},
      {path:'/blogs/:id',element:<BlogsDetails/>},
      {path:'/best-places',element:<PlacesRoute/>},
      {path:'*',element:<NotFound/>},
    ]}
  ])
  
  return (
    <>
      <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App
