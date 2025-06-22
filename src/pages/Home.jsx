import {React } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
    return (
        <>
        
        
        <div className="hero bg-base-200 min-h-screen">
            
        <div className="hero-content text-center">

            
            <div className="hero flex w-full flex-col lg:flex-row">
                <div className="card w-96 bg-base-100 card-xl shadow-sm mb-2">
                    <div className="card-body">
                        <h2 className="card-title">STUDENT</h2>
                        <p>Login to your account with your credentials</p>
                        <div className="justify-end card-actions">
                            <Link to="/Login">
                                <button className="btn btn-primary text-lg">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 card-xl shadow-sm mb-2">
                    <div className="card-body">
                        <h2 className="card-title">STAFF</h2>
                        <p>Login to your account with your credentials</p>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary text-lg">Login</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 card-xl shadow-sm mb-2">
                    <div className="card-body">
                        <h2 className="card-title">ADMIN</h2>
                        <p>Login to your account with your credentials</p>
                        <div className="justify-end card-actions">                            
                            <button className="btn btn-primary text-lg">Login</button>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        
        </>
    )
}

export default Home
