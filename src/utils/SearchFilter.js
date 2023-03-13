import { CiSearch } from 'react-icons/ci'
import { AiFillCaretDown } from 'react-icons/ai'
import { useState } from 'react'
import FilterBox from './FilterBox'
import { useOutsideClick } from './hooks/useOutsideClick'
import ActionFilterBox from './ActionFilterBox'
import { usePageContainerContext } from '../components/layout/PageContainer'
import { client } from '..'
import { AnimatePresence } from 'framer-motion'


const SearchFilter = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [showActionFilter, setShowActionFilter] = useState(false)
    const [filData, setFilData] = useState([])

    // custom hooks to disable the modal when click outside the modal box
    const ref = useOutsideClick(() => setShowFilter(false))
    const actionRef = useOutsideClick(() => setShowActionFilter(false))


    const { actionType, graphQlapi, selectedId, setFilteredData, filteredData } = usePageContainerContext()


    // pass any delete method here
    // const deleteHandler =  () => {
    //     selectedId.map(async (i, index) => {
    //         console.log(i)
    //         await client.mutate({
    //             mutation: graphQlapi?.delete,
    //             variables: {
    //                 id: i.id
    //             },
    //             refetchQueries: [{ query: graphQlapi?.query, variables: graphQlapi?.variables }]
    //         })
    //     })
    // }
  

    // // filter method to show based on the filter select
    // const filterMethod =  () => {
    //     let pushDatas = []
    //     actionType.map(async (i) => {
    //      const { data } = await client.query({
    //             query: graphQlapi?.filter,
    //             variables: {
    //                 category: i.name
    //             },
    //         })
    //         const resData = data.themesByCategory.objectList
    //         pushDatas.push(...resData)
    //     })
    //     setFilData(pushDatas)
    //     setFilteredData(pushDatas)
    // }

    const applyHandler = async () => {
        await client.mutate({
            mutation: graphQlapi?.action,
            variables: {
                ids: selectedId,
                action: actionType
            },
            refetchQueries: [{ query: graphQlapi?.query, variables: graphQlapi?.variables }]
        })
    }


    return (
        <div className='mt-[3.62rem]'>
            {/* Search */}
            <div>
                <div className="inline-flex items-center justify-start bg-white border rounded border-gray-400" style={{ width: 475, height: 40, }}>
                    <div className="flex space-x-2 items-center justify-start px-4 w-[29.7rem]" style={{ height: 40, }}>
                        <CiSearch className='text-2xl text-gray-500' />
                        <input className="text-base leading-normal outline-none text-gray-400 w-[25.68rem]" style={{ height: 24, }} placeholder="Search by name or company "></input>
                    </div>
                </div>
            </div>

            {/* filter, action, button */}
            <div className="flex gap-x-[12px] items-center my-[16px]" >
                {/* FILTER COMPONENT */}
                <div className='relative'>
                    <div ref={ref} onClick={() => setShowFilter(!showFilter)} className="inline-flex items-center justify-center w-56 h-8 px-2 py-1 bg-white border rounded border-gray-400">
                        <div className="flex items-center justify-start flex-1">
                            <p className="text-sm leading-tight text-gray-500">Filter</p>
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <AiFillCaretDown className='w-[16px] h-[16px]' />
                        </div>
                    </div>
                    <AnimatePresence>
                    {showFilter && (
                        <div className='absolute'>
                            <FilterBox />
                        </div>
                    )}
                     </AnimatePresence>
                </div>

                {/* ACTION COMPONENT */}
                <div className='relative'>
                    <div ref={actionRef} onClick={() => setShowActionFilter(!showActionFilter)} className="inline-flex items-center justify-center w-60 h-8 px-2 py-1 bg-white border rounded border-gray-400">
                        <div className="flex items-center justify-start flex-1">
                            <p
                                className="text-sm leading-tight text-gray-500"
                            >
                                Choose action
                                {/* {actionType ? <span className="font-semibold text-black">{actionType}</span> : "Choose action"} */}
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <AiFillCaretDown className='w-[16px] h-[16px]' />
                        </div>
                    </div>
                    <AnimatePresence>
                    {showActionFilter && (
                        <div className='absolute'>
                            <ActionFilterBox />
                        </div>
                    )}
                    </AnimatePresence>
                </div>

                {/* button */}
                <button onClick={applyHandler} className="flex items-center justify-center px-4 py-2 bg-gray-700 rounded">
                    <p className="text-xs font-medium leading-none text-white">Apply</p>
                </button>
            </div>
        </div>
    )
}

export default SearchFilter