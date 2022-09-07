import {useState} from 'react';
import {UserContext} from './UserContext.jsx';

// const user = {
// 	id   : 1,
// 	name : 'John',
// 	email: 'john@example.com'
// };

const UserProvider = ({children}) => {
	
	const [user, setUser] = useState();
	
	return (
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	);
};

export {UserProvider};