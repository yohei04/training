import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CommentsService } from 'src/comments/comments.service';

@ValidatorConstraint({ name: 'IsCommentAlreadyExist', async: true })
export class IsCommentAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(private readonly commentsService: CommentsService) {}

  async validate(content: any, args: ValidationArguments) {
    const comment = await this.commentsService.findByContent(content);
    if (comment) return false;
    return true;
  }

  defaultMessage(): string {
    return 'この$propertyはすでに存在します';
  }
}

export function IsCommentAlreadyExist(validationOptions?: ValidationOptions) {
  console.log({ validationOptions });
  return function (object: Object, propertyName: string) {
    console.log({ object, validationOptions });
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCommentAlreadyExistConstraint,
    });
  };
}
