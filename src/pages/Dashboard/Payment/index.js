import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';
import Button from './Button';

export default function Payment() {
  const [tickets, setTickets] = useState([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    const promise = axios.get('http://localhost:4000/tickets', {
      headers: { Authorization: `Bearer ${userData.token}` },
    });
    promise.then((res) => {
      setTickets(res.data);
    });
  });

  return (
    <Container>
      <h2>Ingresso e pagamento</h2>
      <h3>Primeiro, escolha sua modalidade de ingresso</h3>
      <Tickets>
        {tickets.map((t) => (
          <Button type={t.type} />
        ))}
      </Tickets>
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

  display: flex;
  flex-direction: column;
`;

const Tickets = styled.div`
  display: flex;
`;
