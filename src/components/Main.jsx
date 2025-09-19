import React from 'react'
export default function Main() {
    const [ingredientArray, updateArray] = React.useState([<ul></ul>])

    function addIngredient(formData) { /* event is the native web event passed on*/
        const newIngredient = formData.get("ingredient")
        let updatedArray = ingredientArray.concat(<li> {newIngredient} </li>)
        updateArray(updatedArray)
    }

    return (
        /* Form That Triggers onSubmitEvent when it's clicked */
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    aria-label="Add Ingredient"
                    type="text"
                    placeholder="e.g. Oregano"
                    name="ingredient"
                />
                <button> Add Ingredient </button>
            </form>
            <ul>
                {ingredientArray}
            </ul>
        </main>
    )
}