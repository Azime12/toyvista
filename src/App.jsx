import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

import ProtectedRoute from "./components/ProtectedRoute";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route >
          <Route
            element={
              <ProtectedRoute
                allowedRoles={[
                  "Sub-City Head",
                  "Sector Leader",
                  "Coordinator",
                  "Group Leader",
                  "Professional",
                  "Admin",
                  "user",
                  "Committee",
                ]}
              />
            }
          >
           
          </Route>

      

        
        
          

         
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
