import { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import {
  AlignItems,
  BoxSizes,
  Direction,
  Gap,
  JustifyContent,
  MarginsSet,
} from 'types/styles'

type FlexProps = {
  direction?: Direction
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  vGap?: Gap
  hGap?: Gap
  width?: BoxSizes
  height?: BoxSizes
  className?: string
} & MarginsSet

export const Flex: FC<FlexProps> = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  vGap,
  hGap,
  mt,
  mr,
  mb,
  ml,
  width,
  height,
  className,
  children,
}) => {
  const classnames = clsx(styles.flex, className, {
    [styles[`flex__direction--${direction}`]]: direction,
    [styles[`flex__justifyContent--${justifyContent}`]]: justifyContent,
    [styles[`flex__alignItems--${alignItems}`]]: alignItems,
    [styles[`flex__vGap--${vGap}`]]: vGap,
    [styles[`flex__hGap--${hGap}`]]: hGap,
    [styles[`mt--${mt}`]]: mt,
    [styles[`mr--${mr}`]]: mr,
    [styles[`mb--${mb}`]]: mb,
    [styles[`ml--${ml}`]]: ml,
    [styles[`width--${width}`]]: width,
    [styles[`height--${height}`]]: height,
  })

  return <div className={classnames}>{children}</div>
}
