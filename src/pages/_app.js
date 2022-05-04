import 'styles/globals.css'
import AppContext from 'context/AppContext';
import useInitialStat from 'hooks/useInitialState';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialStat();
  return (
    <AppContext.Provider value={initialState} >
      <Component {...pageProps} />
    </AppContext.Provider>
  ) 
}

export default MyApp
