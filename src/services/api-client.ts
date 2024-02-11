import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'f08a9284de054e3f8f55a73b827fc2b0',
	},
});
