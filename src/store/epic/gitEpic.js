import { Observable } from 'rxjs';
import firebase from 'firebase';
import { ActionsObservable } from "redux-observable";

import { GitAction } from '../action/gitAction';
import { fbService } from '../service/fbService'

export class GitEpic {
    getUserData = (action$) =>
        action$.ofType(GitAction.GetData)
            .switchMap(({payload}) => {
                return firebase.database().ref('/posts/').once('value').then(function (snapshot) {
                    return {
                        type: 'SUCCESS',
                        payload: snapshot.val()
                    }
                })
            })
}
export let gitEpic = new GitEpic();

