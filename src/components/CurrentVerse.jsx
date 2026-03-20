function CurrentVerse({ verse, onShowList }) {
  if (!verse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
        <p className="text-white/70 text-lg">말씀을 불러오는 중...</p>
      </div>
    )
  }

  const hasImage = verse.image

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
      {/* 배경 */}
      {hasImage ? (
        <>
          <img
            src={import.meta.env.BASE_URL + verse.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />
      )}

      {/* 말씀 내용 */}
      <div className="relative z-10 max-w-2xl text-center">
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-serif leading-relaxed mb-8 break-keep">
          {verse.verse}
        </p>
        <p className="text-white/80 text-lg sm:text-xl">
          {verse.reference}
        </p>
      </div>

      {/* 지난 말씀 보기 버튼 */}
      <button
        onClick={onShowList}
        className="relative z-10 mt-12 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-colors"
      >
        지난 말씀 보기
      </button>
    </div>
  )
}

export default CurrentVerse
