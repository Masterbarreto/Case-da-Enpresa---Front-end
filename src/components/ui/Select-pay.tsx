import { ReactNode } from "react";
import "../../styles/Select-pay.css"; // Importando o CSS

interface SelectPayProps {
    label: string;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
    isSelected?: boolean;
  }
  
  export default function SelectPay({ label, icon, className, onClick, isSelected }: SelectPayProps) {
    return (
      <div 
        className={`select-pay ${isSelected ? "selected" : ""} ${className || ""}`} 
        onClick={onClick}
      >
        {icon && <span className="icon">{icon}</span>}
        <span className="label">{label}</span>
      </div>
    );
  }