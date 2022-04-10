import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(name) {
        return {
            name: `Hello ${name}!`
        };
    }
}
