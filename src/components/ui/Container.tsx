type ContainerProps = {
  className?: string;
  key?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Container;
