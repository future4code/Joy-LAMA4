import { BandDatabase } from "../../data/BandDatabase";
import { UserDatabase } from "../../data/UserDatabase";
import { BaseError } from "../../error/BaseError";
import { Band, band, BandInputDTO, GetBandInputDTO } from "../../model/Band";
import { IdGenerator } from "../../services/IdGenerator";
import { BandRepository } from "./BandRepository";
import { Authenticator } from "../../services/Authenticator";

export class BandBusiness implements BandRepository{
	bandDatabase=new BandDatabase()
	idGenerator = new IdGenerator();
	authenticator = new Authenticator();
	async createBand(input:BandInputDTO,token:string){
		try {
			console.log("Início business createBand");
			
			if (!token) {
				throw new BaseError(400,"Por favor, passe o token no header da requisição");
			}
			const {name,music_genre,responsible}=input
			if (!name || !music_genre || !responsible) {
				throw new BaseError(400,"Por favor, passe os parâmetros name, music_genre e responsible na requisição");
			}
			console.log(name);
			console.log(token);
			
			const bandName: Band | []= await this.bandDatabase.getBandByName(name)
			console.log(bandName);
			
			if (bandName) {
				throw new BaseError(400,"Nome da banda inválido. A banda com o nome informado já se encontra cadastrada.");
			}
			
			const userDatabase=new UserDatabase()
			
			const authData=this.authenticator.getData(token)
			
			const user= await userDatabase.getUserById(authData.id)
			console.log(authData);
			
			if(!authData){
				throw new Error("Token inválido ou não passado")
			     }
			     if(authData.role!=="ADMIN"){
				throw new Error("Usuário não autorizado")
			     }
			if (!user) {
				throw new BaseError(404,"Usuário não encontrado");
				
			}
			
		
           		 const id = this.idGenerator.generate();
	    		console.log(id);
	    
			const band:band={
				id,
				name,
				music_genre,
				responsible
			}
			console.log(band.id);
			
			
			await this.bandDatabase.createBand(band)
			console.log("Fim createBand business");
		} catch (error:any) {
			throw new Error(error.sqlMessage || error.message);
		}
	}
	async getBand(input: GetBandInputDTO, token: string):Promise<Band | []> {
	    try {
		if (!token) {
			throw new BaseError(400,"Por favor, passe o token no header da requisição");
		}
		const { name, id } = input;
		if (!input) {
			throw new BaseError(400,"Por favor, passe o id ou o nome da banda na requisição");
			
		}
		const userDatabase=new UserDatabase()
		const authenticator = new Authenticator();
			const authData=authenticator.getData(token)
			const user= await userDatabase.getUserById(authData.id)

			if (!user) {
				throw new BaseError(404,"Usuário não encontrado");	
			}
		if (name && !id) {
			if (name.includes('_')) {
				const newName=name.replace(/_/g," ")
			
			const band : Band | [] = await this.bandDatabase.getBandByName(newName);
		
			if (!band) {
			  throw new Error(
			    "Não foi possivel encontrar a banda, verifique se o nome e/ou id foram inseridos na query."
			  );
			}
		  
			return band;
			
		}
		if(name.includes('-')){
			const newName=name.replace(/-/g," ")
			
			const band : Band | [] = await this.bandDatabase.getBandByName(newName);
		
			if (!band) {
			  throw new Error(
			    "Não foi possivel encontrar a banda, verifique se o nome e/ou id foram inseridos na query."
			  );
			}
		  
			return band;
		}
		      }
		  
		      if (!name && id) {
			const band = await this.bandDatabase.getBandById(id);
		  
			if (!band) {
			  throw new Error(
			    "Não foi possivel encontrar a banda, verifique se o nome e/ou id foram inseridos na query."
			  );
			}
		  
			return band;
		      }
		  
		      const band = await this.bandDatabase.getBandById(id);
		  
		      if (!band) {
			throw new Error(
			  "Não foi possivel encontrar a banda, verifique se o nome e/ou id foram inseridos na query."
			);
		      }
		  
		      return band;
			
	    } catch (error:any) {
		throw new Error(error.sqlMessage || error.message);
	}
	}
}