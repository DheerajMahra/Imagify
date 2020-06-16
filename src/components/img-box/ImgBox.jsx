import React from 'react'
import './ImgBox.css'
import FileSaver from 'file-saver'
import { FiDownload } from "react-icons/fi";

function download(url, fileName) {
    FileSaver.saveAs(url, fileName)
}

function ImgBox(props) {

    const { webformatURL, largeImageURL, tags } = props
    const tagsArray = tags.split(', ')

    return (
        <div className="ImgBox">
            <img className="ImgBox__img" src={webformatURL} alt={tagsArray[0]} />
            <div className="ImgBox__extra">
                <span
                    className="Download"
                    onClick={() => download(largeImageURL, tagsArray[0])}
                >
                    <FiDownload className="Download__icon"/>
                </span>
            </div>
        </div>
    )
}

export default ImgBox
