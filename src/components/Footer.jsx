function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>© {new Date().getFullYear()} 全球城市时钟 | 基于 React 和 Tailwind CSS 构建</p>
      </div>
    </footer>
  )
}

export default Footer