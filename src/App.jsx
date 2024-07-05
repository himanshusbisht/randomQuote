import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [quote, setQuotes] = useState('')
  // const [loading, setLoading] = useState(true)
  
  const fetchQuotes= async()=>{
    const url="https://ron-swanson-quotes.herokuapp.com/v2/quotes";
      try{
        const response=await fetch(url);
        const data=await response.json();
        setQuotes(data[0]);
      }
      catch(error){
        console.log("Error",error)
      }


  };

  useEffect(()=>{
    fetchQuotes();
  },[])

  return (
    <>
    <h1>Random Quotes Generator</h1>
     <Card quote={quote}/>
     <button onClick={fetchQuotes} className="new-quote-button">New Quote</button>
    </>
  )
}

export default App
