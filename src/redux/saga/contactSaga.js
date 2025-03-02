import { put, takeLeading } from 'redux-saga/effects'
import * as actionTypes from '../actionTypes'
import { postRequest } from '../../utils/apiRequest'
import { api_url, create_enquiry } from '../../config/constants'

function* addContactRequests(actions){
    try{
        yield put({type: actionTypes.SET_IS_LOADING, payload: true})

        const responce = yield postRequest({
            url: api_url + create_enquiry,
            data: actions.payload
        })

        if(responce?.success){
           console.log('Successfully submited')
        }

        yield put({type: actionTypes.SET_IS_LOADING, payload: false});
        
    }catch(e){
        yield put({type: actionTypes.SET_IS_LOADING, payload: false})
        console.log(e)
    }
}

export default function* contactSaga(){
    yield takeLeading(actionTypes.ADD_CONTACT_REQUESTS, addContactRequests)
}