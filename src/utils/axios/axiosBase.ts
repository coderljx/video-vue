import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {ResponseVideo} from "@/utils/response/response";


export class Api {
    private instanse : AxiosInstance;
    constructor() {
          this.instanse = axios.create({
            baseURL: "http://localhost:1998/api",
            timeout: 3000
        })
    }
    /**
     * 发送get请求
     * @param url
     * @param config
     */
    public httpGet(url : string,config? : AxiosRequestConfig) : ResponseVideo {
        let response = new ResponseVideo();
        this.instanse.get(url,config)
            .then(data => {
            if (response.code != null) {
                data.status = response.code;
            }
            if (response.msg != null) {
                data.statusText = response.msg;
            }
            data.data = response.data;
        });
        return response;
    }

}

