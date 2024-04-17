import React from 'react';
import './navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

function Navbar(props) {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()
    const logOut=()=>{
        dispatch(logout())
    }

    return (
			<div className="header">
				<div className="container mx-auto">
					<div className="flex justify-between items-center py-5">
						<div className="logo w-52">
							<Link to="/">
								<img src={Logo} alt="digi card" />
							</Link>
						</div>
						<div className="header-right flex items-center">
							{
								userInfo ?
								(
									<>
										<Link to="/create-card">
											<button
													type="button"
													className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-2"
												>
												Create card
											</button>
										</Link>
										<Link to="/dashboard">
											<button
													type="button"
													className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-2"
												>
												Dashboard
											</button>
										</Link>
										<Link to="/login">
											<button
												type="button"
												className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={logOut}
											>
												Log out
											</button>
										</Link>
									</>
								) :
								(
									<>
										<Link to='/login'>
											<button
												type="button"
												className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-2"
											>
												Sign in
											</button>
										</Link>
										<Link to='/register'>
											<button
												type="button"
												className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
											>
												Sign up
											</button>
										</Link>
									</>
								)
							}
						</div>
					</div>
				</div>
			</div>
    );
}

export default Navbar;