import { Container } from "../components/ui/BoxINputs";
import "../styles/Pagamento.css";
export function Pagamento() {
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
                    <p>Pagamentos</p>
                </nav>
            </div>

            <Container>
              <p className="box-titles">Pagamentos</p>
            </Container>
            
      </div>
    );
  }
  