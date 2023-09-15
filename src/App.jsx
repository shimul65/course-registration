import './App.css'
import Course from './Components/Courses/Courses'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <header className="container mx-auto py-8 md:py-12">
        <Header></Header>
      </header>
      <main className="container mx-auto pb-12">
        <Course></Course>
      </main>
    </>
  )
}

export default App
