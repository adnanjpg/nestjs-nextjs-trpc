import { Reflector } from '@nestjs/core';

// @ts-ignore
export const Roles = Reflector.createDecorator<string[]>();
