import { useRouter } from "next/dist/client/router";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";


export default function navbar() {

    const router = useRouter()
    const dispatch = useDispatch();
    const logindata = useSelector((state) => state.user);
    var islogged = logindata.islogged

    let userID, user_Type = null;
    if (islogged) {
        userID = logindata.userdata._id
        user_Type = logindata.userdata.userType
    }
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    No More Recoding
                </div>
                <ul className="sidebar-navigation">
                    {/* <li className="header">Navigation</li> */}

                    <li>
                        <Link href={"/"}>
                            <a> <i className="fa fa-tachometer-alt" aria-hidden="true"></i> Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-info-circle" aria-hidden="true"></i> Information
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-cog" aria-hidden="true"></i> Settings
                        </a>
                    </li>
                    {islogged ? 
                    <>
                    <li>
                        <a href="#">
                            <i className="fa fa-cog" aria-hidden="true"></i> Activated Plugins
                        </a>
                    </li>

                        <li>
                        <a href="#">
                            <i className="fa fa-cog" aria-hidden="true"></i> Send Email
                        </a>
                    </li>
                    </>
                    : null }

                </ul>
            </div>
        </>
    )
}