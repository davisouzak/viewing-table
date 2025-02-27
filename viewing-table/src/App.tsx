import './App.css'
import SearchBar from './SearchBar/SearchBar'

export default function App() {
  return (
    <>
      <div className="text-2xl flex justify-between items-center p-5 gap-4">
        <h1 className='font-bold'>Funcionarios</h1>
        <div>
          <SearchBar/>
        </div>
      </div>
    </>
  )
}

