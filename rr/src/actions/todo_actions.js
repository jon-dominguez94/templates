import * as APIUtil from '../util/api_util';

export const RECEIVE_SAMPLE = "RECEIVE_SAMPLE";

const receiveSample = sample => {
  return ({
    type: RECEIVE_SAMPLE,
    sample
  });
};

export const createSample = sample => dispatch => {
  try {
    const newSample = APIUtil.createSample(sample);
    dispatch(receiveSample(newSample));
  } catch(err) {
    console.log(err);
  }
};