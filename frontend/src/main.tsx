import { ChakraProvider } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);
