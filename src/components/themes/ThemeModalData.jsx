
import withModalContainer from '../../utils/hoc/modal/withModalContainer';

const ThemeModalData = ({ data }) => {

    return (
        <>
            {/* theme Name || left details */}
            <div className="w-[26.31rem]">
                <p className="font-[800] text-[1.25rem] text-[#152536]">{data.name}</p>
            </div>
            {/* right details */}
            <div className="font-[700] text-[#68717A] text-[1rem] ">
                <p className="font-[700]">Category:</p>
                <p className="font-[400]">{data.category}</p>
                <p className="font-[700] mt-[1.6rem]">Status:</p>
                <p className="font-[400]">Active</p>
            </div>
        </>
    )
}

export default withModalContainer(ThemeModalData)