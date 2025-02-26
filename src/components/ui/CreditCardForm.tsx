
import React, { useState } from "react";

interface CreditCardFormProps {
  onSubmit: (cardInfo: { number: string; name: string; expiry: string; cvv: string }) => void;
  onCancel: () => void;
}

const CreditCardForm: React.FC<CreditCardFormProps> = ({ onSubmit, onCancel }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ number: cardNumber, name: cardName, expiry: expiryDate, cvv });
  };

  return (
    <div className="modal">
      <h2>💳 Informações do Cartão</h2>
      <form onSubmit={handleSubmit}>
        <label>Número do Cartão:</label>
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />

        <label>Nome no Cartão:</label>
        <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} required />

        <label>Data de Validade:</label>
        <input type="text" placeholder="MM/AA" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />

        <label>CVV:</label>
        <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} required />

        <button type="submit">Confirmar Pagamento</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default CreditCardForm;
