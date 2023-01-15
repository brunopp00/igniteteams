import 'styled-components'
import themes from 'src/themes'

declare module 'styled-components' {
    type ThemeType = typeof themes;

    export interface DefaultTheme extends ThemeType { }
}