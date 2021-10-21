import { useRouter } from "next/dist/client/router";
import Link from 'next/link';

export default function navbar() {

    const router = useRouter()

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

                </ul>
            </div>
        </>
    )
}