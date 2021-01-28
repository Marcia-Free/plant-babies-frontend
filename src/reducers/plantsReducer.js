
export default function plants(state = [], action) {
  let updatedPlants;

  switch(action.type) {
    case "FETCH_PLANTS_SUCCESS":
      return action.plants
    case 'CREATE_PLANT_SUCCESS':
      return [...state, action.plant]


    case "DELETE_PLANT":
      updatedPlants = state.filter(plantObj => plantObj.id !== action.id)
      return updatedPlants

    default:
      return state
    }

  }
