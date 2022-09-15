import {Box, Toolbar} from '@mui/material';
import {Navbar, Sidebar} from '../components';


const drawerWidth = 240;

const JournalLayout = ({children}) => {
	return (
		<Box sx={{display: 'flex'}} className='animate__animated animate__fadeIn animate__faster'>
			{/* Navbar drawerWidth */}
			<Navbar drawerWidht={drawerWidth} />
			
			{/* Sidebar drawerWidth */}
			<Sidebar drawerWidth={drawerWidth} />
			
			<Box component='main' sx={{flexGrow: 1, p: 3}}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

export {JournalLayout};