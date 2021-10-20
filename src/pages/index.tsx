import { NextPage } from 'next'
import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Heading variant="h1" fontSize="lg" align="center">
          Posted
        </Heading>
      </Layout>
    </div>
  )
}

export default Home
