import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <main className='relative'>
      <div>
        <Sidebar />
      </div>
      <section className='fixed  w-full bg-white rounded-l-[50px] left-16  h-screen z-100 '>
        <div className=''>
          <Navbar />
        </div>
        <div>
          <Wrapper />
        </div>
      </section>
    </main>
  )
}

export default App
