import * as React from "react";

const users = [
    // {id: '1', firstName: 'Robin', lastName: 'Wieruch'},
    // {id: '2', firstName: 'Dennis', lastName: 'Wieruch'},
]

export default function TaskConditionalRenderingIfElse() {

    return (
        <div>
            <h1>Hello Conditional Rendering</h1>
            <List list={users} />
        </div>
    )
}

const List = ({ list }) => {
    if (!list) {
        return null;
    }

    if (!list.length) {
        return <p>Sorry, the list is empty.</p>
    } else {
        return (
            <ul>
                {list.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        )
    }
}

const Item = ({ item }) => {
    return (
        <li>
            {item.firstName} {item.lastName}
        </li>
    )
}