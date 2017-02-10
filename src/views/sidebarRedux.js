const initState = {
  visible: false,
  themes: []
}


const SET_VISIBLE = 'SET_VISIBLE'
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
const LOAD_THEMES = 'LOAD_THEMES'
export function setVisible(bool) {
  return {
    type: SET_VISIBLE,
    visible: bool
  }
}

export function loadThemes() {
  return (dispatch) => {
    return fetch(`/zapi/api/4/themes`)
      .then(r => r.text())
      .then(data => {
        dispatch({
          type: LOAD_THEMES,
          text: data,
          filter: true
        })
      })
  }
}

export default function sidebar(state = initState, action) {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        ...state,
        visible: action.visible
      }
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        visible: !state.visible
      }
    case LOAD_THEMES: {
      return {
        ...state,
        themes: action.data.others
      }
    }
    default:
      return state
  }
}
