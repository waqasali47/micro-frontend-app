
export function _getSampleUserInfo(){
    return fetch('https://api.noopschallenge.com/wordbot').then(res => res.json()).catch(e => console.log(e));

}