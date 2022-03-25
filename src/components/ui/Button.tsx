interface Props {
  className?: string;
}

const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button className={className} type="button">
      {children}
    </button>
  );
};

export default Button;
