import AccommodationsOptions from '../../../components/Payment/Accommodation';
import { useState } from 'react';
import styled from 'styled-components';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import { creditCard } from '../../../services/payment';
import useToken from '../../../hooks/useToken';

export default function Payment() {
  const [choosed, setChoosed] = useState(true);
  const [ticketInfo, setInfo] = useState({ type: 'Presencial + Com Hotel', price: '600' });
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const token = useToken();

  function cardNumber(event) {
    if(event.length === 4) {
      event+= ' ';
      setNumber(event);
    }else if(event.length === 9) {
      event+= ' ';
      setNumber(event);
    }else if(event.length === 14) { 
      event+= ' ';
      setNumber(event);
    } else setNumber(event);
  };

  function securityCode(event) { 
    const type = Number(event);
    // eslint-disable-next-line no-console
    console.log(type);

    if(type !== isNaN) setCvc(event);
  }

  function validThru(event) { 
    if(event.length === 2) {
      event+='/';
      setExpiry(event);
    } else setExpiry(event);
  }

  async function submit() { 
    const cardInfo = {
      number,
      name, 
      validDate: expiry,
      cvc
    };

    try {
      const promise = await creditCard(cardInfo, token);
      setNumber('');
      setName('');
      setExpiry('');
      setCvc('');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  return (
    <Container>
      <h2>Ingresso e pagamento</h2>
      <AccommodationsOptions showAccommodations={ false } />
      <h3>{choosed ? ('Ingresso escolhido') : ('Primeiro, escolha sua modalidade de ingresso')}</h3>

      {choosed ? (
        <ChoosedTicket>
          <h4>{ticketInfo.type}</h4>
          <h5>R${ticketInfo.price}</h5>
        </ChoosedTicket>
      ) : ('') }

      <h3>Pagamento</h3>
      
      <Card>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused=''
          name={name}
          number={number}
          rccs-background-transition=  '0.5s ease-out'
          rccs-animate-background= 'true'
        />
        <form>
          <CardInfo>
            <input
              type="tel"
              placeholder="Card Number"
              value={number}
              onChange={event => cardNumber(event.target.value)}
              onFocus=''
              maxlength="19"
              required
            />
            <h6>Ex: 49...,51...,36...,37...</h6>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={event => setName(event.target.value)}
              onFocus=''
              required
            />
            <ShortInputs>
              <input
                type="text"
                placeholder="Valid Thru"
                value={expiry}
                onChange={event => validThru(event.target.value)}
                onFocus=''
                maxlength="5"
                required
              />
              <input
                id='cvc'
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={event => securityCode(event.target.value)}
                onFocus=''
                maxlength="3"
                required
              />
            </ShortInputs>
          </CardInfo>
        </form>
      </Card>

      <Finish onClick={submit}>FINALIZAR PAGAMENTO</Finish>
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

  h6 { 
    margin: 8px 0px 10px 3px;
    color: #B3B4B4;
    font-size: 18px
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
const Card = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;

  form { 
    margin-left: 30px;
  }

`;
const CardInfo = styled.div`
  input { 
    width: 270px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #5D5D5D;
    padding-left: 10px;
    font-size: 18px;
  }
`;
const ShortInputs = styled.div`
  margin-top: 10px;
  display: flex;

  input { 
    width: 160px;
  }

  input#cvc { 
    margin-left: 10px;
    width : 100px;
  }
`;

