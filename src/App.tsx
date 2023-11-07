import './App.css'
import Button from './components/Button'




function App() {
  return (
    <>
        <h1 className="text-3xl font-bold underline mb-20">
            Hello world!
        </h1>
        <Button backgroundColor='red' fontSize={30} pillShape={true} />
    </>
  )
}

export default App
