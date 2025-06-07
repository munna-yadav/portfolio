import Introduction from "@/components/Introduction"
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Assets from "@/components/Assets"
import GithubCalendar from "@/components/GithubCalendar"
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div >
    <main className="min-h-screen py-20 bg-white text-black dark:bg-zinc-900 dark:text-white flex items-center justify-center flex-col">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Introduction/>
              <GithubCalendar />
              <About />
              <Education />
              <Skills />
              <Projects/>
            </>
          }
          />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/assets" element={<Assets/>}/>
      </Routes>
        
      </div>
    </main>
  </div>
  )
}

export default App
