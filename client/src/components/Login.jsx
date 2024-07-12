import React from 'react'
import TodoItems from './TodoItems';
import { useAuth0 } from "@auth0/auth0-react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LogoutIcon from '@mui/icons-material/Logout';

const Login = () => {

    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <div >
            {isAuthenticated ?
                <div>
                    <div className='flex justify-end'>
                        <button className=" my-2 mx-4 text-[#8D8FFE]
        hover:text-[#1918A0]  active:text-[#5757EB] " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log out <LogoutIcon fontSize='small' />
                        </button>
                    </div>
                    <TodoItems email={user.email} name={user.name} />
                </div>
                :
                <div className='xl:mt-40 lg:mt-28 mt-10 mx-8 inline-block text-center text-[#1918A0] '>
                    <h1  className="text-center text-4xl font-semibold ">Welcome to Your To-Do List App</h1>
                    <p className='text-xl mt-6'>
                        Stay organized and boost your productivity with our intuitive to-do list app!
                        Whether you're managing daily tasks, or setting goals, our app is here to help you stay on
                        top of everything. Effortlessly sync your to-do lists across devices, allowing you to stay organized and 
                        focused whether you're at your desk or on the go. Start your journey towards better productivity today. Log in to get started!
                    </p>
                    <button className="m-8 w-2/12 h-10 text-white bg-[#5757EB] 
                hover:bg-[#1918A0]  active:bg-[#8D8FFE] " onClick={() => loginWithRedirect()}>Log In</button>
                </div>

            }
        </div>
    )
}

export default Login
