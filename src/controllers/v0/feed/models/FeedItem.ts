import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey,  AllowNull, AutoIncrement} from 'sequelize-typescript';

@Table
export class FeedItem extends Model<FeedItem> {
  @AllowNull(false)
  @Column  
  public caption: string;

  @AllowNull(false)
  @Column  
  public url: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
