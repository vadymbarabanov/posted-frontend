import { Logo } from '../Logo'
import { Container } from '../Container'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <div>some footer content</div>
        </div>
      </Container>
    </div>
  )
}
