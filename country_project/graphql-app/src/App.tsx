// React Imports
import React, { useEffect } from 'react';

// Apollo Imports
import { useQuery } from '@apollo/client';

// Components Imports
import CountriesTable from './Components/CountriesTable';
import Footer from './Components/Footer';
// Graphql Imports
import GET_DATA from './GraphQl/CountriesGraphQl';
import CircularProgress from '@mui/material/CircularProgress';


const App: React.FC = () => {


  // useQuery


  const { loading, error, data } = useQuery(GET_DATA);

 



  if (loading) return <CircularProgress />;
  if (error) return <p>Hata oluştu..</p>;



  return (
    <div>
      <CountriesTable data={data.countries != undefined ? data.countries : []} />
      <Footer/>
    </div>
  );
};

export default App;