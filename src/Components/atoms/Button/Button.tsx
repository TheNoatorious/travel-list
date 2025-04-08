import "./Button.css";
type ButtonProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
};

const Button = ({ label, onClick, disabled = true }: ButtonProps) => {
    return (
        <button
            className="btn btn--primary"
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
