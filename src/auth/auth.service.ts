import { Injectable } from '@nestjs/common';
import{Response} from 'express';
import {AuthLoginDto} from "./dto/auth-login.dto";
import {User} from "../user/entities/user.entity";
import {hashPwd} from "../utils/hash-pwd";
import {v4 as uuid} from 'uuid';
import {sign} from "jsonwebtoken";
import {JwtPayload} from "./jwt.strategy";


@Injectable()
export class AuthService {
    private createToken(currentTokenId: string): {accessToken: string, expiresIn: number} {
        const payload: JwtPayload = {id: currentTokenId};
        const expiresIn = 60*60*24;
        const accessToken = sign(payload, 'shjkjldhHKLjfDFLFLSLSJFBKSFBHE7938Y9F8DSDF7S897DF789S7987798D7S897DF89SDFHSUDHS898d9yf8s9df8s9yd9sy8df9ys9fsd9ys9dfy', {expiresIn});
        return{
            accessToken,
            expiresIn,
        };
    };

    private async generateToken(user:User): Promise<string>{
        let token;
        let userWithThisToken = null;
        do{
            token = uuid();
            userWithThisToken = await User.findOneBy(user.currentTokenId = token);
            }while (!!userWithThisToken);
        user.currentTokenId = token;
        console.log(user.currentTokenId);
        await user.save();

        return token;
    }

    async  login(req: AuthLoginDto, res:Response): Promise<any>{
        try {

            const user = await User.findOneBy( {
                    email: req.email,
                    pwdHash: hashPwd(req.pwd),

            })




            const token = this.createToken(await this.generateToken(user));


            return res
                .cookie('jwt', token.accessToken, {
                secure: false,
                domain: 'localhost',
                httpOnly: true,
            })
                .json({ok: true});
            console.log(res)

            if (!user) {
                return res.json({error: 'Invalid login data!'});
            }
        }catch (e){
            return res.json({error: e.message});
        }

    };

}
