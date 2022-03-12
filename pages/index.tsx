import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/Header'


const Home: NextPage = () => {
  const router = useRouter()
  useEffect(()=>{
    router.push({
      pathname: '/home'
    })
  }, [])

  return (
    <div className="">
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    </div>
  )
}

export default Home