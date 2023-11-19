import { View, Text, Button, ScrollView, Image } from 'react-native';
import { styles } from '../../styles/styles_global';
import LoadSpinner from './../../components/LoadSpinner'
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
//import YouTube from 'react-native-youtube';

import NavbarHeader from './../../components/NavbarHeader'
import CardMovie from '../../components/CardMovie';

export default function Home() {
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [movieVideo, setMovieVideo] = useState([])
  const [movieDetail, setMovieDetail] = useState({})
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhNmI0NGU0MjEwZjljYjczNzdlZTM5MTE2OTVlOSIsInN1YiI6IjY1MWRlYjkzOGMyMmMwMDBjOTA4YjliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7ppdL_-iHK0G7Y16XP_Bg_z6R-IYL_8YFX6qCTAk7Q'
    }
  };



  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setMoviesTopRated(response.results))
      .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/238/videos?language=en-US', options)
      .then(response => response.json())
      .then(response => setMovieVideo(response.results))
      .catch(err => console.error(err));

  }, [options]);




  return (
    <View style={styles.container}>
      <NavbarHeader type='home' />

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={{ display: 'flex', gap: 5 }}>
          <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }} >Top filmes</Text>
          <ScrollView horizontal={true} style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
            {moviesTopRated.map((movie) => (
              <Link
                key={movie.id}
                href={{
                  pathname: "/detail",
                  params: { id: movie.id },
                }}
              >
                <CardMovie onClick={() => {
                  alert('clicado')
                }} pathImage={movie.poster_path} title={movie.title} />
              </Link>

            ))}
          </ScrollView>

        </View>


      </ScrollView>
    </View>
  );
}
