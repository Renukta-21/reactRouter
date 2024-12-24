import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router'

import RecipePage from './components/RecipePage'
import CategoryPage from './components/CategoryPage'
import HomePage from './components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <h1>Recipes App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  )
}






export default App
