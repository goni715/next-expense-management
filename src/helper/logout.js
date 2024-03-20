import axios from "axios";
import {SuccessToast} from "@/helper/ValidationHelper";
import {HideLoader, ShowLoader} from "@/redux/features/settings/settingsSlice";
import store from "@/redux/store/store";

export async function Logout() {
    try {
        store.dispatch(ShowLoader())
        let URL = "http://localhost:3000/api/auth/logout";

        const res = await axios.get(URL)
        store.dispatch(HideLoader())

        if (res.status === 200) {
            SuccessToast("Logout Success");
            window.location.href="/login"
        }
    }
    catch (e) {
        store.dispatch(HideLoader())
        // ErrorToast("Something Went Wrong")
    }
}