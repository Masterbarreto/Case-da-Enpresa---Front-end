import { Container } from "../components/ui/BoxINputs";
import "../styles/Pagamento.css";
import ValorService from "../components/ui/ValorService";

//import externos 
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


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
                <Link to="/" className="menu-link">
                    <p>Pagamentos</p>
                </Link>
            </nav>
        </div>
        {/* Seção de Dados*/}
        <Container className="home-container">
            <p className="box-titles"> Pagamento do Seguro </p>
            <Container className="container-produt">
                <div className="Titulo-conteiner">
                        <Link to="/" className="menu-link">
                        <ArrowLeft size={24} color="#c75b18" strokeWidth={2} />
                        </Link>
                        <p className="box-text">Detalhes de Produto </p>
                </div>

                <div className="Box-Preço">
                    <p className="box-Assinatura"> Valor de assinatura </p>
                    <div className="box-valor-container">
                        <p className="box-valor"> R$ 200,00 </p>
                        <p className="box-mes">
                            <span className="por">Por</span>  
                            <span className="mes">Mês</span>
                        </p>
                    </div>
                    <ValorService/>
                </div>

            </Container>
        </Container>
    </div>
    );
}