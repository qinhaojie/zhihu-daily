const initState = {
  topStories: [],
  stories: []
}

const LOAD_LATEST = 'LOAD_LATEST'


export function loadLatest() {
  return (dispatch, getState) => {
    fetch('/zapi/api/4/news/latest')
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: LOAD_LATEST,
          data
        })
      })
  }
}

export default function home(state = initState, action) {
  switch (action.type) {
    case LOAD_LATEST:
      return {
        ...state,
        topStories: action.data['top_stories'],
        stories: action.data.stories
      }

    default:
      return state
  }
}
