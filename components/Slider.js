import React from 'react'

function Slider() {
    return (
        <div className='mt-3'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/banner2.jpg" alt="First slide" style={{width:"1000px", height: "400px"}}/>
                    </div>
                    <div className="carousel-item" >
                        <img className="d-block w-100" src="/banner1.jpg" alt="Second slide" style={{width:"1000px", height: "400px"}}/>
                    </div>
                    <div className="carousel-item" >
                        <img className="d-block w-100" src="/banner3.jpg" alt="Second slide" style={{width:"1000px", height: "400px"}}/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div></div>
    )
}

export default Slider