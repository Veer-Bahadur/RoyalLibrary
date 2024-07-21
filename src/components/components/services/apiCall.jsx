import { genericMiddleware } from './middleware.jsx'
import server from './server.tsx'

export const addAdmin = async (formData) => {
    const URL = `${server.server}/admin/add-admin`
    console.log('URL ', URL)
    const auth_token = localStorage.getItem('token');
    try {
        let res = await fetch(URL, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Authorization: auth_token ? `Bearer ${auth_token}` : ''
            },
            body: JSON.stringify(formData)
        })
        let data = await res.json()
        console.log('DATA RECIVED ', data)
        return genericMiddleware(res.status , data)
    } catch (error) {
        console.log('GET_OTP ERROR', error)
        return {...genericMiddleware(400 , null),error}
    }
}
