import React from 'react'
import { Table } from 'antd';
import { translatorWithdrawColumnList } from '../../utils/table/tableColumn'

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };

const TranslatorWithdrawHistory = () => {
   
  return (
    <div>
         <Table
         rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
        columns={translatorWithdrawColumnList} 
        />
    </div>
  )
}

export default TranslatorWithdrawHistory