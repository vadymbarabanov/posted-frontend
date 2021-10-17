import { FC } from 'react'
import styles from './styles.module.scss'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  )
}
