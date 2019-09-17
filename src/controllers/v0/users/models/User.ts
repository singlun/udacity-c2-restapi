import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, AllowNull} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  
  @PrimaryKey
  @Column
  public email: string;

  @AllowNull(false)
  @Column  
  public password_hash: string; 

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();

  short() {
    return {
      email: this.email
    }
  }
}
