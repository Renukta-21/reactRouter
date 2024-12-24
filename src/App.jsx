import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  )
}
const Recipes = () => {
  return (
    <div>
      <h2>Recipes App</h2>
    </div>
  )
}

export default App
