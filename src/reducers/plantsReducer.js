
export default function plants(state = [], action) {
  let updatedPlants;
  let currentPlant;

  switch(action.type) {
    case "FETCH_PLANTS_SUCCESS":
      return action.plants
    case 'CREATE_PLANT_SUCCESS':
      return [...state, action.plant]
    case "DELETE_PLANT":
      updatedPlants = state.filter(plantObj => plantObj.id !== action.id)
       return updatedPlants
    case "EDIT_PLANT":
      return currentPlant = state.filter(plantObj => plantObj.id === action.id)
    case "UPDATE_PLANT":
      return [...state, action.plant]
  

      default:
      return state
    }

  }
