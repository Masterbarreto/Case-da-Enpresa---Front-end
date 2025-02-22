import "../styles/homePages.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para mudar de tela
import { Container } from "../components/ui/BoxInputs";

export function HomePages() {
    const steps = ["Dados pessoais", "Veículo", "Documentos"];
    const buttonLabels = ["Próximo", "Próximo", "Pagamento"]; // Textos do botão para cada etapa
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate(); // Hook para mudar de página

    // Estados para os inputs
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [modeloVeiculo, setModeloVeiculo] = useState("");
    const [anoVeiculo, setAnoVeiculo] = useState("");
    const [placaVeiculo, setPlacaVeiculo] = useState("");

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            //setCurrentStep(currentStep - 2);
             navigate("/Pagamento"); // Altere para a rota desejada
        }
    };

    return (
        <>
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

            {/* Seção de Inputs */}
            <div className="conteudo">
                <Container>
                    {/* Passos com sublinhado laranja */}
                    <div className="step-container">
                        {steps.map((step, index) => (
                            <p key={index} className={currentStep === index ? "active" : ""}>
                                {step}
                            </p>
                        ))}
                    </div>

                    {/* Inputs diferentes para cada etapa */}
                    {currentStep === 0 && (
                        <>
                            <h2 className="box-title">Dados Pessoais</h2>

                            <p className="box-text">Data de Nascimento:</p>
                            <input
                                type="date"
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
                                className="input"
                            />

                            <p className="box-text">CPF:</p>
                            <input
                                type="text"
                                placeholder="XXX.XXX.XXX-XX"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                className="input"
                            />

                            <p className="box-text">E-mail:</p>
                            <input
                                type="email"
                                placeholder="Exemplo@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input"
                            />

                            <p className="box-text">Celular:</p>
                            <input
                                type="text"
                                placeholder="XXXX XXXX"
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)}
                                className="input"
                            />
                        </>
                    )}

                    {currentStep === 1 && (
                        <>
                            <h2 className="box-title">Dados do Veículo</h2>
                            <p className="box-text">Modelo:</p>
                            <input
                                type="text"
                                value={modeloVeiculo}
                                onChange={(e) => setModeloVeiculo(e.target.value)}
                                className="input"
                            />
                            <p className="box-text">Ano:</p>
                            <input
                                type="text"
                                value={anoVeiculo}
                                onChange={(e) => setAnoVeiculo(e.target.value)}
                                className="input"
                            />
                            <p className="box-text">Placa:</p>
                            <input
                                type="text"
                                value={placaVeiculo}
                                onChange={(e) => setPlacaVeiculo(e.target.value)}
                                className="input"
                            />
                        </>
                    )}

                    {currentStep === 2 && (
                        <>
                            <h2 className="box-title">Documentos</h2>
                            <input type="file" className="input" />
                            <input type="file" className="input" />
                        </>
                    )}

                    {/* Botão para avançar */}
                    <button className="btn" onClick={handleNextStep}>
                        {buttonLabels[currentStep]} {/* Texto do botão baseado no passo atual */}
                    </button>
                </Container>
            </div>
        </>
    );
}