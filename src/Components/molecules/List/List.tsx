import travelItems from "../../../data/travelData";
import Item from "../../atoms/Item/Item";
import "./List.css";

const List = (): React.JSX.Element => {
    return (
        <>
            <ul className="list">
                {travelItems.map((item) => (
                    <Item
                        description={item.description}
                        quantity={item.quantity}
                        packed={item.packed}
                        key={item.id}
                    />
                ))}
            </ul>
        </>
    );
};

export default List;
