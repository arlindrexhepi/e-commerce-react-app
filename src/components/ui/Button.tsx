interface Props {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
};

export default Button;
