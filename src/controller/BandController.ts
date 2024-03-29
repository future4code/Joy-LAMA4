import { Request, Response } from "express";
import { BandBusiness } from "../business/Band/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { BandInputDTO, GetBandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const bandDatabase = new BandDatabase()
const userDatabase = new UserDatabase()
const authenticator = new Authenticator()
const idGenerator = new IdGenerator()

export class BandController{
	async createBand(req:Request,res:Response) {
		try {
			
			
			const auth=req.headers.authorization!
			const {name,music_genre,responsible}=req.body
			const input:BandInputDTO={
				name,
				music_genre,
				responsible
			}
			const bandBusiness=new BandBusiness(bandDatabase, userDatabase,authenticator, idGenerator)
			await bandBusiness.createBand(input,auth)
			
			
			res.status(200).send("Banda criada!")
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
	async getBand(req:Request,res:Response) {
		const name=req.query.name as string
		const id=req.query.id as string
		const input:GetBandInputDTO={name,id}
		try {
			const auth=req.headers.authorization!
			const bandBusiness = new BandBusiness(
        bandDatabase,
        userDatabase,
        authenticator,
        idGenerator
      )
			const result=await bandBusiness.getBand(input,auth)
			res.status(200).send(result)
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);	
		}
	}
}