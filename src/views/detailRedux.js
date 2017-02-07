const initState = {
  content: {},
  extra: {}
}

const LOAD_CONTENT = 'LOAD_CONTENT'
const LOAD_EXTRA = 'LOAD_EXTRA'

export function loadContent(id) {
  return (dispatch, getState) => {
    fetch('/zapi/api/4/news/' + id)
      .then(r => r.text())
      .then(data => {
        dispatch({
          type: LOAD_CONTENT,
          filter: true,
          text: data
        })
      })
  }
}

export function loadExtra(id) {
  return (dispatch, getState) => {
    fetch('/zapi/api/4/story-extra/' + id)
      .then(r => r.json())
      .then(data => {
        dispatch({
          type: LOAD_EXTRA,
          data
        })
      })
  }
}



export default function detail(state = initState, action) {
  switch (action.type) {
    case LOAD_CONTENT:
      return {
        ...state,
        content: action.data
      }
    case LOAD_EXTRA: {
      return {
        ...state,
        extra: action.data
      }
    }

    default:
      return state
  }
}
