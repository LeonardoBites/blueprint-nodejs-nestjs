import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Health')
export class HealthController {
  vivo = 'Estou vivo';
  pronto = 'Estou pronto';

  @Get('alive')
  alive(): string{
    return this.vivo;
  }

  @Get('ready')
  ready(): string {
    return this.pronto;
  }
}
