import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Main from './components/Main'
import "./style/main.scss"
import { BrowserRouter } from 'react-router-dom'
import { ScrollingProvider} from 'react-scroll-section';
const App=()=> {

  useEffect(() => {
   AOS.init({duration:1000})
  }, [])
  return (
    <div className="overflow-hidden">
      <ScrollingProvider>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </ScrollingProvider>
    </div>
  
  );
}
export default App;
