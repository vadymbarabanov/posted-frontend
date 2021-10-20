import React, { FC, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  primary = false,
  disabled = false,
  children,
  className,
  ...props
}) => {
  const classnames = clsx(styles.button, className, {
    [styles.primary]: primary,
    [styles.disabled]: disabled,
  })

  return (
    <button className={classnames} {...props}>
      {children}
    </button>
  )
}
