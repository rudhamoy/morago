
import withModalContainer from '../../utils/hoc/modal/withModalContainer';
import Dollar from '../../assets/icon/dollar.png'
import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const UserModalData = ({ data }) => {
  const navigate = useNavigate()

  return (
    <>
      {/* user Name || left details */}
      <div className="w-[26.31rem]">
        <p className="font-[800] text-[1.25rem] text-[#152536]">{data.firstName + " " + data.lastName}</p>
      </div>
      {/* right details */}
      <div className=" text-[#68717A] text-[1rem] ">
        <ul className='space-y-[1.6rem] font-[700]'>
          <li>
            <p className="">Phone:</p>
            <p className="font-[400]">N/A</p>
          </li>
          <li>
            <p className="">Email:</p>
            <p className="font-[400]">N/A</p>
          </li>
          <li>
            <p className="">Coins:</p>
            <p className="font-[400]">{data.balance}</p>
          </li>

        </ul>
        <button 
        onClick={() => navigate(`/lists/user/charge/${data.id}`)}
        className='w-[13.19rem] h-[3.43rem] rounded-[4px] bg-[#1A1A1A] text-white flex justify-center items-center gap-x-3  my-[1.43rem]'>
          <img height={40} width={40} src={Dollar} alt="icon" />
          <span className='text-base'>Charge</span>
          <MdArrowForwardIos className="-mb-1 text-[#98A2B3]" />
        </button>
      </div>
    </>
  )
}

export default withModalContainer(UserModalData)