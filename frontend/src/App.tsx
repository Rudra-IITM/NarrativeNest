
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import NewBlog from "./pages/NewBlog";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/new-blog" element={<NewBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
