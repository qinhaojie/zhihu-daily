const initState = {
  shortComments: [],
  longComments: []
}

const LOAD_COMMENT = 'LOAD_COMMENT'
const LOAD_LONG_COMMENT = 'LOAD_LONG_COMMENT'

export function loadShortComments(id) {
  return (dispatch, getState) => {
    fetch(`/zapi/api/4/story/${id}/short-comments`)
      .then(r => r.text())
      .then(data => {
        dispatch({
          type: LOAD_COMMENT,
          filter: true,
          text: data
        })
      })
  }
}

export function loadLongComments(id) {
  return (dispatch, getState) => {
    fetch(`/zapi/api/4/story/${id}/long-comments`)
      .then(r => r.text())
      .then(data => {
        dispatch({
          type: LOAD_LONG_COMMENT,
          filter: true,
          text: data
        })
      })
  }
}



export default function detail(state = initState, action) {
  switch (action.type) {
    case LOAD_COMMENT:
      return {
        ...state,
        shortComments: action.data.comments
      }
    case LOAD_LONG_COMMENT: {
      return {
        ...state,
        longComments: action.data.comments
      }
    }

    default:
      return state
  }
}
