import * as React from "react";

export default function TaskConditionalRenderingTernary() {
    const meatballs = {name: 'Meatballs', description: 'Meatballs recipe here'};
    const spaghetti = {name: 'Spaghetti', description: 'Spaghetti recipe here'};
    return (
        <div>
            <Recipe food={meatballs} isEdit={false}/>
            <hr />
            <Recipe food={spaghetti} isEdit={true}/>
        </div>
    )
}

const Recipe = ({food, isEdit}) => {
    return (
        <div>
            {food.name}

            {isEdit ? (
                <EditRecipe food={food}/>
            ) : (
                <ShowRecipe food={food}/>
            )}
        </div>
    )
}

function EditRecipe({food}) {
    return (
        <div>
            <h3>Editing: {food.name}</h3>
            <input type="text" defaultValue={food.name}/>
            <button>Save</button>
        </div>
    );
}

function ShowRecipe({food}) {
    return (
        <div>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
        </div>
    );
}
