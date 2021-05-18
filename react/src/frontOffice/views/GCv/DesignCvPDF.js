import React from 'react';

const DesignCvPDF = (props) => {
    return (
<div className="col-lg-8 mx-auto text-center mt-5">
            <h1>
                Let's generate your Resume !
            </h1>
            <p>Please provide your information wherever necessary!</p>
            <hr/>
            <div className="card">
                <div className="card-body">
                    <form>
                    <h3>Personnal Info</h3>
                    <br/>
                    <hr/>
                    <br/><hr/>
                    <div className="row col-lg-10 mx-auto">
                            <button className="btn btn-primary btn-block">Create</button>
                    </div> 
                    </form>
                    <br/>
                    <a href="#" className="card-link">Card link</a>
                </div>
                </div>
        </div>
    );
};

export default DesignCvPDF;