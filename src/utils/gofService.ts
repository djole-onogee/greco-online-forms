import API_SERVICE from "./getEnvironment";

const requestId = "fd962898-fc34-49ae-a2f7-83edcca61a8d";

class CstService {
  public async initialRequest(id: string | null) {
    const path = `/api/Form/GetPhoneNumberMasked/${id}`;
    const response = await API_SERVICE.get(path);
    return response;
  }

  public async checkPhoneNumber(id: string | null, body: any) {
    const path = `/api/Form/CheckPhoneNumber/${id}`;
    const response = await API_SERVICE.postJson(path, body);
    return response;
  }

  public async dataConfirm(body: any) {
    const path = `/api/Values/data-confirm`;
    const response = await API_SERVICE.post(path, body);
    return response;
  }

  public async mainKnockout(id: any, answer: boolean) {
    const path = `/api/Values/main-knockout/${id}/${answer}`;
    const response = await API_SERVICE.get(path);
    return response;
  }

  public async knockoutStage(body: any) {
    const path = `/api/Values/knockout-stage`;
    const response = await API_SERVICE.post(path, body);
    return response;
  }

  public async signingAuth(body: any, id: number) {
    const path = `/api/Values/signing-authorization/?id=${id}`;
    const response = await API_SERVICE.post(path, body);
    return response;
  }
  public async startSigning(id: number) {
    const path = `/api/Values/start-signing/?id=${id}`;
    const response = await API_SERVICE.post(path);
    return response;
  }

  public async userState(id: any) {
    const path = `/api/Values/user-state/?id=${id}`;
    const response = await API_SERVICE.get(path);
    return response;
  }

  public async uploadPdf(id: any, formData: any) {
    const path = `/api/Form/ProcessForm/${id}`;
    const response = await API_SERVICE.postFile(path, formData);
    return response;
  }

  public async getInsuranceNumber() {
    const path = `/api/Policy/GetNextPolicyNumber`;
    const response = await API_SERVICE.get(path);
    return response;
  }

  public async policyApproveOrReject(id: any, action: any, formData?: any) {
    const path = `/api/Values/policy-action?id=${id}&action=${action}`;
    const response = await API_SERVICE.postFile(path, formData);
    return response;
  }

  public async startCysmoReport(id: any) {
    const path = `/api/Values/start-cysmo-report/${id}`;
    const response = await API_SERVICE.post(path);
    return response;
  }

  public async policyState(uid: any) {
    const path = `/api/Values/policy-state?id=${uid}`;
    const response = await API_SERVICE.get(path);
    return response;
  }
}

export const appService = new CstService();
