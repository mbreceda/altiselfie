import { ChakraProvider } from "@chakra-ui/react";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import theme from "./theme";

import { RootLayout } from './pages/RootLayout';


const NotFound = () => <>Page not found</>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NotFound />}></Route>
      <Route
      path='/'
      element={<RootLayout />}
      >
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
