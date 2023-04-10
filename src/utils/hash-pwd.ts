import * as crypto from 'crypto';

export const hashPwd = (p:string):string =>{
    const hmc =crypto.createHmac('sha512', 'dlskjjfksdfS|FDS"FSsdfsfdsfuhuf87fs78fsd4s6d7fsd9s8fdshfs65s5fsgfsuydgsugs675sdf7sf8s7f89enwuiouwyfnwfw6ftwnf8nwfn67ftw');
    hmc.update(p);
    return hmc.digest('hex');
}