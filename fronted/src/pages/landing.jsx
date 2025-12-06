import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
      <div class="navHeader">
    <h2 class="runBorder">ChatRoom</h2>
</div>


                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span id="h1">Connect</span>❤️आइए दिल से दिल मिलाते हैं❤️</h1>

                    <p className='para'>Let’s share the good moments of life.</p>
                    <div role='button'>
                        <Link to={"/auth"}  className='sty'>Let's Talk</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>



        </div>
    )
}
