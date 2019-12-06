import React from 'react'
// import Image from '../img/img1.png'

const Header = ({length, submitHandler, searchFilter}) => {
    
//   if (loading) {
//     return (<img src={Image} alt="" width="50%" srcset=""/>)
//   }

return (
    <div className="header_component">
        <div className="header_title">
            <h2>Find your dream course here</h2><span><p>Courses available: {length}</p></span>
        </div>
        <form onSubmit={submitHandler}>
        <input type="text" name="childSubject" onChange={searchFilter} placeholder="Search by provider or child subject..."/>
        <button className="header_search">Search</button>
        </form>
    </div>

)
}

export default Header