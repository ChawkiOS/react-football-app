import React from 'react';
import './App.css';
import AllLeagues from './containers/AllLeagues';
import Header from './components/Header'

function App() {
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row flex-xl-nowrap">
                    <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                        <form className="bd-search d-flex align-items-center">
                            <span className="algolia-autocomplete algolia-autocomplete-left">
                                <input type="search" className="form-control ds-input" id="search-input" placeholder="Type your search here"/>
                            </span>
                        </form>
                        <nav className="bd-links" id="bd-docs-nav">
                            <div className="bd-toc-item active">
                                <AllLeagues />
                            </div>
                        </nav>
                    </div>
                    <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
                        <h2>Yoo! content will be here</h2>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
