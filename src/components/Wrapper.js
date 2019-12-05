import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import Pagination from './Pagination';
import axios from 'axios';

const Wrapper = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(50);


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

    // Get current posts
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <DataComponent data={currentData} loading={loading} />
            <Pagination
                postsPerPage={dataPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </div>
    )
}

export default Wrapper 