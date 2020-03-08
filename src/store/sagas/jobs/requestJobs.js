import {
  call, delay, put, takeLatest
} from 'redux-saga/effects'
import { Types } from '../../ducks/jobs'
import { getJobs } from '../../httpServices'

function* requestJobs(params) {
  try {
    yield delay(500)
    const apiResponse = yield call(getJobs)
  
    yield put({
      type: Types.REQUEST_JOBS_SUCCESS,
      payload: apiResponse
    })
  } catch (error) {
    yield put({
      type: Types.REQUEST_JOBS_ERROR,
      error: error.toString()
    })
  }
}

export default [takeLatest(Types.REQUEST_JOBS, requestJobs)]
