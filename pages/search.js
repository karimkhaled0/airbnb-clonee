import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';


function Search({ searchResults }) {
    const router = useRouter()

    const { Location, startDate, endDate, guest } = router.query;

    const formatterStartDate = format(new Date(startDate), "dd MMMM yy")
    const formatterEndDate = format(new Date(endDate), "dd MMMM yy")

    return (
        <div>
            <Header placeholder={`${Location} | ${formatterStartDate} | ${formatterEndDate} | ${guest} guests`} />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs text-gray-500'>300+ stays - {formatterStartDate} - {formatterEndDate} - for {guest} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {Location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-2 text-gray-800 whitespace-nowrap'>
                        <p className='p-button'>Cancellation Flexibility</p>
                        <p className='p-button'>Type of Place</p>
                        <p className='p-button'>Price</p>
                        <p className='p-button'>Rooms and Beds</p>
                        <p className='p-button'>More Filters</p>
                    </div>
                    <div className='flex flex-col'>

                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then((res) => res.json());

    return {
        props: {
            searchResults,
        },
    };
}