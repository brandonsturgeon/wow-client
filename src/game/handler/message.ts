import { MessageParser } from "../../chat/utils/parser";
import { GameOpcode } from "../opcode";
import { GamePacket } from "../packet";
import { GameEventHandler } from "./handler";

export class MessageHandler extends GameEventHandler {
  static opcode = GameOpcode.SMSG_MESSAGE_CHAT;
  async handle(gp: GamePacket) {
    const parser = new MessageParser(this.game.session);
    const message = await parser.fromPacket(gp, false);
    this.game.emit("message", message);
  }
}
