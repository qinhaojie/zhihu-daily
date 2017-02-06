const initState = {
  topStories: [],
  stories: [], // [{date:'',stories;[]},{}]
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
    case LOAD_LATEST: {
      // 最新的日期与条数都与state中的第一个相同时候，不用更新state
      if (state.stories[0] && action.data.date === state.stories[0].date) {
        if (state.stories[0].stories.length === action.data.stories.length) {
          return state
        }
      }
      let stories = [
        {
          stories: action.data.stories,
          date: action.data.date
        },
        ...state.stories
      ]
      return {
        ...state,
        topStories: action.data['top_stories'],
        stories,
        date: action.data.date
      }
    }
    case LOAD_BEFORE: {
      let stories = [...state.stories, {
        stories: action.data.stories,
        date: action.data.date
      }]
      return {
        ...state,
        stories
      }
    }
    default:
      return state
  }
}
