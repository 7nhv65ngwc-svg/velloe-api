import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'O nome do produto deve ser um texto' })
  @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
  name: string;

  @IsNumber({}, { message: 'O preço deve ser um número válido' })
  @Min(0, { message: 'O preço não pode ser negativo' })
  price: number;

  @IsNumber({}, { message: 'A nota (rating) deve ser um número' })
  @IsOptional()
  rating?: number;

  @IsNumber({}, { message: 'O ID da categoria deve ser um número' })
  @IsNotEmpty({ message: 'A categoria do produto é obrigatória' })
  categoryId: number;

  @IsString({ message: 'A foto deve ser uma URL ou caminho válido' })
  @IsNotEmpty({ message: 'A imagem/foto do produto é obrigatória' })
  photo: string;

  @IsString({ message: 'A descrição deve ser um texto' })
  @IsOptional()
  description?: string;

  @IsNumber({}, { message: 'O ID do vendedor deve ser um número' })
  @IsOptional()
  sellerId?: number;
}