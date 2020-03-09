import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  resetStore: [],
  requestJobs: [],
  requestJobsSuccess: [],
  requestJobsError: ['error']
})

const INITIAL_STATE = {
  loading: false,
  error: null
}

const resetStore = (state = INITIAL_STATE) => ({
  state
})
const requestJobs = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: INITIAL_STATE.error
})
const requestJobsSuccess = (state = INITIAL_STATE, { payload }) => ({
  ...state,
  jobs: payload?.data,
  loading: true,
  error: INITIAL_STATE.error
})

const requestJobsError = (state = INITIAL_STATE, { error }) => ({
  ...state,
  loading: false,
  error: error
})


export default createReducer(INITIAL_STATE, {
  [Types.RESET_STORE]: resetStore,
  [Types.REQUEST_JOBS]: requestJobs,
  [Types.REQUEST_JOBS_SUCCESS]: requestJobsSuccess,
  [Types.REQUEST_JOBS_ERROR]: requestJobsError
})
