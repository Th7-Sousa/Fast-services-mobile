import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../styles/styles_global';
import LoadSpinner from './../../components/LoadSpinner'
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

import NavbarHeader from './../../components/NavbarHeader'
import CardMovie from '../../components/CardMovie';

export default function Home() {

  const [loading, setLoading] = useState(true);

  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [moviesRelease, setMoviesRelease] = useState([])
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesUpcoming, setMoviesUpComing] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhNmI0NGU0MjEwZjljYjczNzdlZTM5MTE2OTVlOSIsInN1YiI6IjY1MWRlYjkzOGMyMmMwMDBjOTA4YjliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7ppdL_-iHK0G7Y16XP_Bg_z6R-IYL_8YFX6qCTAk7Q'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setMoviesTopRated(response.results);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setMoviesPopular(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setMoviesRelease(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        setMoviesUpComing(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <NavbarHeader type='home' />

      {
        loading ? <LoadSpinner /> :

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

            <View style={{ display: 'flex', gap: 10 }}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'medium' }} >Filmes em alta</Text>
                <SimpleLineIcons name="fire" size={24} color="#FF8700" />
              </View>
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


            <View style={{ display: 'flex', gap: 10 }}>
              <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'medium' }}>Lançamentos</Text>
              <ScrollView horizontal={true} style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
                {moviesPopular.map((movie) => (
                  <Link
                    key={movie.id}
                    href={{
                      pathname: "/detail",
                      params: { id: movie.id },
                    }}
                  >
                    <CardMovie size="small" onClick={() => {
                      alert('clicado')
                    }} pathImage={movie.poster_path} title={movie.title} />
                  </Link>

                ))}
              </ScrollView>
            </View>


            <View style={{ display: 'flex', gap: 10 }}>
              <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'medium' }}>Populares</Text>
              <ScrollView horizontal={true} style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
                {moviesRelease.map((movie) => (
                  <Link
                    key={movie.id}
                    href={{
                      pathname: "/detail",
                      params: { id: movie.id },
                    }}
                  >
                    <CardMovie size="small" onClick={() => {
                      alert('clicado')
                    }} pathImage={movie.poster_path} title={movie.title} />
                  </Link>

                ))}
              </ScrollView>
            </View>



            <View style={{ display: 'flex', gap: 10 }}>
              <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'medium' }}>Em breve</Text>
              <ScrollView horizontal={true} style={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
                {moviesUpcoming.map((movie) => (
                  <Link
                    key={movie.id}
                    href={{
                      pathname: "/detail",
                      params: { id: movie.id },
                    }}
                  >
                    <CardMovie size="small" onClick={() => {
                      alert('clicado')
                    }} pathImage={movie.poster_path} title={movie.title} />
                  </Link>

                ))}
              </ScrollView>
            </View>


          </ScrollView>

      }

    </View>
  );
}
