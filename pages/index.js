import Head from 'next/head'
import Layout from '../components/layout'
import Top from '../components/top'
import CardLayout from '../components/cardLayout'
import Middle from '../components/middle'
import Bottom from '../components/bottom'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Unchi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="ウェブデザインの練習サイト" />
      </Head>
      <Top />
      <CardLayout />
      <Middle />
      <Bottom />
    </Layout>
  )
}
