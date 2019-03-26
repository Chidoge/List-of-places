import { ADD_PLACE, DELETE_PLACE, SET_PLACES} from './actionTypes';
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
			alert('Something went wrong, please try again.');
			dispatch(uiStopLoading());
		})
		.then((res) => res.json())
		.then((res) => {
			const placeData = {
				name: placeName,
				location: location,
				image: res.imageUrl
			}
			return fetch('https://awesome-places-cf70c.firebaseio.com/places.json', {
				method: 'POST',
				body: JSON.stringify(placeData)
			});
		})
		.catch(err => {
			console.log(err);
			alert(err);
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

export const getPlaces = () => {
	return dispatch => {

		fetch('https://awesome-places-cf70c.firebaseio.com/places.json')
		.catch(err => {
			alert('Something went wrong, please try again later.');
			console.log(err);
		})
		.then(res => res.json())
		.then(res => {

			const places = [];
			for (let key in res) {
				places.push({
					...res[key],
					image: {
						uri: res[key].image
					},
					key: key
				})
			}
			dispatch(setPlaces(places));
		})
	}
}

export const setPlaces = (places) => {
	return {
		type: SET_PLACES,
		payload: places
	}
}
export const deletePlace = (key) => {
	return {
		type: DELETE_PLACE,
		payload : key
	};
};