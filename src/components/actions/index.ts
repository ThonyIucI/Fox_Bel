import axios from "axios";
import { alertError } from "../../assets/alerts";
const api = axios.create({
    baseURL: 'https://api.deezer.com/',
    headers: {
        // Authorization: `Bearer 9ecc806bf0a4e2d9c274469c2cf4884b`,
        'Content-type': 'application/json',
        // 'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]')?.attr('content'),
        // access_token: '9ecc806bf0a4e2d9c274469c2cf4884b',
        // app_id: '590384',
        // channelUrl: 'http://localhost:5173/channel.html'
    }
})
// export const searchByString = (stringToSearch: string) => DZ.api(`/search?q=track:"${stringToSearch}"`, function (response: any) {
//     console.log(response);

//     if (!response.data.length) {
//         return alertError('Ups, No existen coincidencias, pruebe con otra canción o álbum')
//     }
//     // saveResults(response.data)
//     return response
// });
export const getInformation = async () => {
    try {
        // DZ.api('/user/me', function (response) {
        //     console.log("Name of user id 5", response);
        // });
        let { data } = await api('search/artist/?q=eminem&index=0&limit=2&output=json')
        console.log(data);

    } catch (error) {
        console.log(error);

    }

}
// https://api.deezer.com/search?q=track:"i need a dollar"