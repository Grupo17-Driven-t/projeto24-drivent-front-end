import AccommodationsOptions from '../../../components/Payment/Accommodation';
import { useState } from 'react';
import styled from 'styled-components';

export default function Payment() {
  const [choosed, setChoosed] = useState(true);

  return (
    <Container>
      <h2>Ingresso e pagamento</h2>
      <AccommodationsOptions showAccommodations={ false } />
      <h3>{choosed ? ('Ingresso escolhido') : ('Primeiro, escolha sua modalidade de ingresso')}</h3>

      <ChoosedTicket>
        <h4>Presencial + Com Hotel</h4>
        <h5>R$600</h5>
      </ChoosedTicket>

      <h3>Pagamento</h3>

      <Finish>FINALIZAR PAGAMENTO</Finish>
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Roboto';
  h2 {
    font-size: 34px;
    color: #000;
  }

  h3 {
    font-size: 20px;
    color: #8e8e8e;
    margin-top: 30px;
  }
`;
const ChoosedTicket = styled.div`
  width: 290px;
  height: 108px;
  background-color: rgba(255, 238, 210, 1); 
  display: flex; 
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  margin-top: 17px;
  font-family: 'Roboto';
  font-weight: 400;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 30px;

  h4 { 
    color: rgba(69, 69, 69, 1);
    font-size: 16px; 
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0em;
    margin-bottom: 8px; 
  }

  h5 { 
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0em;
    color: rgba(137, 137, 137, 1);
  }
`;
const Finish = styled.div`
  width: 182px;
  height: 37px;
  display: flex; 
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  background-color: rgba(224, 224, 224, 1);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: rgba(0, 0, 0, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  border: none;

  &:hover{ 
    cursor: pointer; 
  }

  &:active {  
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

