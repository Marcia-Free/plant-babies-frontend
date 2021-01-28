// action - is an object with, at a minimum, a type key. It often also has a payload.

// actionCreator - is a function that produces (returns) an action


export const fetchPlantsSuccess = (plants) => {
    return {
      type: 'FETCH_PLANTS_SUCCESS',
      plants: plants
    }
  }
  

//   export const upVote = (id) => {
//     return {
//       type: 'UPVOTE',
//       id: id
//     }
//   }
  
  export const deletePlant = (id) => {
    return {
      type: 'DELETE_PLANT',
      id: id
    }
  }