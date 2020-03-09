import axios from 'axios'
import qs from 'qs'

const API_URL = 'https://api.teamtailor.com/v1/jobs'
const API_KEY = '093xQC43ZGcZuM-ostMD-BUq6sfkvScL0PiBHjPJ'

const getJobs = async () => axios.get(API_URL, {
  headers: {
    Authorization: `Token token=${ API_KEY }`,
    Accept: 'application/vnd.api+json',
    'X-Api-Version': 20161108
  },
  params: {
    // page: {
    //   size: 10,
    //   number: 1
    // }
    include: 'locations,role,user,department'
  },
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

export {
  getJobs
}
