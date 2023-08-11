import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlertProvider } from "./contexts/AlertContext";
import { AuthProvider } from "./contexts/AuthContext";
import Alert from "./components/Alert";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Sidenav from "./Components-2/Sidenav";
import Tasks from "./Dashboard-Pages/Tasks"
import Test from "./Dashboard-Pages/Test"
import About from "./Dashboard-Pages/About"
import Accounts from "./Dashboard-Pages/Accounts"
import Customers from "./Dashboard-Pages/Customer"
import Projects from "./Dashboard-Pages/Projects"
import Orders from "./Dashboard-Pages/Orders"
import Navbar from "./Components-2/Navbar"
import Dashboards from "./Dashboard-Pages/Dashboards"
// import TableDashboard from "./Components-2/Tabledashboard"
// import appStore from "../appStore"

function App() {
  return (




    <AlertProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Sidenav /> } />
            <Route path="/dashboard" element={< Dashboards /> } />
            <Route path="/about" element={<About />} />
            <Route path="/Accounts" element={<Accounts />} />
           
            <Route path="/Tasks"  element={<Tasks /> } />
            <Route path="/Test" element={<Test /> } />
            <Route path="/Customers" element={<Customers /> } />
            <Route path="/Projects" element={<Projects /> } />
            <Route path="/Orders" element={<Orders /> } />
            <Route path="/Navbar" element={<Navbar /> } />
            <Route path="/Dashboards" element={<Dashboards /> } />
            {/* <Route path="/Tabledashboard" element={<Tabledashboard /> } /> */}
            {/* <Route path="/appStore" element={<appStore />} /> */}



          </Routes>
        </BrowserRouter>
        <Alert />
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
