import styled from 'styled-components';
import AccommodationsOptions from './AccommodationOptions';

function Accommodation() {
  return (
    <AccommodationsContent>
      <HotelTitle>Ótimo! Agora escolha sua modalidade de hospedagem</HotelTitle>
      <AccommodationsOptions />
    </AccommodationsContent>
  );
}

const AccommodationsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HotelTitle = styled.h3`
  margin-top: 44px;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: #8E8E8E;
`;

export default Accommodation;
