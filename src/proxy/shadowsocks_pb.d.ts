// package: xray.proxy.shadowsocks
// file: proxy/shadowsocks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Account extends jspb.Message { 
    getPassword(): string;
    setPassword(value: string): Account;
    getCipherType(): CipherType;
    setCipherType(value: CipherType): Account;
    getIvCheck(): boolean;
    setIvCheck(value: boolean): Account;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
    export type AsObject = {
        password: string,
        cipherType: CipherType,
        ivCheck: boolean,
    }
}

export enum CipherType {
    UNKNOWN = 0,
    AES_128_GCM = 5,
    AES_256_GCM = 6,
    CHACHA20_POLY1305 = 7,
    XCHACHA20_POLY1305 = 8,
    NONE = 9,
}
