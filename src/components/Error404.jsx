const Error404 = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-80">
            <div className=" col-md-6 mt-5">
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you re looking for doesn't exist.
                </p>
            </div>
        </div>
    )
}
export default Error404;