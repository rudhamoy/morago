import { useQuery } from '@apollo/client';
import { categoryColumnList } from '../../utils/table/tableColumn';
import { ALL_CATEGORY, CHANGE_CATEGORY_STATUS } from '../../utils/api/categoryApi';
import CategoryModalData from './CategoryModalData';
import TableContainer from '../../utils/hoc/table/TableContainer';
import { useModal } from '../../utils/hooks/useModal';
import { useQueryTableData } from '../../utils/hooks/useQueryTableData';
import { useState } from 'react';

const CategoryList = () => {

  const [page, setPage] = useState(0)

  const [open, handleOk, handleCancel, actionBtn, modalData] = useModal()
  const [loading, tableData, data] = useQueryTableData(ALL_CATEGORY, 'categories', {
    pageSize: 5,
    pageNo: page
  })

  let statusAction = {
    "statusMutation": CHANGE_CATEGORY_STATUS,
    "id": modalData.id,
    "navigation": '/translation_topics/categories',
    "refetchQuery": ALL_CATEGORY
  }

  const pageLength = data?.categories.totalPages
  const currentPage = data?.categories.currentPage

  let pages = []
  for (let i = 0; i < pageLength; i++) {
    pages.push(i)
  }


  return (
    <>
      <TableContainer
        loading={loading}
        columns={categoryColumnList}
        tableData={tableData}
        open={open}
        handleOk={handleOk}
        actionBtn={actionBtn}
        modalData={modalData}
        handleCancel={handleCancel}
        modalComponent={CategoryModalData}
        statusAction={statusAction}
        onEditClick={`/translation_topics/categories/edit_category/${modalData.id}`}
      />

      <div className="flex justify-center my-12">
        <div>
          <ul className='flex border'>
            <li><button disabled={page === 0} className="p-1 px-3">prev</button></li>
            {pages.map(i => (
              <li key={i}>
                <button onClick={() => setPage(i)} className={`p-1 px-3 ${currentPage === i && "bg-black text-white"}`}>{i + 1}</button>
              </li>
            ))}
            <li><button className="p-1 px-3">next</button></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CategoryList