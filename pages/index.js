import Navbar from "./navbar";
import Dashboard from "./dashboard";
import { parseCookies,destroyCookie } from 'nookies';
import { signOut } from 'next-auth/client'
import $ from "jquery";
import { useEffect } from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

export default function Home(props) {

  const router=useRouter()
  useEffect(() => {
    if($.isEmptyObject(props)) {
      router.replace('/signin')
    }else{
      router.replace('/')
    }
  },[])


  const logoutHandle=() => {
    signOut()
    destroyCookie(null,'tokenTest');
    router.replace('/signin')
  }
  var token=null;
  if(props) {
    token=props.token
  } else {
    console.log('props is empty');
  }

  return (
    <>
      {token?
        <div>
          <Navbar />
          <Dashboard />
        </div>
        :null}

    </>
  )
}

export async function getServerSideProps(ctx) {
  var { token }=parseCookies(ctx)
  if(token&&token!=undefined) {
    return { props: { token } }
  } else {
    return { props: {} }
  }
}
