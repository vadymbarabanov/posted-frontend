import { FC } from 'react'
import styles from './styles.module.scss'

export const Container: FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
