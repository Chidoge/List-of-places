import { ADD_PLACE, DELETE_PLACE} from './actionTypes';

export const addPlace = (placeName) => {

	return {
		type: ADD_PLACE,
		payload : {
			placeName : placeName,
			key : Math.random().toString(),
			image : {
				uri : "https://i.imgur.com/HXIa264.png"
			}
		}
	};
};

export const deletePlace = () => {
	return {
		type: DELETE_PLACE
	};
};