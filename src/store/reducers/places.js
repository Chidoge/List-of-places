import {
	ADD_PLACE,
	DELETE_PLACE
} from "../actions/actionTypes";

const initialState = {
	places: [],
	selectedPlace: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PLACE:
			return Object.assign({}, state, {
				places : state.places.concat({
					key: action.payload.key,
					name: action.payload.placeName,
					image: action.payload.image
				})
			});
		case DELETE_PLACE:
			return Object.assign({}, state, {
				places: state.places.filter(place => {
					return place.key !== state.selectedPlace.key;
				}),
				selectedPlace: null
			});
		default:
			return state;
	}
};

export default reducer;
