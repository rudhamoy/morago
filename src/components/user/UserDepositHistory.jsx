import React, { useState } from 'react'
import { Table } from 'antd';
import { userDepositColumnList } from '../../utils/table/tableColumn'
import { useQueryTableData } from '../../utils/hooks/useQueryTableData';
import { GET_DEPOSITS_BY_USERID } from '../../utils/api/userApi';
import { useParams } from 'react-router-dom';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};

const UserDepositHistory = () => {
  const { id } = useParams()
  const [page, setPage] = useState(0)
  const [pageSliceStart, setPageSliceStart] = useState(0)
  const [pageSliceEnd, setPageSliceEnd] = useState(5)

  const [loading, tableData, data] = useQueryTableData(
    GET_DEPOSITS_BY_USERID,
    'depositsByUserId',
    {
      userId: id,
    }
  )

  // pagination
  const pageLength = data?.depositsByUserId.totalPages
  const currentPage = data?.depositsByUserId.currentPage

  let pages = []
  for (let i = 0; i < pageLength; i++) {
    pages.push(i)
  }

  const paginateHandler = (i) => {
    setPage(i)
    if (i === (pageSliceEnd - 1)) {
      setPageSliceStart(currentPage + 1)
      setPageSliceEnd(currentPage + 5)
    }
  }

  const firstPage = () => {
    setPage(pageSliceStart - 1)

    if (currentPage === pageSliceStart) {
      setPageSliceStart(currentPage - 1)
      setPageSliceEnd(pageSliceEnd - 1)
    }
  }

  return (
    <div>
      <Table
        loading={loading}
        dataSource={tableData}
        pagination={false}
        columns={userDepositColumnList}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
      />

      {/* pagination */}
      <div className={`flex justify-center mt-10 ${pages.length <= 0 && 'hidden'}`}>
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
    </div>
  )
}

export default UserDepositHistory