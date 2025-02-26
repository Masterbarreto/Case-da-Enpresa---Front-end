import '../../styles/BoxPay.css';
import { useState } from "react";
import SelectPay from "../ui/Select-pay.tsx";
import { CreditCard , Scroll  } from "lucide-react";


interface BoxPayProps {
  onConfirmPayment: (paymentMethod: string) => void; // Nova prop
}

export default function BoxPay({ onConfirmPayment }: BoxPayProps) {
  
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  // Função para salvar o método de pagamento selecionado
  const handleSelectPayment = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
    onConfirmPayment(paymentMethod);
  };

  return (
    <div className="container-pay">
      <p className="text-pay">Forma de pagamento</p>

      <div className="pay-form">
        <SelectPay
          label="CARTÃO"
          onClick={() => handleSelectPayment("Cartão")}
          isSelected={selectedPayment === "Cartão"}
          icon={<CreditCard size={24} />}
          className="selec-boleto"
        />

        <SelectPay
          label="BOLETO"
          onClick={() => handleSelectPayment("Boleto")}
          isSelected={selectedPayment === "Boleto"}
          icon={<Scroll size={24} />}
          className="selec-boleto"
        />

        <SelectPay
          label="PAYPAL"
          onClick={() => handleSelectPayment("Paypal")}
          isSelected={selectedPayment === "Paypal"}
          className="selec-boleto"
        />

        <SelectPay
          label="PIX"
          onClick={() => handleSelectPayment("PIX")}
          isSelected={selectedPayment === "PIX"}
          className="selec-boleto"
        />
      </div>
    </div>
  );
}