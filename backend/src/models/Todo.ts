import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

export class Todo extends Model {
  public id!: number;
  public title!: string;
  public description?: string;
  public completed!: boolean;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      set() {
        throw new Error('id is read-only');
      },
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(1024),
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: 'todos',
    sequelize,
  }
);
