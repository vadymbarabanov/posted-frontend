import { FC } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3'
  fontSize?: 'sm' | 'md' | 'lg'
}

export const Heading: FC<HeadingProps> = ({
  variant,
  fontSize = 'md',
  children,
  ...props
}) => {
  const classnames = clsx({
    [styles.sm]: fontSize === 'sm',
    [styles.md]: fontSize === 'md',
    [styles.lg]: fontSize === 'lg',
  })

  switch (variant) {
    case 'h1': {
      return (
        <h1 className={classnames} {...props}>
          {children}
        </h1>
      )
    }

    case 'h2': {
      return (
        <h2 className={classnames} {...props}>
          {children}
        </h2>
      )
    }

    case 'h3': {
      return (
        <h3 className={classnames} {...props}>
          {children}
        </h3>
      )
    }
  }
}
