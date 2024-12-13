import{Schema, modelo}from "mongoose"

const Esquema = new Schema({
    name:{
        type:string
    },
    apepat:{
        type:string
    }
})

export const modelo = new modelo("tabla maestros", Esquema)
