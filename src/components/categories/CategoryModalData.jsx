
import withModalContainer from '../../utils/hoc/modal/withModalContainer';

const CategoryModalData = ({ data }) => {

    return (
        <>
           {/* theme Name || left details */}
           <div className="w-[26.31rem]">
                <p className="font-[800] text-[1.25rem] text-[#152536]">{data.name}</p>
            </div>
            {/* right details */}
            <div className="font-[700] text-[#68717A] text-[1rem] ">
                <p className="font-[700] mt-[1.6rem]">Status:</p>
                <p className="font-[400]">{data.isActive === true ? "Active" : "Inactive"}</p>
            </div>
        </>
    )
}

export default withModalContainer(CategoryModalData)