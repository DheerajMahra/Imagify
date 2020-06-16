import React from 'react'
import './Feed.css'
import ImgBox from '../img-box/ImgBox'

function Feed(props) {

    const { imgs } = props

    return (
        <div className="Feed">
        {imgs.map(img => <ImgBox key={img.id} {...img}/>)}
        </div>
    )
}

export default Feed
