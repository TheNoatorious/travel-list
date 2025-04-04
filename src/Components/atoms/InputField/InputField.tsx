type InputFieldProps = {
    placeholder: string;
    type: string;
};

const InputField = ({
    placeholder,
    type,
}: InputFieldProps): React.JSX.Element => {
    return (
        <div className="input-field">
            <input placeholder={placeholder} type={type} />
        </div>
    );
};

export default InputField;
