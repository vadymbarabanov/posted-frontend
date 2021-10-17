import { Button } from 'components/Button'
import { Logo } from 'components/Layout/Logo'
import { FC } from 'react'
import { Container } from '../Container'
import styles from './styles.module.scss'

export const Navbar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <div className={styles.buttonContainer}>
            <Button>Sign In</Button>
            <Button primary>Sign Up</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
