import { FC } from 'react'
import styles from './styles.module.scss'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Container } from './Container'

export const Layout: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Container>
        <main className={styles.content}>{children}</main>
      </Container>
      <Footer />
    </div>
  )
}
