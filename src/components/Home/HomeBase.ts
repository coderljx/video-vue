import {Api} from "@/utils/axios/axiosBase";


export class HomeBase extends Api{
    constructor() {
         super();
    }

    public get() {
        super.httpGet("login");
    }

}