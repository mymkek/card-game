import {action, observable} from "mobx";

class UserStore {
   @observable nick = '';

   @action.bound
   setNick(nick: string) {
       console.log(nick, this)
       this.nick = nick;
   }
}


export const userStore = new UserStore();