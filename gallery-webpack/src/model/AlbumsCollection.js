import { ALBUMS_URL } from "../config";
import BaseCollection from "./BaseCollection";

export default class AlbumsCollection extends BaseCollection{
    constructor(){
        super();
        this._url = ALBUMS_URL;
    }
}