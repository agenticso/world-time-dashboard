function Header() {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <h1 className="text-2xl font-bold text-white">全球城市时钟</h1>
        </div>
        <div className="text-sm text-gray-400">
          实时显示全球主要城市时间
        </div>
      </div>
    </header>
  )
}

export default Header