import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { PatientRepository } from './patient.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PatientRepository])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
