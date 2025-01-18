// package: xray.app.stats.command
// file: stats.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetStatsRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetStatsRequest;
    getReset(): boolean;
    setReset(value: boolean): GetStatsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatsRequest): GetStatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatsRequest;
    static deserializeBinaryFromReader(message: GetStatsRequest, reader: jspb.BinaryReader): GetStatsRequest;
}

export namespace GetStatsRequest {
    export type AsObject = {
        name: string,
        reset: boolean,
    }
}

export class Stat extends jspb.Message { 
    getName(): string;
    setName(value: string): Stat;
    getValue(): number;
    setValue(value: number): Stat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stat.AsObject;
    static toObject(includeInstance: boolean, msg: Stat): Stat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stat;
    static deserializeBinaryFromReader(message: Stat, reader: jspb.BinaryReader): Stat;
}

export namespace Stat {
    export type AsObject = {
        name: string,
        value: number,
    }
}

export class GetStatsResponse extends jspb.Message { 

    hasStat(): boolean;
    clearStat(): void;
    getStat(): Stat | undefined;
    setStat(value?: Stat): GetStatsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetStatsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetStatsResponse): GetStatsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetStatsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetStatsResponse;
    static deserializeBinaryFromReader(message: GetStatsResponse, reader: jspb.BinaryReader): GetStatsResponse;
}

export namespace GetStatsResponse {
    export type AsObject = {
        stat?: Stat.AsObject,
    }
}

export class QueryStatsRequest extends jspb.Message { 
    getPattern(): string;
    setPattern(value: string): QueryStatsRequest;
    getReset(): boolean;
    setReset(value: boolean): QueryStatsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryStatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QueryStatsRequest): QueryStatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryStatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryStatsRequest;
    static deserializeBinaryFromReader(message: QueryStatsRequest, reader: jspb.BinaryReader): QueryStatsRequest;
}

export namespace QueryStatsRequest {
    export type AsObject = {
        pattern: string,
        reset: boolean,
    }
}

export class QueryStatsResponse extends jspb.Message { 
    clearStatList(): void;
    getStatList(): Array<Stat>;
    setStatList(value: Array<Stat>): QueryStatsResponse;
    addStat(value?: Stat, index?: number): Stat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QueryStatsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QueryStatsResponse): QueryStatsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QueryStatsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QueryStatsResponse;
    static deserializeBinaryFromReader(message: QueryStatsResponse, reader: jspb.BinaryReader): QueryStatsResponse;
}

export namespace QueryStatsResponse {
    export type AsObject = {
        statList: Array<Stat.AsObject>,
    }
}

export class SysStatsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SysStatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SysStatsRequest): SysStatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SysStatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SysStatsRequest;
    static deserializeBinaryFromReader(message: SysStatsRequest, reader: jspb.BinaryReader): SysStatsRequest;
}

export namespace SysStatsRequest {
    export type AsObject = {
    }
}

export class SysStatsResponse extends jspb.Message { 
    getNumgoroutine(): number;
    setNumgoroutine(value: number): SysStatsResponse;
    getNumgc(): number;
    setNumgc(value: number): SysStatsResponse;
    getAlloc(): number;
    setAlloc(value: number): SysStatsResponse;
    getTotalalloc(): number;
    setTotalalloc(value: number): SysStatsResponse;
    getSys(): number;
    setSys(value: number): SysStatsResponse;
    getMallocs(): number;
    setMallocs(value: number): SysStatsResponse;
    getFrees(): number;
    setFrees(value: number): SysStatsResponse;
    getLiveobjects(): number;
    setLiveobjects(value: number): SysStatsResponse;
    getPausetotalns(): number;
    setPausetotalns(value: number): SysStatsResponse;
    getUptime(): number;
    setUptime(value: number): SysStatsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SysStatsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SysStatsResponse): SysStatsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SysStatsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SysStatsResponse;
    static deserializeBinaryFromReader(message: SysStatsResponse, reader: jspb.BinaryReader): SysStatsResponse;
}

export namespace SysStatsResponse {
    export type AsObject = {
        numgoroutine: number,
        numgc: number,
        alloc: number,
        totalalloc: number,
        sys: number,
        mallocs: number,
        frees: number,
        liveobjects: number,
        pausetotalns: number,
        uptime: number,
    }
}

export class Config extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
    export type AsObject = {
    }
}
