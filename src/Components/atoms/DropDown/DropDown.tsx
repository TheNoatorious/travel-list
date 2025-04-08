type DropDownProps = {
    options: number[];
    onChange: (value: string) => void;
};

const DropDown = ({ options, onChange }: DropDownProps): React.JSX.Element => {
    return (
        <div>
            <select onChange={(e) => onChange(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;
