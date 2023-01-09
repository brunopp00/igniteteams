import { Groups } from './src/screens/Groups';
import { ThemeProvider } from 'styled-components'

import theme from './src/themes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups/>
    </ThemeProvider>
  );
}
