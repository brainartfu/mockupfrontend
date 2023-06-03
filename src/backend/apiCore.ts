import axios from "axios";

class apiCore {
    protected API_URL = process.env.REACT_APP_API_URL;
    protected axios = axios.create({
        baseURL: this.API_URL,
        headers: {
            "Content-Type" : "application/json"
        }
    });

    post = async (url:string, data:any) => {
        const request = new Promise<any>((resolve, reject) => {
            this.axios.post(url, data).then(async (res:any) => {
                resolve(res.data);
            }).catch((err:any)=>{
                reject(err.response?.data);
            })
        })
        const result = await request.then(res => {return res;}).catch(err => {return err;});
        return result ;
    }

    get = async (url:string,authorization:string|null) => {
        const request = new Promise<any>((resolve, reject) => {
            this.axios.get(url).then(async (res:any) => {
                resolve(res.data)
            }).catch((err:any) => {
                reject(err.response?.data);
            })
        })
        const result = await request.then(res => {return res;}).catch(err => {return err;});
        return result;
    }

}

export {apiCore};