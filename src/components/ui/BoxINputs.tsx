import '/src/styles/Container.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`container-box ${className || ''}`}>
      {children}
    </div>
  );
}
