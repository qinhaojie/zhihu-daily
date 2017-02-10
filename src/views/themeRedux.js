const initState = {
  "stories": [],
  "description": "",
  "name": "",
  "image": "",
  "editors": [
      // {
      //     "url": "http://www.zhihu.com/people/moheng-esther",
      //     "bio": "树上的女爵",
      //     "id": 79,
      //     "avatar": "/proxyimg/0a6456810_m.jpg",
      //     "name": "刘柯"
      // }
  ],
  image_source: '',
  color: 0,
  background: ''
}


const LOAD_THEME_INFO = 'LOAD_THEME_INFO'



export function loadThemeInfo(id) {
  return (dispatch) => {
    return fetch(`/zapi/api/4/theme/${id}`)
      .then(r => r.text())
      .then(data => {
        dispatch({
          type: LOAD_THEME_INFO,
          text: data,
          filter: true
        })
      })
  }
}

export default function theme(state = initState, action) {
  switch (action.type) {
    case LOAD_THEME_INFO: {
      console.log(action.data)
      return {
        
        ...action.data
      }
    }
    default:
      return state
  }
}
