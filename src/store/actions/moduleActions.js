import axios from 'axios';
import API from '../../components/common/APIHelper';
import {CREATE_MODULE, CREATE_MODULE_ERROR } from '../types/moduleTypes';

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