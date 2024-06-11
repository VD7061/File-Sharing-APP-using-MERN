import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import { uploadFile } from '../servies/api';


const Home = () => {
    const inputRef = useRef();
    const [file, setFile] = useState(null);
  
    const [result , setResult] = useState('');

    useEffect(() => {
        const getFile = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response = await uploadFile(data);
                
              
                setResult(response.path)
            }
        };
        getFile();
    }, [file]);

    const onUploadClick = () => {
        inputRef.current.click();
    };

    const banner = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
    return (
        <div className='mainbody'>
            <img src={banner} alt='banner' className="container" />
            <div className='rightbody'>
                <h1 className='h1'>File Sharing</h1>
                <div className='wrapper'>
                    <p className='description'>
                        Upload your file, wait a moment, get the link, and share
                    </p>
                    <button onClick={onUploadClick} className='btnUpload'>
                        Upload
                    </button>
                    <div>
                        <input
                            type='file'
                            ref={inputRef}
                            style={{ display: 'none' }}
                            onChange={(e) => setFile(e.target.files[0])} // Set the first file
                        />
                    </div>
                    {result && (
                        <p className='uploadedLink ' style={{margin:"10px"}}>
                         Your file  is uploaded! Download it <a href={result} target="_blank" rel="noopener noreferrer">here</a>.
                        </p>

                    )}
                    
                    {/* <a href={result} target="_blank">

{result}

</a> */}
                </div>
            </div>
        </div>
    )
}

export default Home;
