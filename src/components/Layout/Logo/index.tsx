import styles from './styles.module.scss'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>Posted</a>
    </Link>
  )
}
