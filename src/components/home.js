import React from "react";

const Home = () => {
    return(
        <>
            <div className="home-container">
                <div className="left-home-container">
                    <p>Welcome</p><br/>
                    <p>I m <br/><span>Sowmya Gorripati</span></p>
                    </div>
                <div className="right-home-container">
                    <img src="my.jpg" alt="display" width="400px" height="500px"></img>
                </div>
            </div>
            
        </>
    );
}

export default Home;