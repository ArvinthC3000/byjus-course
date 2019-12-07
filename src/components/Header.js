import React from 'react'
import Image from '../img/img1.png'

const Header = ({length, searchFilter, loading}) => {
    
  if (loading) {
    return (<img src={Image} alt="" width="50%" srcset=""/>)
  }

return (
    <div className="header_component">
        <div className="header_title">
            <h2>Find your dream course here</h2><span><p>Courses available: {length}</p></span>
        </div>
        <form>
        <input type="text" name="childSubject" onChange={searchFilter} placeholder="Search by provider or child subject..."/>
        </form>
    </div>

)
}

export default Header