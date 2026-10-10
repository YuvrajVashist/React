import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'

function App() {
    // Hide Navbar on owner routes
    const isOwnerPath = useLocation().pathname.includes("owner")

    return (
        <div>
            {!isOwnerPath && <Navbar />}

            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    
                </Routes>
            </div>
        </div>
    )
}

export default App