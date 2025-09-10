export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const mapped_ingredients = ingredients.map(x => <li> {x} </li>);

    function onSubmitEvent(event) { /* event is the native web event passed on*/
        event.preventDefault() // stops the page from adding stuff to URL & refreshing
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        mapped_ingredients.concat(<li> {newIngredient} </li>)
        console.log(newIngredient)
    }

    return (
        /* Form That Triggers onSubmitEvent when it's clicked */
        <main>
            
            <form className="add-ingredient-form" onSubmit={onSubmitEvent}>
                <input 
                    aria-label="Add Ingredient"
                    type="text"
                    placeholder="e.g. Oregano"
                    name="ingredient"
                />
                <button >Add Ingredient</button> 
            </form>
            <ul>
                {mapped_ingredients}
            </ul>
        </main>
    )
}