import React, { useState } from 'react'

import navHoc from '../../utils/NavHoc'
import { SideNavMenu } from './SideNavMenu'
import { SideNavList } from './SideNavList'

const SideNav = ({ toggleList, activeList, toggleTranslation, activeTranslation }) => {

    const navs = [
        {
            title: "Lists",
            toggleAction: toggleList,
            toggleState: activeList,
            subMenu: [
                {
                    name: "User",
                    path: '/lists/user',
                },
                {
                    name: "Translator",
                    path: "/",
                }
            ]
        },
        {
            title: "Translation topics",
            toggleAction: toggleTranslation,
            toggleState: activeTranslation,
            subMenu: [
                {
                    name: 'Themes',
                    path: '/translation_topics/themes',
                },
                {
                    name: 'Categories',
                    path: '/translation_topics/categories',
                }
            ]
        },
    ]

    return (
        <nav className={sideNav__Contianer}>
            <SideNavMenu 
            items={navs} 
            resourceName="navs" 
            navComponent={SideNavList}
            />
        </nav>
    )
}

const sideNav__Contianer = 'flex flex-col absolute right-0 w-[17rem] mt-[32px] divide-y-2 '

export default navHoc(SideNav)

