import React from 'react'
import withModalContainer from '../../utils/hoc/modal/withModalContainer'

const TranslatorModalData = ({ data }) => {

  
  const dob = data?.dateOfBirth !== null ? (
    `${data?.dateOfBirth.slice(0,4)}` + "." + `${data?.dateOfBirth.slice(4,6)}` + "." + `${data?.dateOfBirth.slice(6,8)}`
    ) : "No Entry"


  return (
    <>
      {/* theme Name || left details */}
      <div className="w-[26.31rem]">
        <p className="font-[800] text-[1.25rem] text-[#152536]">Darlene Robertson</p>
        <div className='mt-[3.06rem]'>
          <p className='font-[800]'>Translations:</p>
          <ul className='list-decimal ml-4 space-y-1'>
            {data.themes.map((i, index) => (
              <li key={index}>{i.name}</li>
            ))}
          </ul>
        </div>

        <div className='mt-[1.5rem]'>
          <p className='font-[800]'>Language:</p>
          <ul className='list-decimal ml-4 space-y-1'>
            {data.languages.map((i, index) => (
              <li key={index}>{i.name}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* right details */}
      <div className="font-[700] text-[#68717A] text-[1rem] ">
        <ul className='space-y-[1.6rem]'>
          <li>
            <p className="font-[700]">Phone:</p>
            <p className="font-[400]">{data?.phone ? data?.phone : 'N/A'}</p>
          </li>
          <li>
            <p className="font-[700]">Email:</p>
            <p className="font-[400]">{data.email}</p>
          </li>
          <li>
            <p className="font-[700]">TOPIK:</p>
            <p className="font-[400]">{data.levelOfKorean} level</p>
          </li>
          <li>
            <p className="font-[700]">Bitrh:</p>
            <p className="font-[400]">{dob}</p>
          </li>
          <li>
            <p className="font-[700]">Status:</p>
            <p className="font-[400]">{data.isAvailable !== false ? 'Active' : 'Inactve'}</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default withModalContainer(TranslatorModalData)