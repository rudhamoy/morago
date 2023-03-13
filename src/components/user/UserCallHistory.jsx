import { Table } from 'antd';
import { userCallColumnList } from '../../utils/table/tableColumn';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

const UserCallHistory = () => {
    
  return (
    <div>
        <Table
         rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
        columns={userCallColumnList} 
        />
    </div>
  )
}

export default UserCallHistory