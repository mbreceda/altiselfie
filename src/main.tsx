import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
    path='/'
    element={<div>Hello World</div>}
    >
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
