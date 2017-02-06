const initState = {
  topStories: [],
  stories: [],
  date: ''
}

const LOAD_LATEST = 'LOAD_LATEST'
const LOAD_BEFORE = 'LOAD_BEFORE'

export function loadLatest() {
  return (dispatch, getState) => {
    return fetch('/zapi/api/4/news/latest')
      .then(r => r.text())
      .then(data => {
        dispatch({
          type: LOAD_LATEST,
          text: data,
          filter: true
        })
      })
  }
}

export function loadBefore(date) {
  return (dispatch, getState) => {
    return fetch(`/zapi/api/4/news/before/${date}`)
      .then(r => r.text())
      .then(data => {
        dispatch({
          type: LOAD_BEFORE,
          text: data,
          filter: true
        })
        return date
      })
  }
}

export default function home(state = initState, action) {
  switch (action.type) {
    case LOAD_LATEST:
      return {
        ...state,
        topStories: action.data['top_stories'],
        stories: action.data.stories,
        date: action.data.date
      }
    case LOAD_BEFORE:
      const stories = [...state.stories, ...action.data.stories]
      return {
        ...state,
        stories
      }

    default:
      return state
  }
}
