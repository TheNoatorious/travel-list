type InputFieldProps = {
    label: string;
    type: string;
};

const InputField = ({ label, type }: InputFieldProps): React.JSX.Element => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input type={type} />
        </div>
    );
};

export default InputField;
