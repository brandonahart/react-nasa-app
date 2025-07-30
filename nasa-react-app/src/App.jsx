import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [apiData, setApiData] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleShowModal() {
    if (showModal){
      setShowModal(false)
    }
    else {
      setShowModal(true)
    }
  }

  //how we get info from a api
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_API_KEY}`

      //caching mechanism
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const data = JSON.parse(localStorage.getItem(localKey))
        setApiData(data)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const data = await res.json()
        setApiData(data)
        localStorage.setItem(localKey, JSON.stringify(apiData))
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>
      {apiData ? (<Main apiData={apiData}/>) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && 
        (<SideBar apiData={apiData} handleShowModal={handleShowModal}/>)
      }
      {apiData && (<Footer apiData={apiData} handleShowModal={handleShowModal}/>)}
    </>
  )
}

export default App
