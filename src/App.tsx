import React from 'react';
import { RootRouter } from './routers/Root.router';

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
	return (
		<div>
			<RootRouter />
		</div>
	);
};
