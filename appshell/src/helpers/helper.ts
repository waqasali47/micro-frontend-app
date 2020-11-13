
export interface IHelperService {
    someHelper(name: string): Promise<string>;
}

class HelperService implements IHelperService {

    someHelper(name: string): Promise<string> {
        console.log(name);
        return new Promise((resolve, reject) => {
               resolve(name);
            }
         );
    }

}

export let helperService = new HelperService();