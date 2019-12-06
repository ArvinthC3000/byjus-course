import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import Pagination from './Pagination';
import Header from './Header';
import axios from 'axios';

const Wrapper = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(50);
    const [searchkey, setSearchkey] = useState("")
    let length = data.length;


    // Fetch data
    useEffect(()=>{
        const fetchObject = async () => {
            setLoading(true)
            const response = await axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
            
            setData(response.data)
            setLoading(false)
        }
        
        fetchObject();
    }, [])

    // Pagination
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    // Handlers
    let searchFilter = async (e) => {
        setSearchkey(e.target.value)
    }
    let submitHandler = (e) => {
        e.preventDefault()
        let sortedArray = []
        data.forEach(datum => {
            if(datum.Provider === searchkey || datum["Child Subject"] === searchkey || datum["Next Session Date"] === searchkey  ) {
                sortedArray.push(datum)
            }
        })
        setData(sortedArray)
    }


    return (
        <div className="container_wrapper">
            <Header 
               length = {length}
               searchFilter={searchFilter}
               submitHandler={submitHandler}
               loading={loading}
            />
            <DataComponent 
                data={currentData} 
                loading={loading} 
            />
            <Pagination
                postsPerPage={dataPerPage}
                totalPosts={data.length}
                paginate={paginate}
                loading={loading}
            />
        </div>
    )
}

export default Wrapper 