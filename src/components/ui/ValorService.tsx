import '/src/styles/ValorService.css';

export default function ValorService() {
    return (
      <div className="container-principal">
        {/* Plano Básico */}
        <div className="plano">
          <div className="plano-esquerda">
            <p className="plano-texto">Plano básico</p>
            <p className="plano-mes">Por Mês</p>
          </div>
          <div className="plano-direita">
            <p className="plano-valor">R$200.00</p>
          </div>
        </div>
  
        <hr className="linha" />
  
        {/* Subtotal e Taxa */}
        <div className="detalhes">
          <div className="detalhes-esquerda">
            <p>Subtotal</p>
            <p>Tax</p>
          </div>
          <div className="detalhes-direita">
            <p>R$200.00</p>
            <p>R$0.00</p>
          </div>
        </div>
  
        <hr className="linha" />
  
        {/* Total a pagar */}
        <div className="total">
          <p className="total-texto">Total due today</p>
          <p className="total-valor">R$200.00</p>
        </div>
      </div>
    );
}