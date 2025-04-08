import "./Item.css";

type ItemProps = {
    description: string;
    quantity: number;
    packed: boolean;
};

const Item = ({
    description,
    quantity,
    packed,
}: ItemProps): React.JSX.Element => {
    return (
        <li className="list__item">
            <div
                className={`list__item-description ${
                    packed ? "list__item-description--packed" : ""
                }`}
            >
                {description} {quantity}
            </div>
            <button className="btn btn--icon btn--delete">❌</button>
        </li>
    );
};

export default Item;
