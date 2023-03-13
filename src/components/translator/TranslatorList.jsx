
import { GET_TRANSLATOR_LIST } from '../../utils/api/translatorApi';
import { translatorColumnList } from '../../utils/table/tableColumn';
import TranslatorModalData from './TranslatorModalData';
import { useQueryTableData } from '../../utils/hooks/useQueryTableData';
import TableContainer from '../../utils/hoc/table/TableContainer';
import { useModal } from '../../utils/hooks/useModal';
import TranslatorImage from '../../assets/translator.png'
import { useState } from 'react';

const TranslatorList = () => {
  const [page, setPage] = useState(0)
  const [pageSliceStart, setPageSliceStart] = useState(0)
  const [pageSliceEnd, setPageSliceEnd] = useState(5)
  const [open, handleOk, handleCancel, actionBtn, modalData] = useModal()

  const [loading, tableData, data] = useQueryTableData(GET_TRANSLATOR_LIST, 'translatorProfiles', {
    pageSize: 5,
    pageNo: page
  })

  const pageLength = data?.translatorProfiles.totalPages
  const currentPage = data?.translatorProfiles.currentPage

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
      <TableContainer
        loading={loading}
        columns={translatorColumnList}
        tableData={tableData}
        open={open}
        handleOk={handleOk}
        actionBtn={actionBtn}
        modalData={modalData}
        handleCancel={handleCancel}
        modalComponent={TranslatorModalData}
        image={TranslatorImage}
        btnTitle="account"
        onEditClick={`/lists/translator/edit_translator/${modalData.id}`}
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

export default TranslatorList