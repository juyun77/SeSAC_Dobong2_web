import Navbar from "./components/Navbar";
import StudentPage from "./pages/StudnetPage";
import { Route, Routes } from "react-router-dom";
import "./style/common.scss";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/student/:studentName" element={<StudentPage />} />
      </Routes>
    </>
  );
}

export default App;
