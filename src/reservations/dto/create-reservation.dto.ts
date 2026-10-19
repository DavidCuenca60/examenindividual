import { IsInt, IsNotEmpty, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateReservationDto {
  // TODO 1: Add the validators required by the examination. Do not convert body numbers.
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  purpose!: string;

  @IsInt()
  @MinLength(1)
  @MaxLength(20)
  participants!: number;

  @IsInt()
  @MinLength(1)
  roomId!: number;
}
