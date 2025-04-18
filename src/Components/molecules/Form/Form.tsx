import { useState } from "react";
import Button from "../../atoms/Button/Button";
import DropDown from "../../atoms/DropDown/DropDown";
import InputField from "../../atoms/InputField/InputField";
import "./Form.css";

const Form = (): React.JSX.Element => {
    const [description, setDescription] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__content">
                <h3 className="form__title">What do you need for your trip?</h3>
                <DropDown
                    options={Array.from({ length: 20 }, (_, i) => i + 1)}
                    onChange={() => {}}
                />
                <InputField
                    placeholder={"Skippy ball"}
                    type={"text"}
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <Button label={"Add"} disabled={false} />
            </div>
        </form>
    );
};

export default Form;
