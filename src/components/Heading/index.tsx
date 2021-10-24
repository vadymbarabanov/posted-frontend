import { FC } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { Margins } from 'types/styles'

type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3'
  fontSize?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  mt?: Margins
  mr?: Margins
  mb?: Margins
  ml?: Margins
}

export const Heading: FC<HeadingProps> = ({
  variant,
  fontSize = 'md',
  children,
  align = 'left',
  mt,
  mr,
  mb,
  ml,
}) => {
  const classnames = clsx(styles.heading, {
    [styles[`heading__fontSize--${fontSize}`]]: fontSize,
    [styles[`heading__align--${align}`]]: align,
    [styles[`mt--${mt}`]]: mt,
    [styles[`mr--${mr}`]]: mr,
    [styles[`mb--${mb}`]]: mb,
    [styles[`ml--${ml}`]]: ml,
  })

  switch (variant) {
    case 'h1': {
      return <h1 className={classnames}>{children}</h1>
    }

    case 'h2': {
      return <h2 className={classnames}>{children}</h2>
    }

    case 'h3': {
      return <h3 className={classnames}>{children}</h3>
    }
  }
}
