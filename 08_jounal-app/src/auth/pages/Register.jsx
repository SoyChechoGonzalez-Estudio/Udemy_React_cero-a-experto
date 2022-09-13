import {Link as RouterLink} from 'react-router-dom';
import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import {AuthLayout} from '../layout/AuthLayout';

const Register = () => {
	return (
		<AuthLayout title='Crear cuenta'>
			<form action=''>
				<Grid container>
					
					<Grid item xs={12} sx={{mt: 2}}>
						<TextField label='Nombre Completo' type='text' placeholder='John Doe' fullWidth />
					</Grid>
					
					<Grid item xs={12} sx={{mt: 2}}>
						<TextField label='Correo' type='email' placeholder='john@doecom' fullWidth />
					</Grid>
					
					<Grid item xs={12} sx={{mt: 2}}>
						<TextField label='Contraseña' type='password' placeholder='' fullWidth />
					</Grid>
					
					<Grid container spacing={2} sx={{mb: 2, mt: 1}}>
						<Grid item xs={12}>
							<Button variant='contained' fullWidth>
								Crear cuenta
							</Button>
						</Grid>
					</Grid>
					
					<Grid container direction='row' justifyContent='end'>
						<Typography sx={{mr: 1}}>
							Ya tengo una cuenta
						</Typography>
						<Link component={RouterLink} color='inherit' to='/auth/login'>
							Iniciar Sesión
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

export {Register};

