import styled from 'styled-components';
import { useState, useContext } from 'react';
import TicketContext from '../../../contexts/TicketContext';

export default function Button({ type }) {
  const [selected, setSelected] = useState(false);
  const { userTicket, setUserTicket } = useContext(TicketContext);
  function isSelected() {
    setSelected(!selected);
  }

  function setTicket() {
    if (selected === true && type === 'inperson') {
      setUserTicket({ ...userTicket, type: 'inperson' });
    }
    if (selected === true && type === 'online') {
      setUserTicket({ ...userTicket, type: 'online' });
    }
  }

  return (
    <Container onClick={isSelected} selected={selected}>
      <div>{type === 'inperson' ? <h4>Presencial</h4> : <h4>Online</h4>}</div>
      <div>{type === 'inperson' ? <p>R$ 250</p> : <p>R$ 100</p>}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-right: 15px;
  background-color: ${(props) => (props.selected === true ? '#ffeed2' : '000')};

  h4 {
    color: #454545;
    font-size: 16px;
  }

  p {
    color: #898989;
    font-size: 14px;
    margin-top: 5px;
  }
`;
