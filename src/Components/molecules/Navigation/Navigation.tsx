import Button from "../../atoms/Button/Button";
import InputField from "../../atoms/InputField/InputField";

const Navigation = () => {
    return (
        <>
            <InputField placeholder={"Item"} type={"text"} />
            <Button label={"Add"} disabled={false} />
        </>
    );
};

export default Navigation;
