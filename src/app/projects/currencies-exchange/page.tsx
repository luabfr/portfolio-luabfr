"use client"
import React, { FC, useState } from 'react'
import { Provider } from 'react-redux';
import { StyledApp, Container } from './Components/CustomStyledComponents/CustomStyledComponents';
import ButtonsActions from './Components/ButtonsActions';
import SetupStates from './Components/SetupStates';
import CurrencyList from './Components/CurrencyList/CurrencyList';
import store from '@/app/store/store';
import { Button } from './Components/CustomStyledComponents/CustomStyledComponents';

const App: FC = ()=> {

  const [sliceLength, setSliceLength] = useState(4);
  const handleSliceLength = () => {
    setSliceLength(sliceLength + 4);
  };
  return (    
    <Provider store={store}>
      <SetupStates /> 
      <StyledApp>
        <Container>


          <ButtonsActions />

          <Button onClick={handleSliceLength}>
            {"Show me more"}
          </Button>

          <CurrencyList sliceLength={sliceLength}/>


        </Container>
        
      </StyledApp>
    </Provider>
  );
}

export default App;
