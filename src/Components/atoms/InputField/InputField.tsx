type InputFieldProps = {
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
    placeholder,
    type,
    value,
    onChange,
}: InputFieldProps): React.JSX.Element => {
    return (
        <div className="input-field">
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
