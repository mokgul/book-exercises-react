import * as React from "react";

export default function TaskReactList() {
    const initialList = [
        { id: 'a', name: 'Learn React' },
        { id: 'b', name: 'Learn GraphQL' }
    ]

    const [list, setList] = React.useState(initialList)

    const handleClick = event => {
        setList(list.slice().reverse())
    }

    return (
        <div>
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        <label>
                            <input type="checkbox" />
                            {item.name}
                        </label>
                    </li>
                ))}
            </ul>

            <button type="button" onClick={handleClick}>Reverse List</button>
        </div>
    )
}