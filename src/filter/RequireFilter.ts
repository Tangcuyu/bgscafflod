import { config } from '@vue/test-utils';

export class RequireFilter {
    public axiosFilter: any;
    constructor() {
        this.axiosFilter = this.axiosFilterCallback();
    }
    public axiosFilterCallback() {
        const tempObj = {
            request: (servObj: any, paramObj?: any) => {
                servObj.interceptors.request.use( (res: any) => {
                    return res;
                },
                (error: any) => {
                    return Promise.reject(error);
                },
                );
            },
            response: (servObj: any) => {
                servObj.interceptors.response.use( (res: any) => {
                    return res.data;
                });
            },
            all: (servObj: any) => {
                tempObj.response(servObj);
                tempObj.request(servObj);
            },
        };
        return tempObj;
    }

}
