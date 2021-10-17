import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
  label?: string
  helperText?: string
}

export const TextField: FC<TextFieldProps> = ({
  name,
  label,
  helperText,
  invalid = false,
  ...props
}) => {
  const wrapperClassnames = clsx(styles.wrapper, {
    [styles.invalid]: invalid,
  })

  return (
    <div className={wrapperClassnames}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input name={name} className={styles.textfield} {...props} />
      {helperText && (
        <label className={styles.label} htmlFor={name}>
          {helperText}
        </label>
      )}
    </div>
  )
}
