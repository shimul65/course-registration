import './App.css'
import Course from './Components/Course/Course'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <header className="container mx-auto border border-red-700 py-8 md:py-12">
        <Header></Header>
      </header>
      <main className="container mx-auto border border-blue-700 pb-12">
        <Course></Course>
      </main>
    </>
  )
}

export default App
