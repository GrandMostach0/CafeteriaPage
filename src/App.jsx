import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./page/Home"
import Users from "./page/Users"
import NotFound from "./page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
 