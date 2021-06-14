import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000</strong>
            </div>

            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>-R$500</strong>
            </div>

            <div className="hightlight-backgroud">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$500</strong>
            </div>

        </Container>
    );
}