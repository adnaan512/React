import './App.css'
import './index.css'
import Card from '../components/card'

function App() {
  let obj={
    name:"admn",
    role:"admin"
  }
  return (
    <div className="min-h-screen w-full bg-white p-8">
      {/* First Component - Heading */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-5xl font-bold text-black bg-green-500 text-center rounded-xl p-6">
          Hello Tailwind CSS! 🎨
        </h1>
      </div>
      <Card name="adnan" me={obj}/>
      </div>
  )
}

export default App