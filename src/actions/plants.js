// action - is an object with, at a minimum, a type key. It often also has a payload.

// actionCreator - is a function that produces (returns) an action


export const fetchPlantsSuccess = (plants) => {
    return {
      type: 'FETCH_PLANTS_SUCCESS',
      plants: plants
    }
  }
  

  export const createPlantSuccess = (newPlant) => {
    return {
      type: 'CREATE_PLANT_SUCCESS',
      plant: newPlant
    }
  }
  
  export const deletePlant = (id) => {
    return {
      type: 'DELETE_PLANT',
      id: id
    }
  }

  export const editPlant = (id) => {
    return {
      type: 'EDIT_PLANT',
      id: id
    }
  }

  export const updatePlant = (updatedPlant) => {
    return {
      type: 'UPDATE_PLANT',
      plant: updatedPlant
    }
  }



