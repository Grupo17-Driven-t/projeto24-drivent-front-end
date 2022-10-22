import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../contexts/UserContext';
import AccommodationContext from '../../contexts/AccommodationOption';

function AccommodationsOptions() {
  const [ hotelPrice, setHotelPrice ] = useState(undefined);
  const [ selectedAccommodation, setSelectedAccomodation ] = useState(null);
  const { userData: user } = useContext(UserContext);
  const { setAccomodationOption } = useContext(AccommodationContext);

  useEffect(async() => {
    const URL_API = process.env.REACT_APP_API_BASE_URL;
    const token = user.token;

    const config = {
      headers: {
        Authorization: `Bearer ${ token }`
      }
    };

    try {
      const response = await axios.get(`${URL_API}/hotels/price`, config);

      const formatedPrice = Number(response.data.price) / 100;
      setHotelPrice(formatedPrice);
    } catch {
      alert('Não foi possível pegar o preço do hotel');
    };
  }, []);

  function isOptionAccommodationSelected(typeAccommodation) {
    return typeAccommodation === selectedAccommodation;
  }

  function selectAccommodation(currentSelection) {
    if(currentSelection === selectedAccommodation) {
      setSelectedAccomodation(null);
      setAccomodationOption({ type: null, price: null });
    } else if(currentSelection === 'noneHotel') {
      setSelectedAccomodation(currentSelection);
      setAccomodationOption({ type: 'noneHotel', price: null });
    } else {
      setSelectedAccomodation(currentSelection);
      setAccomodationOption({ type: 'withHotel', price: hotelPrice });
    }
  }

  return (
    <OptionsContainer >
      <OptionContainer onClick={ () => selectAccommodation('noneHotel') } selected={ isOptionAccommodationSelected('noneHotel') } >
        <p>Sem Hotel</p>
        <p><span>+ R$ 0</span></p>
      </OptionContainer>
      <OptionContainer onClick={ () => selectAccommodation('withHotel') } selected={ isOptionAccommodationSelected('withHotel') } >
        <p>Com Hotel</p>
        <p><span> { hotelPrice ? `+ R$ ${hotelPrice.toFixed(2)}` : 'Valor não encontrado' }</span></p>
      </OptionContainer>
    </OptionsContainer>
  );
}

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 145px;
  margin-right: 24px;
  background-color: ${(props) => props.selected ? '#FFEED2' : 'transparent' };
  border: ${(props) => props.selected ? 'none' : '1px solid #CECECE' };
  border-radius: 20px;
  -webkit-transition: background-color 250ms linear;
  -ms-transition: background-color 250ms linear;
  transition: background-color 250ms linear;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #454545;
    margin-top: 4px;
  }

  span {
    font-size: 14px;
    color: #898989;
  }
`;

export default AccommodationsOptions;
