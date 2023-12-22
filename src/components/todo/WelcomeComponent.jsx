import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { retrieveHelloWorldBeanRestApi, retrieveHelloWorldRestApi, retrieveHelloWorldUserNameRestApi } from "./api/retrieveHelloWorldRestApiService";

export default function WelcomeComponent() {

    const {username} = useParams()

    const [message, setMessage] = useState(null)

    const [message1, setMessage1] = useState(null)

    const [message2, setMessage2] = useState(null)

    function callHelloWorldRestApi() {
        console.log("Called")

        retrieveHelloWorldRestApi()
        .then( (response) => successResponse(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log('cleanup'))
    }

    function callHelloWorldBeanRestApi() {
        console.log("Called")

        retrieveHelloWorldBeanRestApi()
        .then( (response) => successResponse1(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log('cleanup'))
    }

    function callHelloWorldUserNameRestApi() {
        console.log("Called")

        retrieveHelloWorldUserNameRestApi('Kundan')
        .then( (response) => successResponse2(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log('cleanup'))
    }

    function successResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function successResponse1(response) {
        console.log(response)
        setMessage1(response.data.message)
    }

    function successResponse2(response) {
        console.log(response)
        setMessage2(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your Todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className="text-info">{message}</div>
            <div>
                <button className="btn btn-primary m-5" onClick={callHelloWorldBeanRestApi}>Call Hello world Bean</button>
            </div>
            <div className="text-info">{message1}</div>
            <div>
                <button className="btn btn-secondary m-5" onClick={callHelloWorldUserNameRestApi}>Hello world user </button>
            </div>
            <div className="text-info">{message2}</div>
        </div>
    )
}
