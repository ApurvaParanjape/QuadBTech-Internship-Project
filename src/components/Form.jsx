import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Form = (props) => {
    let {id} = useParams()
    const showInfo = props.showInfo
    const oneShow = showInfo?.filter((element)=> element.show.id=== Number(id))
    const [booking, setBooking] = useState({title: oneShow && oneShow[0].show.name, language: oneShow && oneShow[0].show.language, date: "", time: "", seats: ""})

    const handleSubmit = (e)=>{
        e.preventDefault()
        // setBooking({...booking, title: movie})
        // setBooking({...booking, language: lang})
        // console.log(booking)
        localStorage.setItem("Booking-Details", JSON.stringify(booking))
        setBooking({title: oneShow && oneShow[0].show.name, language: oneShow && oneShow[0].show.language, date: "", time: "", seats: ""})
        
    }
  return (
    <div className='container'>
        <div className="row">
        <div  className="col-md-4 h-25 p-3" >
                <img className="img-fluid" src={oneShow && oneShow[0].show.image ?oneShow[0].show.image.original : "https://img.freepik.com/free-vector/image-folder-concept-illustration_114360-114.jpg?w=740&t=st=1706711976~exp=1706712576~hmac=2e1c46140b527c4dbd24d65782cf83f4cc3f0ebce85f1bd00cb8d44169619d85"} alt="" />
            </div>
            <div className="col p-3">
            <form onSubmit={handleSubmit}>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Movie Title</label>
    <input type="text" readOnly className="form-control" id="title" aria-describedby="emailHelp" value={oneShow && oneShow[0].show.name} name='title' onChange={(e)=> setBooking({...booking, title: e.target.value})}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Language </label>
    <input type="text" readOnly className="form-control" id="language" aria-describedby="emailHelp" value={oneShow && oneShow[0].show.language} name='language' onChange={(e)=> setBooking({...booking, language: e.target.value})}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label w-25">Date</label>
    <input type="date" required className="form-control" name='date' value={booking.date} onChange={(e)=> setBooking({...booking, date: e.target.value})} id="date"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label w-25">Time</label>
    <input type="time" required className="form-control" name='time' value={booking.time} onChange={(e)=> setBooking({...booking, time: e.target.value})} id="time"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label w-25">No. of seats</label>
    <input type="number" required className="form-control" name='seats' value={booking.seats} onChange={(e)=> setBooking({...booking, seats: e.target.value})} id="seats"/>
  </div>

  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
        </div>
    </div>
  )
}

export default Form
