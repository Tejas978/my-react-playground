import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Params from './components/Params'
import Courses from './components/Courses'
import Report from './components/Report'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Home />
          <Navbar />
        </div>
    },
    {
      path: "/about",
      element: <div>
        <About />
        <Navbar />
      </div>
    },
    {
      path: "/dashboard",
      element: <div>
        <Dashboard />
        <Navbar />
      </div>,
      children: [  // ✅ Fixed Typo and Child Paths
        {
          path: "courses",  // ✅ Removed leading slash
          element: <Courses />
        },
        {
          path: "report",  // ✅ Removed leading slash
          element: <Report />
        },
      ]
    },
    {
      path: "/admin/:id",
      element: <div>
        <Navbar />
        <Params />
      </div>
    }
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
