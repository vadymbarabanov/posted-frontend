export type Margins = 'sm' | 'md' | 'lg' | 'full' | 'auto'

export type MarginsSet = {
  mt?: Margins
  mr?: Margins
  mb?: Margins
  ml?: Margins
}

export type BoxSizes = 'full' | 'auto' | 'screen'

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

export type Gap = 'sm' | 'md' | 'lg'

export type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

export type AlignItems =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
