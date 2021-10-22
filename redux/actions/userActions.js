import { SAVE_LOGIN, LOGIN_ERROR, CLEAR_LOGIN } from "../constants/actionTypes";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";
import { loginType } from "../../components/global"


export const clearLoginData = () => {
    return (dispatch) => {
        destroyCookie(null, 'token');
        dispatch({ type: CLEAR_LOGIN });
    }
}

export const login_details = (userdata) => {
    return (dispatch) => {
        fetch(`/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userdata)
        })
            .then(res => res.json())
            .then(res2 => {
                console.log("response",res2)
                if (res2.success) {
                    dispatch({ type: SAVE_LOGIN, data: res2.user, token: res2.token });
                    document.cookie = `token=${res2.token};max-age=` + 60 * 60 * 24 * 365; //1yr
                    window.location.replace('/');
                  
                    console.log("response if",res2)
                    // console.log(res2)
                } else {
                    console.log("no response")
                    dispatch({ type: LOGIN_ERROR, data: res2.message });
                }
            }
            )

        // 
      
    }
}

// fetch(`/api/auth/login`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userdata)
// })
//     .then(res => res.json())
//     .then(res2 => {

//         if (res2.success) {
//             dispatch({ type: SAVE_LOGIN, data: res2.user, token: res2.token });
//             document.cookie = `token=${res2.token};max-age=` + 60 * 60 * 24 * 365; //1yr

//         } else {
//             dispatch({ type: LOGIN_ERROR, data: res2.message });
//         }
//     })