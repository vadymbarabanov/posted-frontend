import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Flex } from 'components/Flex'
import { TextField } from 'components/TextField'
import { Button } from 'components/Button'
import { useForm } from 'react-hook-form'
import Validation from 'helpers/validation'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((values) => {
    // call register api
    console.log(values)
  })

  return (
    <Layout>
      <Heading mt="lg" variant="h2" fontSize="lg" align="center">
        Sign Up
      </Heading>
      <form onSubmit={onSubmit}>
        <Flex
          mt="lg"
          width="full"
          alignItems="center"
          direction="column"
          vGap="sm"
        >
          <TextField
            label="Username"
            invalid={!!errors.username}
            helperText={errors.username?.message}
            {...register('username', {
              required: Validation.RULE.REQUIRED,
            })}
          />
          <TextField
            label="Email"
            invalid={!!errors.email}
            helperText={errors.email?.message}
            {...register('email', {
              required: Validation.RULE.REQUIRED,
              minLength: Validation.minLength(4),
            })}
          />
          <TextField
            label="Password"
            type="password"
            invalid={!!errors.password}
            helperText={errors.password?.message}
            {...register('password', Validation.FOR.PASSWORD)}
          />
          <Flex justifyContent="center">
            <Button primary type="submit">
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </form>
    </Layout>
  )
}

export default SignUp
