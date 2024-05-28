import React from 'react'
import Card from './Card';


export default function Tours({tours, removeTour}) {
  return (
    <div className='container'>
        <div className=''>
            <h2 className='title'>Plan With Love</h2>
        </div>
        <div className='cards'>
            {
                tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour = {removeTour} />
                })
            }
        </div>
    </div>
  );
}
