import {
  Model,
  Table,
  PrimaryKey,
  AllowNull,
  Column,
  DataType,
  AutoIncrement,
  Unique,
} from "sequelize-typescript";

export enum PermissionState {
  user = "user",
  admin = "admin",
}

@Table
export default class Account extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  index: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(70))
  id: string;

  @AllowNull(false)
  @Column(DataType.STRING(70))
  password: string;

  @AllowNull(true)
  @Column(DataType.STRING(60))
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING(10))
  permission: string;
}
