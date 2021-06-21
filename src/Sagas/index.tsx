import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../Types/ActionType";
import callLocationApi from "../Api";
import { AxiosResponse } from "axios";
import { gotStations } from "../Types/ActionType";
import { RadioBrowserApi } from "radio-browser-api";

// watchers
function* SagaActions(): Generator<StrictEffect> {
  yield takeEvery(actionIds.GET_STATIONS, getAllStations);
}

// workers
function* getAllStations() {
  try {
    let allStations: any;
    const response: AxiosResponse = yield call(callLocationApi.get, "");
    const api = new RadioBrowserApi("My Radio App");
    switch (response.status) {
      case 200:
        yield api
          .searchStations({
            countryCode: response.data.countryCode,
            limit: 30,
          })
          .then((res) => {
            const data: gotStations = {
              type: "GOT_STATIONS",
              stations: res,
            };
            allStations = data;
          });
    }
    yield put(allStations);
  } catch (err) {
    console.log(err);
  }
}

export default SagaActions;
