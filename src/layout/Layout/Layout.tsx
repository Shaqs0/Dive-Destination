import { Outlet } from 'react-router-dom';
import { LayoutTop } from '../Top/LayoutTop';
import { LayoutFoot } from '../Footer/LayoutFoot';

export function Layout() {
	return (
		<div>
			<LayoutTop/>
			<main>
				<Outlet />
			</main>
			<LayoutFoot />
		</div>
	);
}

export default Layout;
