// package: xray.common.protocol
// file: common/protocol/user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_serial_typed_message_pb from "../../common/serial/typed_message_pb";

export class User extends jspb.Message { 
    getLevel(): number;
    setLevel(value: number): User;
    getEmail(): string;
    setEmail(value: string): User;

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): common_serial_typed_message_pb.TypedMessage | undefined;
    setAccount(value?: common_serial_typed_message_pb.TypedMessage): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        level: number,
        email: string,
        account?: common_serial_typed_message_pb.TypedMessage.AsObject,
    }
}
