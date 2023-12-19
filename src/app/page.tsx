"use client"
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppView from './components/AppView/AppView';
import { MainX } from './components/page.styled';
import Preloader from './components/Preloader/Preloader';




export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (loading != false){
      setLoading(false);
    }    
  }, []);


  return (
    <Provider store={store}>
      <MainX >
        {loading ? (
          <Preloader/>
        ) : (
          <AppView/>          
        )}
      </MainX>
    </Provider>
  )
  
}
