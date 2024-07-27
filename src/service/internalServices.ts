import * as endPoints from '@const/internalEndpoints';

import { postRequest } from './api';

export const loginOrRegisterService = async (userUniqeId: string) => {
  try {
    const response = await postRequest('internal', endPoints.loginAndRegister, { userUniqeId });
    return response;
  } catch (error) {
    throw error;
  }
};
