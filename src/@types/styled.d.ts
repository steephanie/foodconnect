import 'styled-components'
import { colors } from '../theme/colors'
import { sizes } from '../theme/sizes'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors
    sizes: typeof sizes
  }
}
