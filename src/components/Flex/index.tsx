import { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
type AlignItems =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
type Gap = 'sm' | 'md' | 'lg'

type FlexProps = {
  direction?: Direction
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  vGap?: Gap
  hGap?: Gap
  className?: string
}

export const Flex: FC<FlexProps> = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  vGap,
  hGap,
  className,
  children,
}) => {
  const classnames = clsx(
    styles.flex,
    {
      [styles[`flex__direction--${direction}`]]: direction,
      [styles[`flex__justifyContent--${justifyContent}`]]: justifyContent,
      [styles[`flex__alignItems--${alignItems}`]]: alignItems,
      [styles[`flex__vGap--${vGap}`]]: vGap,
      [styles[`flex__hGap--${hGap}`]]: hGap,
    },
    className
  )

  return <div className={classnames}>{children}</div>
}
