import {StarOutline} from '@mui/icons-material';
import {Grid, Typography} from '@mui/material';

const NothingSelectedView = () => {
	return (
		<Grid container spacing={0} direction='column' alignItems='center' justifyContent='center'
		      sx={{minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 5}}>
			<Grid xs={12}>
				<StarOutline sx={{fontSize: 100, color: 'white'}} />
			</Grid>
			<Grid xs={12}>
				<Typography color='white' variant='h5'>Selecciona o crea una Nota</Typography>
			</Grid>
		</Grid>
	);
};

export {NothingSelectedView};