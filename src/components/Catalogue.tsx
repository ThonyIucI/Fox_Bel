import axios from "axios";
import { FC, useEffect } from "react";

const Catalogue: FC = () => {
    const api = axios.create({
        baseURL:'https://api.deezer.com/',
        headers: {
            // Authorization: `Bearer 9ecc806bf0a4e2d9c274469c2cf4884b`,
            'Content-type': 'application/json',
            // 'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]')?.attr('content'),
            // access_token: '9ecc806bf0a4e2d9c274469c2cf4884b',
            // app_id: '590384',
            // channelUrl: 'http://localhost:5173/channel.html'
        }
    })
    // Then, request the user to log in
    // DZ.login(function (response) {
    //     if (response.authResponse) {
    //         console.log('Welcome!  Fetching your information.... ');
    //         DZ.api('/user/me', function (response) {
    //             console.log('Good to see you, ' + response.name + '.');
    //         });
    //     } else {
    //         console.log('User cancelled login or did not fully authorize.');
    //     }
    // }, { perms: 'basic_access,email' });

    // DZ.ready(function (sdk_options) {
    //     console.log('DZ SDK is ready', sdk_options);
    // });
   const getInformation = async () => {
        try {
            // DZ.api('/user/me', function (response) {
            //     console.log("Name of user id 5", response);
            // });
           let {data}=await api('search/artist/?q=eminem&index=0&limit=2&output=json')
        console.log(data);
        
        } catch (error) {
            console.log(error);

        }

    }
    useEffect(() => {
        getInformation()
    }, [])
    return (
        <>
            Soy el Catálogo
        </>
    );
}

export default Catalogue;