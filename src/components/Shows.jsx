import React, { useEffect, useState } from 'react'
import ShowCard from './ShowCard'
const Shows = (props) => {
    // const [showInfo, setShowInfo] = useState(null)
    // const fetchShow = async () => {

    //     const data = await fetch(`https://api.tvmaze.com/search/shows?q=all`)

    //     const json = await data.json();

    //     setShowInfo(json);

    // }

    // useEffect(() => {
    //     fetchShow()
    // }, [])

    const showInfo = props.showInfo
    return (
        <div className="container">
            <div>
                <h2 className='text-center' style={{ marginTop: '5vh' }}>Popular Shows</h2>
            </div>
            <div className='row'>
                {showInfo?.map((element) => {
                    return <div className='col-md-4  col-sm-6 col-xs-12 col-lg-3' key={element.show.id}>
                        <ShowCard
                        showInfo={showInfo} 
                        id={element.show.id}
                        title={element.show.name} 
                        imageUrl={element.show.image ? element.show.image.medium : "https://img.freepik.com/free-vector/image-folder-concept-illustration_114360-114.jpg?w=740&t=st=1706711976~exp=1706712576~hmac=2e1c46140b527c4dbd24d65782cf83f4cc3f0ebce85f1bd00cb8d44169619d85"}
                        rating={element.show.rating.average}
                        />
                        
                    </div>
                })}
            </div>
        </div>
    )
}

export default Shows
