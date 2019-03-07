import axios from 'axios';
import API from '../../components/common/APIHelper';

export const CREATE_MODULE = 'CREATE_MODULE';
export const GET_MODULE = 'GET_MODULE';
export const UPDATE_MODULE = 'UPDATE_MODULE';
export const DELETE_MODULE = 'DELETE_MODULE';
export const CREATE_MODULE_ERROR = 'CREATE_MODULE_ERROR';

export const createModule = (module) => {
    return (dispatch, getState) => {
        axios.post(API.URI + 'api/v1/modules', {
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token'),
                    'username': localStorage.getItem('username')
                },
                mode: 'cors',
                module: module.module,
                parent_module_id: (module.parent_module_id === '')? null : module.parent_module_id,
                is_active: true,
                description: module.description,
                creator_id: module.creator_id
            }
        ).then( function(response) {
            dispatch({ type: CREATE_MODULE, module: response });
        }).catch(error => {			
            dispatch({ type: CREATE_MODULE_ERROR, error });
        });        
    }
}