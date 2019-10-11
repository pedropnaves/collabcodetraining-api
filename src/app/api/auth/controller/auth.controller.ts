import { Controller, Get, Param } from '@nestjs/common';
import { AuthDto } from '../dto';
import { AuthService } from '../service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/:id')
  public async findOne(@Param('id') id: string): Promise<AuthDto> {
    return await this.authService.findById(id);
  }
}
