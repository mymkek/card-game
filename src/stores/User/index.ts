import {observable} from "mobx";

class UserStore {
   @observable name = 'Шляпник';
}


export const userStore = new UserStore();