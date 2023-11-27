import {Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true,
})
export class Book
{
    @Prop()
    title:String;

    @Prop()
    description : String;

    @Prop()
    author : String;
}
export const BookSchema=SchemaFactory.createForClass(Book)