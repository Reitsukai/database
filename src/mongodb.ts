import * as mongoose from 'mongoose';
import mUser from './models/user';
import mGuild from './models/guild';

export class ReiMongoDB {
	private _dbString: string;
	public connections: mongoose.Connection | undefined;

	constructor(options: ReiOptions) {
		if (!options.dbString) {
			throw new Error('No dbString provided');
		}

		this._dbString = options.dbString;
		this.connections = undefined;
		mongoose.connect(this._dbString)
	}

	get dbString() {
		return this._dbString;
	}

	public connect() {
		return new Promise((resolve, reject) => {
			const options = {};
			if (!this.connections) {
				this.connections = mongoose.connection
			}

			mongoose.connect(this.dbString, options)
				.then(() => resolve(this.connections))
				.catch((err) => reject(err));
		})
	}

	public async fetchGuild(id: string) {
		let guildDB = await mGuild.findOne({ id: id });

		if (guildDB) {
			return guildDB;
		} else {
			guildDB = new mGuild({
				id: id,
				registeredAt: Date.now()
			});
			await guildDB.save().catch((err: Error) => console.log(err));
			return guildDB;
		}
	}

	public async updateGuild(id: string, fieldUpdate: {}){
		return await mGuild.findOneAndUpdate({ id }, fieldUpdate, { new: true });
	}

	public async fetchUser(id: string) {
		let userDB = await mUser.findOne({ discordId: id });

		if (userDB) {
			return userDB;
		} else {
			userDB = new mUser({ discordId: id });
			await userDB.save().catch((err: Error) => console.log(err));
			return userDB;
		}
	}

	public async updateUser(id: string, fieldUpdate: {}){
		return await mUser.findOneAndUpdate({ id }, fieldUpdate, { new: true });
	}

}

export interface ReiOptions {
	dbString: string
}