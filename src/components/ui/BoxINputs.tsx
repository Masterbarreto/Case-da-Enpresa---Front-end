import '/src/styles/Container.css';

interface ContainerProps {
    children: React.ReactNode;
}

export function Container({ children }: ContainerProps) { 
    return (
        <div className="container-box"> 
            {children}
        </div>
    );
}
