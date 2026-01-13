// package: xray.common.net
// file: common/net/network.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NetworkList extends jspb.Message { 
    clearNetworkList(): void;
    getNetworkList(): Array<Network>;
    setNetworkList(value: Array<Network>): NetworkList;
    addNetwork(value: Network, index?: number): Network;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkList.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkList): NetworkList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkList;
    static deserializeBinaryFromReader(message: NetworkList, reader: jspb.BinaryReader): NetworkList;
}

export namespace NetworkList {
    export type AsObject = {
        networkList: Array<Network>,
    }
}

export enum Network {
    UNKNOWN = 0,
    TCP = 2,
    UDP = 3,
    UNIX = 4,
}
