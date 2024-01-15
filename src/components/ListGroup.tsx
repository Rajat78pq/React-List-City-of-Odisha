import { useState } from "react";

interface props {
    items: string[];
    heading: string;
    onSelectItems: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItems }: props) {



    const message = items.length === 0 && <p>no items are found</p>;
    const [selectedIndex, setSelectIndex] = useState(0)
    return (
        <>
            <h1>{heading}</h1>
            {message}
            <ul className="list-group">
                {items.map((items, index) => (<li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} onClick={() => { setSelectIndex(index); onSelectItems(items) }} key={items}>{items}</li>))}
            </ul>
        </>
    );
}

export default ListGroup;