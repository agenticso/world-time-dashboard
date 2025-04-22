import { useState, useEffect } from 'react'
import CityGrid from './components/CityGrid'
import Header from './components/Header'
import Footer from './components/Footer'
import { cities } from './data/cities'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <CityGrid cities={cities} currentTime={currentTime} />
      </main>
      <Footer />
    </div>
  )
}

export default App