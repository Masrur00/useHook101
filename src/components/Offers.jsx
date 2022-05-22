import React from 'react';


const Offers = (props) => {
 
  return (
    <section className="offers">
    <div className="container">
      {props.offers.map((offer , ind) => <img key={ind} alt='' className="offer" src={offer} /> )}     
    </div>
</section>
  );
};

export default Offers;
