// package: xray.common.serial
// file: common/serial/typed_message.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TypedMessage extends jspb.Message { 
    getType(): string;
    setType(value: string): TypedMessage;
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): TypedMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypedMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TypedMessage): TypedMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypedMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypedMessage;
    static deserializeBinaryFromReader(message: TypedMessage, reader: jspb.BinaryReader): TypedMessage;
}

export namespace TypedMessage {
    export type AsObject = {
        type: string,
        value: Uint8Array | string,
    }
}
