type DropDownProps = {
    options: string[];
    onChange: (value: string) => void;
};

const DropDown = ({ options, onChange }: DropDownProps): React.JSX.Element => {
    return (
        <div>
            <select onChange={(e) => onChange(e.target.value)}>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;
