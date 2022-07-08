import { band, Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase{
	private static TABLE_NAME = "Bandas";

	public async createBand(band:band) {
	try {
		console.log('Database: '+band.id);
		
		await this.getConnection()
		.insert({
			id:band.id,
			name:band.name,
			music_genre:band.music_genre,
			responsible:band.responsible
		}).into(BandDatabase.TABLE_NAME)
	} catch (error:any) {
		throw new Error(error.sqlMessage || error.message);
	      }	
	}
	
	public async getBandByName(name:string):Promise<Band | []> {
		try {
			console.log("Get band by name: "+name);
			
		const result=await this.getConnection()
		.select("*")
      		.from(BandDatabase.TABLE_NAME)
     		 .where("name","LIKE",`%${name}%`);
		 console.log(result);
		 
			return result[0]

		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }	
	}
	public async getBandById(id:string):Promise<Band> {
		try {
		const result=await this.getConnection()
		.select("*")
      		.from(BandDatabase.TABLE_NAME)
     		 .where({ id });
			return Band.toBandModel(result[0])
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		      }	
	}
}