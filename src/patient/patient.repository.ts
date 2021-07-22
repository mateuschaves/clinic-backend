import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  async createPatient(createPatientDto: CreatePatientDto): Promise<Patient> {
    const { name, gender, birthdate, height, medication, weight } =
      createPatientDto;
    const patient = this.create();
    patient.name = name;
    patient.gender = gender;
    patient.birthdate = birthdate;
    patient.height = height;
    patient.medication = medication;
    patient.weight = weight;

    try {
      return await patient.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
