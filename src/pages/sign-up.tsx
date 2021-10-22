import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Flex } from 'components/Flex'
import { TextField } from 'components/TextField'
import { Button } from 'components/Button'
import { useForm } from 'react-hook-form'

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
      <Heading variant="h2" fontSize="lg" align="center">
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
              required: { value: true, message: 'This field is required' },
            })}
          />
          <TextField
            label="Email"
            invalid={!!errors.email}
            helperText={errors.email?.message}
            {...register('email', {
              required: { value: true, message: 'This field is required' },
              minLength: {
                value: 3,
                message: 'This field should be at least 3 characters',
              },
            })}
          />
          <TextField
            label="Password"
            type="password"
            invalid={!!errors.password}
            helperText={errors.password?.message}
            {...register('password', {
              required: { value: true, message: 'This field is required' },
            })}
          />
          <Flex justifyContent="center">
            <Button type="submit">Sign Up</Button>
          </Flex>
        </Flex>
      </form>
    </Layout>
  )
}

export default SignUp
