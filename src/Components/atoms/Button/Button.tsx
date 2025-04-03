import "./Button.css";
type ButtonProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
};

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button className="btn btn--primary" onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
