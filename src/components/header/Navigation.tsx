import { Outlet, NavLink } from 'react-router-dom';
import { Nav, Layout, activeStyle } from './styles/stylesnav';
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';
import { logo } from '../../config/colorPalette'
import React from 'react';

export const HeaderNav = () => {
	return (
		<Layout>
			<Nav>
				<div>
					<img src={logo} alt="logo" />
				</div>
				<li>
					<NavLink
						to={'/'}
						style={({ isActive }) => {
							return isActive ? activeStyle : undefined;
						}}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/courses'}
						style={({ isActive }) => {
							return isActive ? activeStyle : undefined;
						}}
					>
						Cursos
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/articles'}
						style={({ isActive }) => {
							return isActive ? activeStyle : undefined;
						}}
					>
						Artigos
					</NavLink>
				</li>
				<div>
					<FaRegUserCircle className="icon" id="user" />
				</div>
			</Nav>
			<Outlet />
		</Layout>
	);
};
