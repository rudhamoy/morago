import { Table } from 'antd';
import { translatorCallColumnList } from '../../utils/table/tableColumn';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };

const TranslatorCallHistory = () => {
    
  return (
    <div>
        <Table
         rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
        columns={translatorCallColumnList} 
        />
    </div>
  )
}

export default TranslatorCallHistory