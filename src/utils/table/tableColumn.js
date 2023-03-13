import { MdArrowForwardIos } from 'react-icons/md'
import { Space } from 'antd'
import { useNavigate, Link } from 'react-router-dom';

// const navigate = useNavigate()

export const translatorColumnList = [
  {
    title: 'Name',
    dataIndex: 'namr',
    key: 'namr',
    render: (text) => <p>No Name</p>
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <p>N/A</p>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (_, record) => {
      if(record.email === "" || record.email === null) return <p>N/A</p>
      return <p>{record.email}</p>
    }
  },
  {
    title: 'Topik',
    dataIndex: 'levelOfKorean',
    key: 'levelOfKorean',
    render: (_, record) => {
      if(record.levelOfKorean === "" || record.levelOfKorean === null) return <p>N/A</p>
      return <p>{record.levelOfKorean}</p>
    }
  },
  {
    title: 'Status',
    dataIndex: 'isAvailable',
    key: 'isAvailable',
    render: (text) => {
      if (typeof text === 'boolean') {
        return (
          <p>{text === false ? "Inactive" : 'Active'}</p>
        )
      }
    }
  },
  {
    title: 'Withdraw Request',
    dataIndex: 'withdrawRequest',
    key: 'withdrawRequest',
    render: (text) => <p>None</p>
  },
  {
    title: 'Call',
    key: 'call',
    render: (_, record) => {
      return (<Space wrap>
        <button
        // onClick={() => navigate('/lists/translator/call_history')}
        >
          <Link to="/lists/translator/call_history" className="flex items-center gap-x-2 ">
            <span>View</span>
            <MdArrowForwardIos className="-mb-1 text-[#98A2B3]" />
          </Link>
        </button>
      </Space>
      )
    },
  },
  {
    title: 'Withdraw',
    key: 'withdraw',
    render: (_, record) => {
      return (<Space wrap>
        <button
        // onClick={() => navigate('/lists/translator/withdraw_history')}
        >
          <Link to="/lists/translator/withdraw_history" className="flex items-center gap-x-2">
            <span>View</span>
            <MdArrowForwardIos className="-mb-1 text-[#98A2B3]" />
          </Link>
        </button>
      </Space>
      )
    },
  },
];


// user table column
export const userColumnList = [
  {
    title: 'Name',
    dataIndex: '',
    key: 'name',
    render: (_, record) => {
      if(record.firstName === "" || record.lastName === "") return <p>No Name</p>
      return <p className="">{record.firstName + " " + record.lastName}</p>
    },
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
    render: (text) => {
      if(text == null) return <p>0</p>
      return text
    }
  },
  {
    title: 'Deposit Request',
    dataIndex: 'depositRequest',
    key: 'depositRequest',
    render: (text) => <p>None</p>
  },
  {
    title: 'Call',
    key: 'call',
    render: (_, record) => {
      return (<Space wrap>
        <Link
          to={`/lists/user/call_history/${record.id}`}
          className="flex items-center gap-x-2 "
        >
          <span>View</span>
          <MdArrowForwardIos className="-mb-1 text-[#98A2B3]" />
        </Link>
      </Space>
      )
    },
  },
  {
    title: 'Deposit',
    key: 'deposit',
    render: (_, record) => {
      return (<Space wrap>
        <Link
          to={`/lists/user/deposit_history/${record.id}`}
          className="flex items-center gap-x-2"
        >
          <span>View</span>
          <MdArrowForwardIos className="-mb-1 text-[#98A2B3]" />
        </Link>
      </Space>
      )
    },
  },
];


// theme table column
export const themeColumnList = [
  {
    title: 'Theme',
    dataIndex: 'name',
    key: 'name',
    //   render: (text) => <p className=" -mb-[2px]">{text + 1}</p>,
    className: "text-sm"
  },
  {
    title: 'Categories',
    dataIndex: 'category',
    key: 'category',
    className: "text-sm"
  },
  {
    title: 'Status',
    dataIndex: 'isPopular',
    key: 'isPopular',
    className: "text-sm",
    render: (text) => {
      if (typeof text === 'boolean') {
        return (
          <p>{text === false ? "Inactive" : 'Active'}</p>
        )
      }
    }
  },
  {
    title: 'Icon',
    dataIndex: 'icon',
    key: 'icon',
    className: "text-sm",
    render: (item) => {
      let splitName = item.originalTitle.split('.')[0]
      return (
        <span className="flex items-center gap-x-[6px]">
          <img width={30} src={item.path} alt={splitName} />
          <p>{splitName}</p>
        </span>
      )
    }
  }
];


// Category table column
export const categoryColumnList = [
  {
    title: 'Categories',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Status',
    dataIndex: 'isActive',
    key: 'isActive',
    render: (text) => {
      if (typeof text === 'boolean') {
        return (
          <p>{text === false ? "Inactive" : 'Active'}</p>
        )
      }
    }
  }
];

// translator calls history
export const translatorCallColumnList = [
  {
    title: 'Call',
    dataIndex: 'call',
    key: 'call',
    className: "font-bold text-[1rem]"
    //   render: (text) => <p className=" -mb-[2px]">{text + 1}</p>,
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
    className: "font-bold text-[1rem]"
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    className: "font-bold text-[1rem]"
  },
  {
    title: 'Coins',
    dataIndex: 'coin',
    key: 'coin',
    className: "font-bold text-[1rem]"
  },
  {
    title: 'Theme',
    dataIndex: 'theme',
    key: 'theme',
    className: "font-bold text-[1rem]"
  },
  {
    title: 'Withdraw Request',
    dataIndex: 'withdrawRequest',
    key: 'withdrawRequest',
    className: "font-bold text-[1rem]"
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    className: "font-bold text-[1rem]"
  },
];

// translator withdraw history
export const translatorWithdrawColumnList = [
  {
    title: 'Withdraw',
    dataIndex: 'withdraw',
    key: 'withdraw',
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: 'Coins',
    dataIndex: 'coins',
    key: 'coins',
  },
  {
    title: 'Withdraw Request',
    dataIndex: 'withdrawRequest',
    key: 'withdrawRequest',
  },
];

// user call histrory
export const userCallColumnList = [
  {
    title: 'Call',
    dataIndex: 'caller',
    key: 'caller',
    render: (_, record) => {
      if(record.caller !== null) return <p>{record.caller?.phone}</p>
      return <p>N/A</p>
    },
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
    render: (text) => {
      if(text !== null) return <p>{text} min</p>

      return <p>N/A</p>
    }
  },
  {
    title: 'Coins',
    dataIndex: 'sum',
    key: 'sum',
    render: (text) => {
      if(text !== 0) return <p>- {text}</p>

      return <p>{text}</p>
    }
  },
  {
    title: 'Theme',
    dataIndex: 'theme',
    key: 'theme',
    render: (_, record) => {
      if(record.theme !== null) return <p>{record.theme?.name}</p>

      return <p>N/A</p>
    }
  },
  {
    title: 'Deposit Request',
    dataIndex: 'depositRequest',
    key: 'depositRequest',
    render: () => <p>None</p>
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    render: () => <p>N/A</p>
  },
];

// user deposit histrory
export const userDepositColumnList = [
  {
    title: 'Deposit',
    dataIndex: 'deposit',
    key: 'deposit',
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: 'Coins',
    dataIndex: 'coins',
    key: 'coins',
  },
  {
    title: 'Deposit Request',
    dataIndex: 'depositRequest',
    key: 'depositRequest',
  },
];