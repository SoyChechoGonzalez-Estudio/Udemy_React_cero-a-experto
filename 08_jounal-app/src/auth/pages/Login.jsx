import {useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import {Google} from '@mui/icons-material';
import {Alert, Button, Grid, Link, TextField} from '@mui/material';

import {useForm} from '../../hooks';
import {startGoogleSignIn, startLoginWithEmailPassword} from '../../store/auth';
import {AuthLayout} from '../layout/AuthLayout';


const Login = () => {
	
	const {status, errorMessage} = useSelector(state => state.auth);
	
	const dispatch = useDispatch();
	
	const {email, password, onInputChange} = useForm({
		email:    '',
		password: ''
	});
	
	const isAuthenticating = useMemo(() => status === 'checking', [status]);
	
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(startLoginWithEmailPassword({email, password}));
	};
	
	const onGoogleSignIn = () => {
		console.log('On Google Sign In');
		dispatch(startGoogleSignIn());
	};
	
	
	return (
		<AuthLayout title='Login'>
			<form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
				<Grid container>
					<Grid item xs={12} sx={{mt: 2}}>
						<TextField label='Correo' type='email' placeholder='correo@google.com' fullWidth name='email' value={email}
						           onChange={onInputChange} />
					</Grid>
					
					<Grid item xs={12} sx={{mt: 2}}>
						<TextField label='Contraseña' type='password' fullWidth name='password' value={password}
						           onChange={onInputChange} />
					</Grid>
					
					<Grid container spacing={2} sx={{mb: 2, mt: 1}}>
						<Grid container display={!!errorMessage ? '' : 'none'} sx={{mt: 1}}>
							<Grid item xs={12}>
								<Alert severity='error'>{errorMessage}</Alert>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button type='submit' variant='contained' fullWidth disabled={isAuthenticating}>Login</Button>
						</Grid>
						
						<Grid item xs={12} sm={6}>
							<Button variant='contained' fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
								<Google />
							</Button>
						</Grid>
					</Grid>
					
					<Grid container direction='row' justifyContent='end'>
						<Link component={RouterLink} color='inherit' to='/auth/register'>
							Crear cuenta
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};

export {Login};
