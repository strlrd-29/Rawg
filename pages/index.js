import SideBar from '../src/components/SideBar';
import axios from 'axios';

import { genresUrl } from '../src/lib/rawg';

function Home({ genres }) {
  return <SideBar />;
}

export default Home;

export async function getStaticProps() {
  const res = await axios(genresUrl());
  const genres = await res.data.results;
  return {
    props: {
      genres
    }
  };
}
