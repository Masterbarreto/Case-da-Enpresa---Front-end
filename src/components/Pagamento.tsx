import { useState } from "react";
import { Container } from "./ui/BoxInputs";
import "../styles/Pagamento.css";
import ValorService from "../components/ui/ValorService";
import BoxPay from "../components/ui/BoxPay";
import { PagarService } from "./scripts/Payment.js";

// Importações externas
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function Pagamento() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handleConfirmPayment = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };

  const handlePay = () => {
    if (selectedPayment) {
      PagarService(selectedPayment); // Chama a função pay com o método de pagamento selecionado
      console.log("Pagamento realizado com:", selectedPayment);
    } else {
      console.log("Nenhum método de pagamento selecionado.");
    }
  };

  return (
    <div>
      {/* Cabeçalho */}
      <div className="cabecalho">
        <img src="/Icon.svg" alt="Logo" className="logo" />
        <nav className="cabecalho-menu">
          <p>Simulação</p>
          <p>Proposta</p>
          <p>Análise de créditos</p>
          <p>Contratos</p>
          <p>Assinaturas</p>
          <Link to="/" className="menu-link">
            <p>Pagamentos</p>
          </Link>
        </nav>
      </div>

      {/* Seção de Dados */}
      <Container className="home-container">
        <p className="box-titles">Pagamento do Seguro</p>
        <Container className="container-produto">
          <div className="titulo-container">
            <Link to="/" className="menu-link">
              <ArrowLeft size={24} color="#c75b18" strokeWidth={2} />
            </Link>
            <p className="box-text">Detalhes de Produto</p>
          </div>

          <div className="box-preco">
            <p className="box-assinatura">Valor de assinatura</p>
            <div className="box-valor-container">
              <p className="box-valor">R$ 200,00</p>
              <p className="box-mes">
                <span className="por">Por</span>
                <span className="mes">Mês</span>
              </p>
            </div>
            <ValorService />
          </div>
        </Container>

        {/* Adicionando a forma de pagamento */}
        <BoxPay onConfirmPayment={handleConfirmPayment} />

        {/* Botão de Pagamento */}
        <button onClick={handlePay} className="botao-pagar">
          Pagar
        </button>
      </Container>
    </div>
  );
}
