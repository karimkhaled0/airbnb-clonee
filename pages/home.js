import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

function Home ({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
      placeholder={"Start your search"}
      />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className=" pb-5 text-4xl font-semibold">Live Anywhere</h2>
          <div className="-ml-3 flex space-x-4 overflow-scroll p-3 scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard img={img} title={title} key={img} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          desctiption="Whishlists created by Airbnbn"
          buttonText="Get inspired"
        />
        <Footer />
      </main>
    </div>
  )
}


export async function getServerSideProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
    )
    
    const cardsData = await fetch('https://jsonkeeper.com/b/VHHT').then((res) =>
    res.json()
    )
    return {
      props: {
        exploreData,
        cardsData,
      },
    }
  }
  
  export default Home
