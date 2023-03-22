
export const searchByString = async (string: string) => {
   let res= await DZ.api(`/search?q=track:"${string}"`, function (response:any) {
        return response
    });
    console.log(res);
    
}
// https://api.deezer.com/search?q=track:"i need a dollar"