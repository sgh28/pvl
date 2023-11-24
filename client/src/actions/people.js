import * as API from '../api/index'
import { get_all } from '../reducer/people';
export const get_all_people = () => async(dispatch) => {
    try {
        console.log("action fetching all people");
        const data = await API.get_all_people();
        console.log(data?.data);

        dispatch(get_all(data?.data?.people));


    } catch (error) {
        console.log(error);
        // navigate("/");

    }
}