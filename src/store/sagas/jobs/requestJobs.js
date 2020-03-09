import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { getJobs } from '../../httpServices'
import { Types } from '../../ducks/jobs'

function* requestJobs() {
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
