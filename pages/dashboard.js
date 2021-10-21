import Link from 'next/link';

export default function dashboard() {
    return (
        <div>
            <main>
                <div className="content-container">
                    <div className="container-fluid">
                        {/* 
    <!-- Main component for a primary marketing message or call to action --> */}
                        <div className="jumbotron">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Send Email</h5>
                                    <p className="card-text">Send email securely.</p>
                                    <Link href={"/"} >
                                        <a className="btn btn-success">Activate</a>
                                    </Link>

                                    <a href="#" className="btn btn-danger" style={{ marginLeft: 10 }}>Deactivate</a>
                                </div>
                            </div>

                            <div className="card" style={{ marginTop: 15 }}>
                                <div className="card-body">
                                    <h5 className="card-title">Send Email</h5>
                                    <p className="card-text">Send email securely.</p>
                                    <a href="#" className="btn btn-success">Activate</a>
                                    <a href="#" className="btn btn-danger" style={{ marginLeft: 10 }}>Deactivate</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
