import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import DataComponent from "./DataComponent"

class Wrapper extends Component {

    state = {
        // nextSessionDate: [],
        // childSubject: [],
        // provider: [],
        // coursesButton: false,
        // providerButton: false,
        // subjectButton: false,
        // instituteButton: false,
        data: []
    }
    // initialData = {
    //     data: [],
    //     nextSessionDate: [],
    //     childSubject: [],
    //     provider: []
    // }
    async componentDidMount(){
        const raw_data = await fetch('https://nut-case.s3.amazonaws.com/coursessc.json') 
        const data = await raw_data.json()
        console.log(data)
        this.setState({data})
        console.log(this.state.data)
        // const repetitiveNextSession = data.map(item =>{
        //     const childSubject= item["Next Session Date"]
        //     return childSubject
        // })
        // const repetitiveChildSubject = data.map(item =>{
        //     const data= item["Child Subject"]
        //     return data
        // })
        
        // const provider = data.map(item =>{
        //     const {Provider}= item
        //     return Provider
        // })
        // this.initialData={
        //     data: data,
        //     nextSessionDate: [...new Set(repetitiveNextSession)].sort(),
        //     childSubject: [...new Set(repetitiveChildSubject)].sort(),
        //     provider: [...new Set(provider)].sort()
        // }
        // const datum = this.initialData.data.slice(0,5)
        // datum.map(item=>console.log(item))
        // console.log(this.initialData.data.slice(0,5))
        // const comp = this.state.data.map(item=><DataComponent />)
    }

    // setFunction = async (e) => {
    //     this.setState({
    //         coursesButton: false,
    //         providerButton: false,
    //         subjectButton: false,
    //         instituteButton: false
    //     })
    //     // console.log([e.target.name])
    //     this.setState({ [e.target.name]: true })
    // }
    
    handleChange = (e) =>{
        
        if(e.target.name === "nextSessionDate"){
            // this.setState({nextSessionDate:true})
            ReactDOM.findDOMNode(this.refs.childSubject).value = ""
            ReactDOM.findDOMNode(this.refs.provider).value= ""
        } else if(e.target.name === "childSubject"){
            ReactDOM.findDOMNode(this.refs.nextSessionDate).value = ""
            ReactDOM.findDOMNode(this.refs.provider).value = ""
        } else {
            ReactDOM.findDOMNode(this.refs.nextSessionDate).value = ""
            ReactDOM.findDOMNode(this.refs.childSubject).value = ""
        }
        
        const value = e.target.value;
        const [name] = [e.target.name];
        const {nextSessionDate,childSubject,provider} = this.initialData
        let suggestions = []
        if(Object.keys(this.state)[0]===name){
            if(value.length>0){
                suggestions =  nextSessionDate.filter((v)=>new RegExp(`^${value}`,'i').test(v))
            }
        }
        else if(Object.keys(this.state)[1]===name){
            if(value.length>0){
                suggestions =  childSubject.filter((v)=>new RegExp(`^${value}`,'i').test(v))
            }
        }
        else if(Object.keys(this.state)[2]===name){
            if(value.length>0){
                suggestions =  provider.filter((v)=>new RegExp(`^${value}`,'i').test(v))
            }
        }
        this.setState({ [e.target.name]:suggestions })
    }
    
    render() {
        return (
            <div>
                <div className="resultContainer__main">
                    <div className="resultComponent">
                        <button name="coursesButton" onClick={this.setFunction}>See all Courses</button>
                        <button name="providerButton" onClick={this.setFunction}>Providers</button>
                        <button name="subjectButton" onClick={this.setFunction}>Subject</button>
                        <button name="instituteButton" onClick={this.setFunction}>Institute</button>
                        <div className="dataComp__parent">
                            {/* true?{this.state.coursesButton===true && this.state.data.map(item=><DataComponent key={this.state.data["Course Id"]} coursesButton={true} data={item} />)}
                            {this.state.providerButton===true && this.initialData.provider.map(item=><DataComponent key={this.state.data["Course Id"]} providerButton={true} data={item} />)}
                            {this.state.subjectButton===true && this.initialData.childSubject.map(item=><DataComponent key={this.state.data["Course Id"]} subjectButton={true} data={item} />)}
                            {this.state.instituteButton===true && this.state.data.map(item=><DataComponent key={this.state.data["Course Id"]} instituteButton={true} data={item} />)} */}
                            {this.state.data.map(item=><DataComponent key={this.state.data["Course Id"]} data={item} />)}

                        </div>
                        <div>comp</div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Wrapper