import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router'
import { categories, recipes } from './mocks/recipes.json'

function App() {
  return (
    <BrowserRouter>
      <h1>Recipes App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/categories/:categoryName' element={<CategoryPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

const HomePage = () => {
  return <div>
    {categories.map(c=>(
      <div key={c.id}>
        <Link to={`/categories/${c.name}`}>{c.name}</Link>
      </div>
    ))}
  </div>
}

const CategoryPage = ()=>{
  const {categoryName} = useParams()

  const categoryRecipes = recipes.filter(r=> r.category === categoryName)

  return(
    <div>
      <h2>{categoryName} Category</h2>
      <ul>
        {categoryRecipes.map(r=> (
          <li key={r.id}>
            <h3>Recipe: {r.title}</h3>
            <b>{r.description}</b>
            <div>
            <p>Ingredients: </p>
            <ul >
              {r.ingredients.map(i=>(
                <li key={i}>{i}</li>
              ))}
            </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
