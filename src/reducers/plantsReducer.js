
export default function plants(state = [], action) {

  switch(action.type) {
    case "test1":
      return '1'
    case "test2":
      return '2'
    case "test3":
      return '3'
    default:
      return state
  }
}