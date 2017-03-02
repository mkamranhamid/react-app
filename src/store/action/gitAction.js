import { createAction } from 'redux-actions';

export class GitAction {
    
    static GetData = 'GETDATA';
    static Success = 'SUCCESS';
    static Failure = 'FAILURE';

    static CallGetData() {
        return {
            type: GitAction.GetData,
        }
    }
}