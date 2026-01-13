// package: xray.common.net
// file: common/net/port.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class PortRange extends jspb.Message { 
    getFrom(): number;
    setFrom(value: number): PortRange;
    getTo(): number;
    setTo(value: number): PortRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortRange.AsObject;
    static toObject(includeInstance: boolean, msg: PortRange): PortRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortRange;
    static deserializeBinaryFromReader(message: PortRange, reader: jspb.BinaryReader): PortRange;
}

export namespace PortRange {
    export type AsObject = {
        from: number,
        to: number,
    }
}

export class PortList extends jspb.Message { 
    clearRangeList(): void;
    getRangeList(): Array<PortRange>;
    setRangeList(value: Array<PortRange>): PortList;
    addRange(value?: PortRange, index?: number): PortRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortList.AsObject;
    static toObject(includeInstance: boolean, msg: PortList): PortList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortList;
    static deserializeBinaryFromReader(message: PortList, reader: jspb.BinaryReader): PortList;
}

export namespace PortList {
    export type AsObject = {
        rangeList: Array<PortRange.AsObject>,
    }
}
