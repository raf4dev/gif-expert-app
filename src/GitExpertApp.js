import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Ferrari']);

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={ setCategories }/>  
          <hr/>
          <ol>
            {
              // categories.map( category => (return <li key={ category }>{ category }</li>))
              categories.map( category => (
                <GifGrid 
                  key = {category}
                  category = {category}
                />
              ))
            }
          </ol>
        </>
    )
}
