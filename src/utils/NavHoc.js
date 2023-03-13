import React, { useState } from 'react'

const navHoc = (Component) => {
   return function ToggleNav(props) {
    const [activeList, setActiveList] = useState(true)
    const [activeTranslation, setActiveTranslation] = useState(true)

    const toggleList = () => {
        setActiveList(!activeList)
    }

    const toggleTranslation = () => {
        setActiveTranslation(!activeTranslation)
    }

    return(
        <Component 
        {...props}
        toggleList={toggleList}
        toggleTranslation={toggleTranslation}
        activeList={activeList}
        activeTranslation={activeTranslation}
        />
    )
   }
}

export default navHoc