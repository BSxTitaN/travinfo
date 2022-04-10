import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const Axios = axios.create({
    baseURL: 'http://localhost/php-auth-api/',
});

export const UserContextProvider = ({children}) => {

    const [theUser, setUser] = useState(null);
    const [wait, setWait] = useState(false);

    const registerUser = async ({email_id,user_name,password,dob,gender,address,state,pincode}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('register.php',{
                email_id,
                user_name,
                password,
                dob,
                gender,
                address,
                state,
                pincode
            });
            setWait(false);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }

    const loginUser = async ({email_id,password}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('login.php',{
                email_id,
                password 
            });
            if(data.success && data.token){
                localStorage.setItem('loginToken', data.token);
                setWait(false);
                return {success:1};
            }
            setWait(false);
            return {success:0, message:data.message};
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }

    }

    const loggedInCheck = async () => {
        const loginToken = localStorage.getItem('loginToken');
        // console.log(loginToken);
        Axios.defaults.headers.common['Authorization'] = 'Bearer '+loginToken;
        try{
            const {data} = await Axios.get('getUser.php');
            console.log(data);
            if(data.success && data.user){
                setUser(data.user);
                return;
            }
            setUser(null);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        async function asyncCall(){
            await loggedInCheck();
        }
        asyncCall();
    },[]);

    const logout = () => {
        localStorage.removeItem('loginToken');
        setUser(null);
    }

    const feedbackUser = async ({email,user_name,u_fd}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('feedback.php',{
                email,
                user_name,
                u_fd
            });
            setWait(false);
            // console.log(data);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }

    const updateUser  = async ({email_id,user_name,address,desc,pincode,state,profile}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('profile.php',{
                email_id,
                user_name,
                desc,
                address,
                pincode,
                state,
                profile
            });
            setWait(false);
            console.log(data);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
      }

      const AddArticle = async ({ar_title,user_name,meta_desc,description,image}) => {
        setWait(true);
        try{
            const {data} = await Axios.post('ArticleRecieve.php',{
                ar_title,
                user_name,
                meta_desc,
                description,
                image
            });
            setWait(false);
            console.log(data);
            return data;
        }
        catch(err){
            setWait(false);
            return {success:0, message:'Server Error!'};
        }
    }

    return (
        <UserContext.Provider value={{registerUser,loginUser,wait, user:theUser,loggedInCheck,logout,feedbackUser,updateUser,AddArticle}}>
            {children}
        </UserContext.Provider>
    );

}

export default UserContextProvider;