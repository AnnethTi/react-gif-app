
import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball', 'One Piece'])

    const onAddCategory = ( newCategory) => {

        // if( categories.includes(newCategory)) return 
        if( categories.some( category => category.toLowerCase() === newCategory.toLowerCase()) ) return 

        setCategories( [newCategory ,...categories ] )
    }

  return (
    <>
    <h1>GiftExpertApp</h1>
    
    <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>

    {
        categories.map( category => (
            <GifGrid 
                key={category}
                category={category}/>
        ))
    }

    </>
  )
}

