import { Groups } from './src/screens/Groups';
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import theme from './src/themes'

export default function App() {

  const [fonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });


  return (
    <ThemeProvider theme={theme}>
      { fonts ? <Groups/> : <Loading/>}
    </ThemeProvider>
  );
}
