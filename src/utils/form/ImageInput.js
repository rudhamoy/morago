import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";
import ArrowUpload from '../../assets/icon/uploadArrow.png'

import './form.css'

const MUTATION = gql`
mutation ($file: Upload!) {
    addFile(file: $file) {
      id
      path
      type
      originalTitle
      createdAt
      updatedAt
    }
  }
`;

const ImageInput = ({setImage}) => {
    // const [image, setImage] = useState()
    const [imagePreview, setImagePreview] = useState()

    // const [mutate] = useMutation(MUTATION);


    // drag state
    const [dragActive, setDragActive] = useState(false);
    // ref
    const inputRef = useRef(null);

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setImage(e.dataTransfer.files[0])
            const reader = new FileReader()
            reader.readAsDataURL(e.dataTransfer.files[0])
            reader.onload = function (e) {
                setImagePreview(e.target.result);
            };
        }
    };

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
            const reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = function (e) {
                setImagePreview(e.target.result);
            };
            // mutate({ variables: { file: e.target.files[0] }, onCompleted: () => console.log("Successfully added") })
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div className="flex mb-[1.56rem]">

            {/* icon || image */}
            <div className="h-[12.9rem] w-[12.9rem] bg-[#ECECEC] flex justify-center rounded-l-[4px] items-center overflow-hidden">
                <img className={`${imagePreview ? 'w-full h-full object-cover' : 'w-[32]'} `} src={imagePreview ? imagePreview : ArrowUpload} alt="uploadIcon" width={32} />
            </div>

            {/* drag|| upload */}
            <form className="h-[12.9rem] w-[32.9rem] bg-[#F5F5F5] text-center relative rounded-r-[4px]" id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input ref={inputRef} type="file" id="input-file-upload" multiple={false} onChange={handleChange} />
                <label id="label-file-upload" htmlFor="input-file-upload">
                    <div className="text-gray-300">
                        <p>Drag and drop your file here or</p>
                        <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
                    </div>
                </label>
                {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
            </form>
        </div>
    )
}

export default ImageInput