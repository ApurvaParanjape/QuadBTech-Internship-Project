import React from 'react'
import ShowDetails from './ShowDetails'
import { useNavigate } from 'react-router-dom'

const ShowCard = (props) => {
  const id = props.id
  const navigate = useNavigate()
    const handleDetailsClick = ()=>{
      navigate(`/details/${id}`)
    }

    
  return (
    <div className='container my-3'>
      <div className="card" style={{width: "18rem"}}>
  <img src={props.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <div className='d-flex justify-content-between'>
    <h5 className="card-title">{props.title}</h5>
    <div>
      {/* <img src="https://www.flaticon.com/free-icons/star" alt="" /> */}
      <p  style={{color: 'green'}}><strong>{props.rating? props.rating: "N/A"}</strong></p>
      {/* <FontAwesomeIcon icon="fa-solid fa-star" style={{color: "#FFD43B",}} /> */}
    </div>
    </div>
    <p className="card-text"></p>
    <a href="#" className="btn btn-primary" onClick={handleDetailsClick}>View Details</a>
  </div>
</div>
    </div>
  )
}

export default ShowCard
