
import Hero from "./Components/Hero"
import AIFeatures from "./Components/Technology"
import Feature from "./Components/Feature"

// import Passed from "./Components/Passed"
import Pricing from "./Components/Piricing"
import AISolutions from "./Components/Solution"
import Footer from "./Components/Contact"
// import Animation from "../app/Components/Animation"
export default function Home() {
  return (
    <main>
 
      <Hero />
     <AIFeatures />
     <Feature/>
    {/* <Passed/> */}
    <AISolutions/>
    <Pricing/>
    <Footer/>
    

    </main>
  )
}

