import {ShipInfo} from '../models/shipInfo';

export class ShipinfoService {
	private static _instance: ShipinfoService;

	static get instance(): ShipinfoService {
		if (!ShipinfoService._instance) {
			ShipinfoService._instance = new ShipinfoService();
		}
		return ShipinfoService._instance;
	}

	getShipInfo(): Promise<ShipInfo[]> {
		return new Promise(resolve => {
			//TODO: get data from api
		})
	}
}