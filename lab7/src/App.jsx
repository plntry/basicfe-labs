import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Homepage from "./components/pages/Homepage/Homepage"
import Task1 from "./components/pages/Task1/Task1"
import Task2 from "./components/pages/Task2/Task2"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route index path='/task1' element={<Task1 />} />
          <Route path='/task2' element={<Task2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
