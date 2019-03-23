import { ADD_PLACE, DELETE_PLACE} from './actionTypes';

export const addPlace = (placeName, location, image) => {

	return {
		type: ADD_PLACE,
		payload : {
			placeName : placeName,
			key : Math.random().toString(),
			image : {
				uri : image.uri
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