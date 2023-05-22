import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ paranoid: false, timestamps: false })
export class Users extends Model<Users> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  salary: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  position: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
}
