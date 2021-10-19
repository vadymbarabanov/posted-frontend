import { FC } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3'
  fontSize?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
}

export const Heading: FC<HeadingProps> = ({
  variant,
  fontSize = 'md',
  children,
  align = 'left',
}) => {
  const classnames = clsx(styles.heading, {
    [styles[`heading__fontSize--${fontSize}`]]: fontSize,
    [styles[`heading__align--${align}`]]: align,
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
