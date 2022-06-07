import axios from 'axios';

import { SET_MESSAGE, setMessage } from '../actions/message';

const axiosInstance = axios.create({
  baseURL: 'https://rbefayt-portfolio-api.herokuapp.com',
});

const messageMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SET_MESSAGE:
            axiosInstance.post(
                '/contact',
                {
                    message: action.message,
                },
            ).then((response) => {
                console.log(response);
                store.dispatch(setMessage(response));
            })

            next(action);
        break;

        default:
            next(action);
    }
};

export default messageMiddleware;