import { ADD_PLACE, DELETE_PLACE} from './actionTypes';

export const addPlace = (placeName, location) => {

	return {
		type: ADD_PLACE,
		payload : {
			placeName : placeName,
			key : Math.random().toString(),
			image : {
				uri : "https://thefirsttravels.com/wp-content/uploads/2017/11/phu-quoc-the-most-beautiful-place-in-south-vietnam-3-min-640x400.jpg"
			},
			location: location
		}
	};
};

export const deletePlace = (key) => {
	return {
		type: DELETE_PLACE,
		payload : key
	};
};