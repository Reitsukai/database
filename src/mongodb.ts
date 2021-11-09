import * as mongoose from 'mongoose';

export class ReiMongoDB {
	private _dbString: string;
	public connections: mongoose.Connection | undefined;

	constructor(options: ReiOptions) {
		if (!options.dbString) {
			throw new Error('No dbString provided');
		}

		this._dbString = options.dbString;
		this.connections = undefined;
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

}

export interface ReiOptions {
	dbString: string
}