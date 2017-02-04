const initState = {
  data: {}
}

const LOAD_CONTENT = 'LOAD_CONTENT'


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

export default function detail(state = initState, action) {
  switch (action.type) {
    case LOAD_CONTENT:
      return {
        data: action.data
      }

    default:
      return state
  }
}
