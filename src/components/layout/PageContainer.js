import { createContext, useContext, useState } from 'react'
import PageHead from '../../utils/PageHead'
import SearchFilter from '../../utils/SearchFilter'
import { motion as m, AnimatePresence } from 'framer-motion'

const PageContext = createContext()

export const PageContainer = ({ children, title, searchFilter, graphQlapi }) => {

    const [actionType, setActionType] = useState(null)
    const [selectedId, setSelectedId] = useState(null)
    const [filteredData, setFilteredData] = useState([])

    return (
        <PageContext.Provider value={{ setActionType, actionType, selectedId, setSelectedId, graphQlapi, setFilteredData, filteredData }}>
            <AnimatePresence key={title} mode={"wait"}>
            <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.85, ease: "easeOut"}}
            exit={{opacity: 0}}
            className="p-2 ">
                <div className='flex mb-[23px] h-[9.7rem]'>
                    <div className="w-full">
                        <PageHead title={title} />
                    </div>

                    {typeof searchFilter === 'boolean' && true ? (
                        <div className='w-full'>
                            <SearchFilter />
                        </div>
                    ) : null}
                </div>
                <>
                    {children}
                </>
            </m.div>
        </AnimatePresence>
        </PageContext.Provider>
    )
}

// export default PageContainer
export const usePageContainerContext = () => useContext(PageContext)