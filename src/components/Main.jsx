import React from 'react'
export default function Main() {
    const [ingredientArray, updateArray] = React.useState([<ul></ul>])
    function onSubmitEvent(event) { /* event is the native web event passed on*/
        event.preventDefault() // stops the page from adding stuff to URL & refreshing
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        let updatedArray = ingredientArray.concat(<li> {newIngredient} </li>)
        updateArray(updatedArray)
        
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
                <button onSubmit={onSubmitEvent}> Add Ingredient </button>
            </form>
            <ul>
                {ingredientArray}
            </ul>
        </main>
    )
}