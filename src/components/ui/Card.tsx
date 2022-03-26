interface Props {
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={`rounded shadow ${className}`}>{children}</div>;
};

export default Card;
