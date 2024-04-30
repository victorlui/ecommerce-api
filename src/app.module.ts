import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOS,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      type: 'postgres',
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{*.js,.ts}`],
      migrationsRun: true,
    }),
    UsersModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
