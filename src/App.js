import Home from './components/Home'
import Header from './components/Header'
import ShowData from './components/ShowData'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Summary from './components/Summary'
// import Loader from '../components/Loader'
import { useEffect, useState } from 'react'
const API = "https://api.tvmaze.com/search/shows?q=all"

const App = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchShows = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false)

      if (data.length > 0) {
        setShows(data);

      }
      // console.log(data)


    } catch (e) {
      console.log(e)
      setLoading(false)

    }
  }
  
  
  useEffect(() => {
    fetchShows(API);

  }, [])
  // console.log(shows)
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/showdata' element={<ShowData shows={shows}/>}/>
        <Route  path='/summary' element={<Summary />}/>
      </Routes>
      <Footer/>
    </Router>
    

)
}

export default App

