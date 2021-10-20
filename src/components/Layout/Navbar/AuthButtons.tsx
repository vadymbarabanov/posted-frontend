import Link from 'next/link'
import { Button } from 'components/Button'

export const AuthButtons = () => {
  return (
    <>
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Link href="/sign-up">
        <Button primary>Sign Up</Button>
      </Link>
    </>
  )
}
