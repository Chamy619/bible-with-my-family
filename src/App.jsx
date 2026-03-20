import { useState, useEffect } from 'react'
import CurrentVerse from './components/CurrentVerse'
import VerseList from './components/VerseList'

function App() {
  const [verses, setVerses] = useState([])
  const [view, setView] = useState('current')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/verses.json')
      .then((res) => {
        if (!res.ok) throw new Error('말씀 데이터를 불러올 수 없습니다')
        return res.json()
      })
      .then(setVerses)
      .catch((err) => setError(err.message))
  }, [])

  function getCurrentVerse() {
    if (verses.length === 0) return null
    const today = new Date().toISOString().slice(0, 10)
    const current = verses
      .filter((v) => v.week <= today)
      .sort((a, b) => b.week.localeCompare(a.week))[0]
    return current || verses[0]
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <p className="text-gray-500 text-lg">{error}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {view === 'current' ? (
        <CurrentVerse verse={getCurrentVerse()} onShowList={() => setView('list')} />
      ) : (
        <VerseList verses={verses} onBack={() => setView('current')} />
      )}
    </div>
  )
}

export default App
