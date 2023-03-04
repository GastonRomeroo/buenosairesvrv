import React from "react";

const Loading = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="spinner-grow text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;