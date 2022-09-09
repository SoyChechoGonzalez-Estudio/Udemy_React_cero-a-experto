import {Route, Routes} from 'react-router-dom';
import {Login} from '../auth';
import {HeroesRoutes} from '../heroes';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

const AppRouter = () => {
	return (
		<>
			<Routes>
				{/* <Route path='login' element={<Login />} /> */}
				<Route path='login/*' element={
					<PublicRoute>
						<Routes>
							<Route path='/*' element={<Login />} />
						</Routes>
					</PublicRoute>
				} />
				<Route path='/*' element={
					<PrivateRoute>
						<HeroesRoutes />
					</PrivateRoute>
				} />
			</Routes>
		</>
	);
};

export {AppRouter};