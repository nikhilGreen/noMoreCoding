import Navbar from "./navbar";
import Link from 'next/link'


export default function sendEmail() {
    return (
        <div>
            <Navbar />
            <main>
                <div className="content-container">
                    <div className="container-fluid">
                        {/* 
    <!-- Main component for a primary marketing message or call to action --> */}
                        <div style={{ marginLeft: 20 }}>
                            <div>
                                <h2>Step 1 :</h2>
                                <p>Secure your credentials. Dont let others to see. Click on encrpt</p>

                                {/* <!-- Button trigger modal --> */}
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Encrypt
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            {/* <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div> */}
                                            <div className="modal-body">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12">
                                                        <span className="anchor" id="formRegister"></span>


                                                        <div className="card card-outline-secondary">
                                                            {/* <div className="card-header">
                                                                <h3 className="mb-0">Sign Up</h3>
                                                            </div> */}
                                                            <div className="card-body">
                                                                <form autocomplete="off" className="form" role="form">

                                                                    <div className="form-group">
                                                                        <label for="inputEmail3">User Email</label>
                                                                        <input className="form-control" id="inputEmail3" placeholder="Email" required="" type="email" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label for="inputPassword3">Password</label>
                                                                        <input className="form-control" id="inputPassword3" placeholder="Password" required="" type="password" />
                                                                        {/* <small className="form-text text-muted" id="passwordHelpBlock">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small> */}
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label for="inputName">Domain</label>
                                                                        <input className="form-control" id="inputName" placeholder="Full name" type="text" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label for="inputName">Port</label>
                                                                        <input className="form-control" id="inputName" placeholder="Full name" type="text" />
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label for="inputVerify3">Verify</label>
                                                                        <input className="form-control" id="inputVerify3" placeholder="Password (again)" required="" type="password" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                        <button className="btn btn-success btn-lg float-right" type="submit">Generate</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop:22}}>
                                <h2>Step 2 :</h2>
                                <p>Copy the given code.</p>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}
