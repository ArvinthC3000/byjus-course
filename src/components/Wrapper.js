import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
import Pagination from './Pagination';
import Header from './Header';

const Wrapper = () => {
    const [data, setData] = useState([])
    const [processData, setProcessData] = useState(data)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(50);
    let length = processData.length;
    


    // Fetch data
    useEffect(()=>{
        const fetchObject = async () => {
            setLoading(true)
            await fetch('https://nut-case.s3.amazonaws.com/coursessc.json')
            .then(res => res.json())
            .then(res => {
                setData(res)
                setProcessData(res)
            })
            .then(()=>{
            })
            setLoading(false)
        }
        fetchObject();
    }, [])

    // Pagination
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = (processData).slice(indexOfFirstData, indexOfLastData);
    
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    // Handlers
    let searchFilter = async (e) => {
        setLoading(true)
        const temp = e.target.value 
        const regex = new RegExp(temp, "i")
        let dataArray = []
        data.map(datum => {
            if(regex.test(datum.Provider) ||
            regex.test(datum["Child Subject"]) ||
            regex.test(datum["Next Session Date"])||
            temp===""){
                dataArray.push(datum)
            }
            return datum
        })
        setProcessData(dataArray)
        setLoading(false)
    }


    return (
        <div className="container_wrapper" >
            <Header 
               key = {currentData['Course Id']}
               length = {length}
               searchFilter={searchFilter}
               loading={loading}
            />
            <DataComponent 
                key = {currentData['Course Id']}
                data={currentData} 
                loading={loading} 
                totalPosts={currentData.length}
            />
            <Pagination
                key = {currentData['Course Id']}
                postsPerPage={dataPerPage}
                totalPosts={processData.length}
                paginate={paginate}
                loading={loading}
            />
        </div>
    )
}

export default Wrapper 