import mUser from './models/user';
import mGuild from './models/guild';

export const fetchGuild = async (id: string) => {
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
};

export const updateGuild = async (id: string, fieldUpdate: Object) => {
	return await mGuild.findOneAndUpdate({ id }, fieldUpdate, { new: true });
};

export const fetchUser = async (id: string) => {
	let userDB = await mUser.findOne({ discordId: id });

	if (userDB) {
		return userDB;
	} else {
		userDB = new mUser({ discordId: id });
		await userDB.save().catch((err: Error) => console.log(err));
		return userDB;
	}
};

export const updateUser = async (id: string, fieldUpdate: Object) => {
	return await mUser.findOneAndUpdate({ id }, fieldUpdate, { new: true });
};
