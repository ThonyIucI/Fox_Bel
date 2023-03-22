/// <reference types="vite/client" />
export interface Song{
 id:number
    title: string

 album:Album   
}
export interface Album{
    title:string
    cover:string
}
declare global {
    interface Window {
        DZ: any;
    }
}