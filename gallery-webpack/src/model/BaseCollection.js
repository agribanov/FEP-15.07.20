export default class BaseCollection{
    constructor(){
        this.list = [];
        this._url = 'http://google.com'
    }

    async getList(){
        const resp = await fetch(this._url);
        const data = await resp.json();
        this.setData(data)
        
        // return fetch(this._url)
        //             .then((resp) => resp.json())
        //             .then((data) => this.setData(data));
    }

    setData(data){
        this.list = data;
    }
}