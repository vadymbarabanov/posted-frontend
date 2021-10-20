import { Button } from 'components/Button'
import { Logo } from 'components/Layout/Logo'
import { FC, useState } from 'react'
import { Container } from '../Container'
import styles from './styles.module.scss'
import { Flex } from 'components/Flex'
import { AuthButtons } from './AuthButtons'

export const Navbar: FC = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNavMenu = () => {
    setNavOpen(!navOpen)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.content}>
            <Logo />
            <div className={styles.authButtons}>
              <AuthButtons />
            </div>
            <div className={styles.mobileNav}>
              <Button onClick={toggleNavMenu} className={styles.navButton}>
                Menu
              </Button>
            </div>
          </div>
        </Container>
      </div>
      {navOpen && (
        <div className={styles.navMenu}>
          <div className={styles.arrowButton} onClick={toggleNavMenu}></div>
          <Flex height="screen" direction="column">
            <Flex width="full" mt="lg" justifyContent="space-between">
              <AuthButtons />
            </Flex>
            <Flex direction="column" alignItems="center" mt="lg" width="full">
              <div>one</div>
              <div>two</div>
            </Flex>
          </Flex>
        </div>
      )}
    </>
  )
}
