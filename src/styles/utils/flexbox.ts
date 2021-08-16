import { css } from 'styled-components'

type FlexboxValue =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'stretch'

export function flexbox(
  jc: FlexboxValue = 'center',
  ai: FlexboxValue = 'center'
) {
  return css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
  `
}

export function inlineFlexbox(
  jc: FlexboxValue = 'center',
  ai: FlexboxValue = 'center'
) {
  return css`
    display: inline-flex;
    justify-content: ${jc};
    align-items: ${ai};
  `
}
