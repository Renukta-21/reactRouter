import { useNavigate, useParams } from "react-router"
import {recipes} from '../mocks/recipes.json'

 const RecipePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const recipe = recipes.find((r) => r.id === Number(id))
    if (!recipe) {
      return <p>Recipe not found!</p>
    }
    return (
      <div>
        <button onClick={() => navigate(`/categories/${recipe.category}`)}>Back</button>
        <h2>Recipe: {recipe.title}</h2>
        <b>Description: {recipe.description}</b>
        <div style={{ display: 'flex', gap: '100px', marginTop: '15px' }}>
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

  export default RecipePage