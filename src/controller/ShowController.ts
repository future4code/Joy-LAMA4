import { Request, Response } from "express";
import { ShowBusiness } from "../business/Show/ShowBusiness";
import { ShowDatabase } from "../data/ShowDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { ShowInputDTO, WEEK_DAY } from "../model/Show";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const showDatabase = new ShowDatabase()
const userDatabase = new UserDatabase()
const authenticator = new Authenticator()
const idGenerator = new IdGenerator()


export class ShowController{
	
	async createShow(req:Request,res:Response) {
		try {
			const auth=req.headers.authorization!
		const {weekDay,startTime,endTime,bandId}=req.body
			const input:ShowInputDTO={
				weekDay,
				startTime,
				endTime,
				bandId
			}
			console.log(input);
			
			const showBusiness=new ShowBusiness(showDatabase, userDatabase, authenticator, idGenerator)
			await showBusiness.createShow(input,auth)
			res.status(200).send("Show criado!")
			
		} catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
	async getShowByDate(req:Request,res:Response) {
		
		try {
			const auth=req.headers.authorization!
			const date=req.params.date as WEEK_DAY
			const showBusiness=new ShowBusiness(showDatabase, userDatabase, authenticator, idGenerator)
			const result=await showBusiness.getShowByDate(date,auth)
			
			res.status(200).send(
				result
			)
			
			
		}  catch (error:any) {
			res.status(400).send({ error: error.message });
		    }
	}
}