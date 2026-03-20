function VerseList({ verses, onBack }) {
  const sorted = [...verses].sort((a, b) => b.week.localeCompare(a.week))

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">지난 말씀</h1>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            이번 주 말씀
          </button>
        </div>

        {/* 말씀 목록 */}
        <div className="space-y-4">
          {sorted.map((verse) => (
            <div
              key={verse.week}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <p className="text-sm text-indigo-600 font-medium mb-2">
                {formatWeek(verse.week)}
              </p>
              <p className="text-gray-800 text-lg leading-relaxed mb-2 break-keep">
                {verse.verse}
              </p>
              <p className="text-gray-500 text-sm">{verse.reference}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function formatWeek(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}년 ${month}월 ${day}일 주간`
}

export default VerseList
