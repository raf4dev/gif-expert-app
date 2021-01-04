// import React , {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>

            { loading && <p className="animate__flash">Loading...</p>}

            <div className="card-grid">

                {
                // categories.map( category => (return <li key={ category }>{ category }</li>))
                images.map( x => (
                    <GifGridItem 
                        key={x.id} 
                        {...x}
                    />
                ))
                }
            </div>
        </>
    )
}
