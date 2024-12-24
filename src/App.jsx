import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router'
import { categories, recipes } from './mocks/recipes.json'

function App() {
  return (
    <BrowserRouter>
      <h1>Recipes App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  )
}

const HomePage = () => {
  return (
    <div>
      {categories.map((c) => (
        <div key={c.id}>
          <Link to={`/categories/${c.name}`}>{c.name}</Link>
        </div>
      ))}
    </div>
  )
}

const CategoryPage = () => {
  const { categoryName } = useParams()

  const categoryRecipes = recipes.filter((r) => r.category === categoryName)

  return (
    <div>
      <h2>{categoryName} Category</h2>
      <div>
        {categoryRecipes.map((r) => (
          <Link key={r.id} to={`/recipe/${r.id}`}>
            <div
              style={{
                border: '1px solid white',
                margin: '10px 0px',
                padding: '20px',
              }}
            >
              <h3>Recipe: {r.title}</h3>
              <p>{r.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const RecipePage = () => {
  const { id } = useParams()
  const recipe = recipes.find((r) => r.id === Number(id))

  return (
    <div>
      <h2>Recipe: {recipe.title}</h2>
      <b>Description: {recipe.description}</b>
      <div style={{display:'flex', gap:'100px', marginTop:'15px'}}>
        <div>
          <p>Ingredients:</p>
          <ul>
            {recipe.ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Instructions:</p>
          <ul>
            {recipe.instructions.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default App
