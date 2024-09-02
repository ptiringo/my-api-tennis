import moment from "moment";
import { Player } from "../../domain/player/player";

export default class {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;

  constructor(player: Player) {
    this.id = player.id;
    this.firstName = player.firstName;
    this.lastName = player.lastName;
    this.dateOfBirth = moment(player.dateOfBirth).format("YYYY-MM-DD");
  }
}
