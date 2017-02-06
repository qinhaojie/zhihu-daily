export default function(store) {
  return next => action => {
    if (action.filter && action.text) {
      var text = action.text.replace(/https?:(\\)?\/(\\)?\/.{2,8}\.zhimg\.com/g, '/proxyimg')
      action.data = JSON.parse(text)
    }
    return next(action)
  }
}