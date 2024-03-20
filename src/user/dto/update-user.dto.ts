import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Add the fields you want to update here
  // For example, to update the name and age fields:
  // name: string;
  // age: number;
}
