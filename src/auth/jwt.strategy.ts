import {Strategy} from 'passport-jwt';
import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {User} from "../user/entities/user.entity";

export interface JwtPayload{
    id: string;
}
function  cookieExtractor(req: any):null | string{
    return (req && req.cookie) ? (req.cookie?.jwt ?? null): null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest: cookieExtractor,
            secretOrKey: 'shjkjldhHKLjfDFLFLSLSJFBKSFBHE7938Y9F8DSDF7S897DF789S7987798D7S897DF89SDFHSUDHS898d9yf8s9df8s9yd9sy8df9ys9fsd9ys9dfy',
        });
    }

    async validate(payload: JwtPayload, done: (error, user)=>void){
        if (!payload || !payload.id){
            return done(new UnauthorizedException(), false);
            }

        const user = await User.findOneBy(
            {currentTokenId: payload.id}
        );
        if(!user){
            return done(new UnauthorizedException(), false);
        }
        done(null, user);
    }

}