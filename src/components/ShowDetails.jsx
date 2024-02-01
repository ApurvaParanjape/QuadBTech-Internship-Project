import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ShowDetails = (props) => {
    let {id} = useParams()
    const link = `/booking/${id}`
    const showInfo = props.showInfo
    const oneShow = showInfo?.filter((element)=> element.show.id=== Number(id))
    // const genres = oneShow[0].show.genres?.map((g,index)=>{return <p key={index}>{g}</p>})
  return (
    <div className='container my-4 mt-4 border'>
        <div className="row">
            <div  className="col-md-4 h-25 p-3" >
                <img className="img-fluid" src={oneShow && oneShow[0].show.image ?oneShow[0].show.image.original : "https://img.freepik.com/free-vector/image-folder-concept-illustration_114360-114.jpg?w=740&t=st=1706711976~exp=1706712576~hmac=2e1c46140b527c4dbd24d65782cf83f4cc3f0ebce85f1bd00cb8d44169619d85"} alt="" />
            </div>
            <div className='col p-3'>
                <h2>{oneShow[0].show.name}</h2>
                <small className='m-1'><strong>{oneShow[0].show.rating.average}</strong></small>
                <p className='m-1'>{oneShow[0].show.summary}</p>
                <p className='m-1'>Language: {oneShow[0].show.language}</p>
                
                <div className='m-1'>
                <a href={oneShow[0].show.url}>{oneShow[0].show.url}</a>

                </div>
                <button className='w-100 btn btn-primary mt-4'><Link to={link} className='text-white'>Book ticket</Link></button>
            </div>
        </div>
        
    </div>
  )
}

export default ShowDetails
