import { ADD_PLACE, DELETE_PLACE} from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index';

export const addPlace = (placeName, location, image) => {


	return (dispatch) => {

		dispatch(uiStartLoading());

		fetch('https://us-central1-awesome-places-cf70c.cloudfunctions.net/storeImage', {
			method: 'POST',
			body: JSON.stringify({
				image: image.base64
			})
		})
		.catch(err => {
			console.log(err);
			dispatch(uiStopLoading());
		})
		.then((res) => {
			res.json();
		})
		.then((res) => {
			const placeData = {
				name: placeName,
				location: location,
				image: parsedRes.imageUrl
			}
			return fetch('https://awesome-places-cf70c.firebaseio.com/places.json', {
				method: 'POST',
				body: JSON.stringify(placeData)
			});
		})
		.catch(err => {
			console.log(err);
			dispatch(uiStopLoading());
		})
		.then((res) => {
			res.json();
		})
		.then((res) => {
			dispatch(uiStopLoading());
		})
		
		
	}
};

export const deletePlace = (key) => {
	return {
		type: DELETE_PLACE,
		payload : key
	};
};