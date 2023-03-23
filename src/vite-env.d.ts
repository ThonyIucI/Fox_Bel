/// <reference types="vite/client" />
export interface Song{
 id:number
    title: string

 album:Album   
 artist:Artist
}
export interface Album{
    title:string
    cover:string
    cover_big: string
    cover_medium: string
    cover_small: string
}
export interface Artist {
    name: string
    picture: string
    picture_big: string
    picture_medium: string
}
declare global {
    interface Window {
        DZ: any;
    }
}