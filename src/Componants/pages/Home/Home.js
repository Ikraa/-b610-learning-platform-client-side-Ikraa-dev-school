import React, { Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import Nav from '../../Navbar/Nav';
import TopHeader from './TopHeader';

class Home extends Component {
    render() {
        return (
            <div>
                <header className='h-auto'>

               <Nav />
               <TopHeader />

                </header>
                <main>
                    <section>
                        {/* <h1 className='text-3xl text-center text-black font-bold'>Our Online Courses</h1> */}
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;