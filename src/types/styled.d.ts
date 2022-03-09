// import original module declarations
// import "styled-components";
// import { StyleClosetTheme } from "../style-components/theme";
// // and extend them!
// declare module "styled-components" {
//     export interface DefaultTheme extends StyleClosetTheme {}
// }
import { StyleClosetTheme } from "@Styled"

declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends StyleClosetTheme {}
  //   export interface ThemedStyledComponentsModule<T> {
  export interface ThemedStyledComponentsModule {
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass
}
