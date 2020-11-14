import React from "react";
import {useGifs} from '../../hooks/useGifs'
import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const {gifs} = useGifs()

  return (
    <>
      <Helmet>
        <title>Home || Giffy</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  );
}

/*
<Category name="Categorias populares" options={POPULAR_GIFS} />
          <Category name="Categorias populares" options={['Perros', 'Gatos', 'Hamster']} />
        
*/
