import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/home/Home";

function RoutesLink() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/genre/:id" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RoutesLink
