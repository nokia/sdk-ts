import { QoDSession } from '../models/session';
import { Namespace } from './namespace';

/**
 *  Representation of a mobile subscription.
 * 
 * Through this class many of the parameters of a
    subscription can be configured on the network.
 */
export class Sessions extends Namespace {
	/**
     *  Get a QoS Session by its ID.
     * 
     * Args:
            id (str): ID of the QoS Session
    */
	async get(id: string): Promise<QoDSession> {
		const session = await this.api.sessions.getSession(id);
		return QoDSession.convertSessionModel(this.api, '', session);
	}
}
