import FeaturedArticle from "./components/FeaturedArticle/FeaturedArticle"
import Header from "./components/Header/Header"
import NewsCard from "./components/NewsCard/NewsCard"
import SideBar from "./components/Sidebar/Sidebar"

function App() {

  return (
    <>
      <Header />
      <main className="grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-1 grid-cols-1 lg:gap-6 gap-12 my-12">
        <FeaturedArticle />
        <SideBar />
      </main>
      <NewsCard />
    </>
  )
}

export default App
