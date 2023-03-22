import { alertError } from "../../assets/alerts";

export const searchByString = (stringToSearch: string) => DZ.api(`/search?q=track:"${stringToSearch}"`, function (response: any) {
    console.log(response);

    if (!response.data.length) {
        return alertError('Ups, No existen coincidencias, pruebe con otra canción o álbum')
    }
    // saveResults(response.data)
    return response
});
// https://api.deezer.com/search?q=track:"i need a dollar"