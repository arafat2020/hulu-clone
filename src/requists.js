
const API_key ="3f392cf95b3ed725711f2a2782dc5499";

export default {
    fetchTrending: `/trending/all/week?api_key=${API_key}`,
    fetchToprated:`movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
    actionMovie:`/discover/movie?api_key=${API_key}&with_genres=28`,
    comideyMovie:`/discover/movie?api_key=${API_key}&with_genres=35`,
    horrorMovie:`/discover/movie?api_key=${API_key}&with_genres=27`,
    romanceMovie:`/discover/movie?api_key=${API_key}&with_genres=10749`,
    mystryMovie:`/discover/movie?api_key=${API_key}&with_genres=9648`,
    scifiMovie:`/discover/movie?api_key=${API_key}&with_genres=878`,
    westernMovie:`/discover/movie?api_key=${API_key}&with_genres=37`,
    animationMovie:`/discover/movie?api_key=${API_key}&with_genres=16`,
    tvMovie:`/discover/movie?api_key=${API_key}&with_genres=10770`
}

