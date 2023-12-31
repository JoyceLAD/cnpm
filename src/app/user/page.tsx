'use client'
import React from 'react'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'

const sectionStyles = {
    backgroundColor: '#333',
    margin: ' 20px 60px 20px 60px ',
};
const h1_style = {
    display: 'flex',
    margin: ' 50px 60px 20px ',
    fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
    fontSize: '1.5rem',
    color: 'rgb(235, 84, 96)',
};



const HomePage = () => {
    return (

        <>
            <section>
                <div>
                    <Header />
                </div>
                <section style={sectionStyles}>
                    <SearchBar />
                </section>
                <section >
                    <h1 style={h1_style}>
                        VcComic đề cử cho bạn
                    </h1>
                    <div style={sectionStyles}>
                        <Banner />
                    </div>
                </section>
                <section>
                    <div>
                        <h1 style={h1_style}>Mới cập nhật</h1>
                        <li>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl" style={sectionStyles}>
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl" style={sectionStyles}>
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl" style={sectionStyles}>
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl" style={sectionStyles}>
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //add many CardItems */}
                </section>
                <section>
                    <Footer />
                </section>
            </section>
        </>
    )

}
export default HomePage;