import Button from "../../atoms/Button/Button";
import InputField from "../../atoms/InputField/InputField";

const Form = (): React.JSX.Element => {
    return (
        <div className="container">
            <InputField placeholder={"Item"} type={"text"} />
            <Button label={"Add"} disabled={false} />
        </div>
    );
};

export default Form;
