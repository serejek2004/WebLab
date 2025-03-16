const initialState = {
    droneList: [],
  };

const findIndexByName = (arr, title, category) => {
    return arr.findIndex((item) => item.title === title && item.category === category);
};
  
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DRONE":
            const foundIndex = findIndexByName(state.droneList, action.payLoad.title, action.payLoad.category);
            if (foundIndex === -1) {
                return { ...state, droneList: [...state.droneList, action.payLoad] };
            } else {
                const updatedDroneList = [...state.droneList];
                updatedDroneList[foundIndex] = {
                    ...updatedDroneList[foundIndex],
                    count: updatedDroneList[foundIndex].count + action.payLoad.count,
                };
                console.log(updatedDroneList);
                return { ...state, droneList: updatedDroneList };
            }
        case "INCREMENT_COUNT":
            return {
                ...state,
                droneList: state.droneList.map((drone) => {
                    if (drone.title === action.payLoad.title && drone.category === action.payLoad.category) {
                        return { ...drone, count: drone.count + 1 };
                    }
                    return drone;
                }),
            };
        case "DECREMENT_COUNT":
            return {
                ...state,
                droneList: state.droneList.map((drone) => {
                    if (drone.title === action.payLoad.title && drone.category === action.payLoad.category && drone.count > 0) {
                        return { ...drone, count: drone.count - 1 };
                    }
                    return drone;
                }),
            };        
      default:
        return state;
    }
  };