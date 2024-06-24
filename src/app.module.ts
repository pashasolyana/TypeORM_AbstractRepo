import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          url: 'postgresql://emeke:password@localhost:5434/user',
          autoLoadEntities: true,
          synchronize: true,
          host: 'localhost',
          entities: [User],
        };
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
