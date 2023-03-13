import { Table } from 'antd';
import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { GET_CALLS_BY_USERID } from '../../utils/api/userApi';
import { useQueryTableData } from '../../utils/hooks/useQueryTableData';
import { userCallColumnList } from '../../utils/table/tableColumn';

const UserCallHistoryList = () => {
  const { id } = useParams()
  const [page, setPage] = useState(0)
  const [pageSliceStart, setPageSliceStart] = useState(0)
  const [pageSliceEnd, setPageSliceEnd] = useState(5)

  const [loading, tableData, data] = useQueryTableData(
    GET_CALLS_BY_USERID, 
    'allOutAndIncomingCallsForAdmin',
    {
      userId: id,
      pageNo: page
    }
    )

    // pagination
    const pageLength = data?.allOutAndIncomingCallsForAdmin.totalPages
    const currentPage = data?.allOutAndIncomingCallsForAdmin.currentPage

    let pages = []
    for(let i = 0; i < pageLength; i++) {
      pages.push(i)
    }

    const paginateHandler = (i) => {
      setPage(i)
      if(i === (pageSliceEnd - 1)) {
        setPageSliceStart(currentPage + 1)
        setPageSliceEnd(currentPage + 5)
      }
    }

    const firstPage = () => {
      setPage(pageSliceStart - 1)

      if(currentPage === pageSliceStart) {
        setPageSliceStart(currentPage - 1)
        setPageSliceEnd(pageSliceEnd - 1)
      }
    }
    
  return (
    <>
    <Table
    loading={loading}
    columns={userCallColumnList}
    dataSource={tableData}
    pagination={false}
    />
   
    {/* pagination */}
    <div className={`flex justify-center my-12 ${pages.length <= 0 && 'hidden'}`}>
      <div>
        <ul className='flex border'>
          <li><button disabled={page === 0} className="p-1 px-3">prev</button></li>
          <li className={`${page === 0 && 'hidden'}`}><button onClick={firstPage} disabled={page === 0} className="p-1 px-3">{pageSliceStart}</button></li>
          {pages.slice(pageSliceStart, pageSliceEnd).map(i => (
            <li key={i}>
              <button onClick={() => paginateHandler(i)} className={`p-1 px-3 ${currentPage === i && "bg-black text-white"}`}>{i + 1}</button>
            </li>
          ))}
          <li><button className="p-1 px-3">...{pageLength}</button></li>
          <li><button className="p-1 px-3">next</button></li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default UserCallHistoryList