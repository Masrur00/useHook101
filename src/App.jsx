import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurants from './components/Reataurants';
import restaurants from "./data/restaurant.json"
import offers from "./data/offers.json"
import UserInfo from "./data/UserInfo.json"

const filters = {
  1: "Cost High to Low",
  2: "Cost Low to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance",
}

function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(restaurants);

  const updateFilter = (newFilter) => {
       setFilterBy(newFilter);
       switch(newFilter){
         case "1": {
                    
                    data.sort((a,b)=>  b.costfortwo - a.costfortwo);
                    setData([...data]);
                    break;
                     }
         case "2": {
          data.sort((a,b)=>  a.costfortwo - b.costfortwo);
          setData([...data]);
          break;
           }
         case "3": {
          data.sort((a,b)=>  b.rating - a.rating);
          setData([...data]);
          break;
         }
         case "4": {
          data.sort((a,b)=>  a.deliveryTimings - b.deliveryTimings);
          setData([...data]);
          break;
         }
         case "5": {
          data.sort((a,b)=>  a.rating - b.rating);
          setData([...data]);
          break;
         }
         default:  {
           setData(restaurants);
         }

       }
       
  }

  return (
    <div >      
      {/* <Navbar  /> */}
      <Navbar {...UserInfo.locations} />
      <Offers offers={offers} />
      
      <section className="near-you">        
        <Filters filters={filters} currentFilterBy={filterBy} updateFilter={updateFilter} />
        <Restaurants restaurants={data} />        
      </section>
    </div>
  );
}

export default App;
