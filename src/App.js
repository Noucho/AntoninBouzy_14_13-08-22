import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Employee from './pages/Employee'
import Index from './pages/Index'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employee-list" element={<Employee />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
