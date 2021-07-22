import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
