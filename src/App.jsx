import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'


function App() {
    // Hide Navbar on owner routes
    const isOwnerPath = useLocation().pathname.includes("owner")

    return (
        <div>
            {!isOwnerPath && <Navbar />}

            <div className="min-h-screen">
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path='/rooms' />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App