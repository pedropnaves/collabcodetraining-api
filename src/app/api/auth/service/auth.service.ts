import { Injectable } from '@nestjs/common';
import { AuthDto } from '../dto';

@Injectable()
export class AuthService {

  findById(id: string): Promise<AuthDto> {
    return new Promise<AuthDto>(resolve => resolve(new AuthDto(`Pedro - ${id}`)));
  }
}
