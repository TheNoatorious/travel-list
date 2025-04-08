import Form from "../../molecules/Form/Form";
import List from "../../molecules/List/List";
import "./PackingList.css";

const PackingList = (): React.JSX.Element => {
    return (
        <div className="packing-list">
            <Form />
            <List />
        </div>
    );
};

export default PackingList;
