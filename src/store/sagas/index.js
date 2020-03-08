import { all } from 'redux-saga/effects'
import jobs from './jobs'

export default function* root() {
  yield all([
    ...jobs
  ])
}
