import { Table, Modal } from 'antd';
import { Space, Skeleton  } from 'antd';
import viewIcon from '../../../assets/icon/Eye.png'
import { usePageContainerContext } from '../../../components/layout/PageContainer';


const TableContainer = ({
    loading,
    columns, 
    tableData,
    open,
    handleOk,
    handleCancel,
    actionBtn,
    modalData,
    modalComponent: ModalComponent,
    ...props
}) => {

  const { setSelectedId } = usePageContainerContext()

    // table column
    const tableColumn = [
      // copy all the column list
      // add it to the list
      // which import from separate files
      ...columns,
  
      // add a new column to the table - view column
      {
        title: '',
        key: 'action',
        render: (_, record) => {
          return (<Space wrap>
            <button
              onClick={() => actionBtn(record)}
            >
              <img src={viewIcon} alt="view" className="w-[24px]" />
            </button>
          </Space>
          )
        },
      },
    ];

    // show loading component
  if (loading) return <Skeleton active loading={loading} paragraph={{rows: 5}} />;

  return (
    <div>
      {/* 
      *show this modal - when click on action button
      * eg - view icon
      */}
        <Modal
        footer={null}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={860}
      >
        <ModalComponent
          data={modalData}
          {...props}
        />
      </Modal>

      {/* 
        *actual table component
        *pass table columns | table Data etc
      */}
      <Table
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRows, selectedRowKeys) => {
            let ids = []
            selectedRowKeys?.map(i => {
              ids.push(i.id)
            })
            setSelectedId(ids)
            
          }
        }}
        pagination={false}
        columns={tableColumn}
        dataSource={tableData}
      />



    </div>
  )
}

export default TableContainer