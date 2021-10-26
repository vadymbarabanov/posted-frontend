import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Flex } from 'components/Flex'
import { TextField } from 'components/TextField'
import { Button } from 'components/Button'
import { useForm } from 'react-hook-form'
import Validation from 'helpers/validation'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((values) => {
    // call login api
    console.log(values)
  })

  return (
    <Layout>
      <Heading mt="lg" variant="h2" fontSize="lg" align="center">
        Sign In
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
            label="Email"
            invalid={!!errors.email}
            helperText={errors.email?.message}
            {...register('email', { required: Validation.required })}
          />
          <TextField
            label="Password"
            type="password"
            invalid={!!errors.password}
            helperText={errors.password?.message}
            {...register('password', { required: Validation.required })}
          />
          <Flex justifyContent="center">
            <Button type="submit">Sign In</Button>
          </Flex>
        </Flex>
      </form>
    </Layout>
  )
}

export default SignIn
