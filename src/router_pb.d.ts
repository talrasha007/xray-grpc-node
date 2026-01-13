// package: xray.app.router.command
// file: router.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_net_network_pb from "./common/net/network_pb";
import * as common_serial_typed_message_pb from "./common/serial/typed_message_pb";

export class RoutingContext extends jspb.Message { 
    getInboundtag(): string;
    setInboundtag(value: string): RoutingContext;
    getNetwork(): common_net_network_pb.Network;
    setNetwork(value: common_net_network_pb.Network): RoutingContext;
    clearSourceipsList(): void;
    getSourceipsList(): Array<Uint8Array | string>;
    getSourceipsList_asU8(): Array<Uint8Array>;
    getSourceipsList_asB64(): Array<string>;
    setSourceipsList(value: Array<Uint8Array | string>): RoutingContext;
    addSourceips(value: Uint8Array | string, index?: number): Uint8Array | string;
    clearTargetipsList(): void;
    getTargetipsList(): Array<Uint8Array | string>;
    getTargetipsList_asU8(): Array<Uint8Array>;
    getTargetipsList_asB64(): Array<string>;
    setTargetipsList(value: Array<Uint8Array | string>): RoutingContext;
    addTargetips(value: Uint8Array | string, index?: number): Uint8Array | string;
    getSourceport(): number;
    setSourceport(value: number): RoutingContext;
    getTargetport(): number;
    setTargetport(value: number): RoutingContext;
    getTargetdomain(): string;
    setTargetdomain(value: string): RoutingContext;
    getProtocol(): string;
    setProtocol(value: string): RoutingContext;
    getUser(): string;
    setUser(value: string): RoutingContext;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;
    clearOutboundgrouptagsList(): void;
    getOutboundgrouptagsList(): Array<string>;
    setOutboundgrouptagsList(value: Array<string>): RoutingContext;
    addOutboundgrouptags(value: string, index?: number): string;
    getOutboundtag(): string;
    setOutboundtag(value: string): RoutingContext;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoutingContext.AsObject;
    static toObject(includeInstance: boolean, msg: RoutingContext): RoutingContext.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoutingContext, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoutingContext;
    static deserializeBinaryFromReader(message: RoutingContext, reader: jspb.BinaryReader): RoutingContext;
}

export namespace RoutingContext {
    export type AsObject = {
        inboundtag: string,
        network: common_net_network_pb.Network,
        sourceipsList: Array<Uint8Array | string>,
        targetipsList: Array<Uint8Array | string>,
        sourceport: number,
        targetport: number,
        targetdomain: string,
        protocol: string,
        user: string,

        attributesMap: Array<[string, string]>,
        outboundgrouptagsList: Array<string>,
        outboundtag: string,
    }
}

export class SubscribeRoutingStatsRequest extends jspb.Message { 
    clearFieldselectorsList(): void;
    getFieldselectorsList(): Array<string>;
    setFieldselectorsList(value: Array<string>): SubscribeRoutingStatsRequest;
    addFieldselectors(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeRoutingStatsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeRoutingStatsRequest): SubscribeRoutingStatsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeRoutingStatsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeRoutingStatsRequest;
    static deserializeBinaryFromReader(message: SubscribeRoutingStatsRequest, reader: jspb.BinaryReader): SubscribeRoutingStatsRequest;
}

export namespace SubscribeRoutingStatsRequest {
    export type AsObject = {
        fieldselectorsList: Array<string>,
    }
}

export class TestRouteRequest extends jspb.Message { 

    hasRoutingcontext(): boolean;
    clearRoutingcontext(): void;
    getRoutingcontext(): RoutingContext | undefined;
    setRoutingcontext(value?: RoutingContext): TestRouteRequest;
    clearFieldselectorsList(): void;
    getFieldselectorsList(): Array<string>;
    setFieldselectorsList(value: Array<string>): TestRouteRequest;
    addFieldselectors(value: string, index?: number): string;
    getPublishresult(): boolean;
    setPublishresult(value: boolean): TestRouteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TestRouteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TestRouteRequest): TestRouteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TestRouteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TestRouteRequest;
    static deserializeBinaryFromReader(message: TestRouteRequest, reader: jspb.BinaryReader): TestRouteRequest;
}

export namespace TestRouteRequest {
    export type AsObject = {
        routingcontext?: RoutingContext.AsObject,
        fieldselectorsList: Array<string>,
        publishresult: boolean,
    }
}

export class PrincipleTargetInfo extends jspb.Message { 
    clearTagList(): void;
    getTagList(): Array<string>;
    setTagList(value: Array<string>): PrincipleTargetInfo;
    addTag(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrincipleTargetInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PrincipleTargetInfo): PrincipleTargetInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrincipleTargetInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrincipleTargetInfo;
    static deserializeBinaryFromReader(message: PrincipleTargetInfo, reader: jspb.BinaryReader): PrincipleTargetInfo;
}

export namespace PrincipleTargetInfo {
    export type AsObject = {
        tagList: Array<string>,
    }
}

export class OverrideInfo extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): OverrideInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OverrideInfo.AsObject;
    static toObject(includeInstance: boolean, msg: OverrideInfo): OverrideInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OverrideInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OverrideInfo;
    static deserializeBinaryFromReader(message: OverrideInfo, reader: jspb.BinaryReader): OverrideInfo;
}

export namespace OverrideInfo {
    export type AsObject = {
        target: string,
    }
}

export class BalancerMsg extends jspb.Message { 

    hasOverride(): boolean;
    clearOverride(): void;
    getOverride(): OverrideInfo | undefined;
    setOverride(value?: OverrideInfo): BalancerMsg;

    hasPrincipleTarget(): boolean;
    clearPrincipleTarget(): void;
    getPrincipleTarget(): PrincipleTargetInfo | undefined;
    setPrincipleTarget(value?: PrincipleTargetInfo): BalancerMsg;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalancerMsg.AsObject;
    static toObject(includeInstance: boolean, msg: BalancerMsg): BalancerMsg.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalancerMsg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalancerMsg;
    static deserializeBinaryFromReader(message: BalancerMsg, reader: jspb.BinaryReader): BalancerMsg;
}

export namespace BalancerMsg {
    export type AsObject = {
        override?: OverrideInfo.AsObject,
        principleTarget?: PrincipleTargetInfo.AsObject,
    }
}

export class GetBalancerInfoRequest extends jspb.Message { 
    getTag(): string;
    setTag(value: string): GetBalancerInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBalancerInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBalancerInfoRequest): GetBalancerInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBalancerInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBalancerInfoRequest;
    static deserializeBinaryFromReader(message: GetBalancerInfoRequest, reader: jspb.BinaryReader): GetBalancerInfoRequest;
}

export namespace GetBalancerInfoRequest {
    export type AsObject = {
        tag: string,
    }
}

export class GetBalancerInfoResponse extends jspb.Message { 

    hasBalancer(): boolean;
    clearBalancer(): void;
    getBalancer(): BalancerMsg | undefined;
    setBalancer(value?: BalancerMsg): GetBalancerInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBalancerInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBalancerInfoResponse): GetBalancerInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBalancerInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBalancerInfoResponse;
    static deserializeBinaryFromReader(message: GetBalancerInfoResponse, reader: jspb.BinaryReader): GetBalancerInfoResponse;
}

export namespace GetBalancerInfoResponse {
    export type AsObject = {
        balancer?: BalancerMsg.AsObject,
    }
}

export class OverrideBalancerTargetRequest extends jspb.Message { 
    getBalancertag(): string;
    setBalancertag(value: string): OverrideBalancerTargetRequest;
    getTarget(): string;
    setTarget(value: string): OverrideBalancerTargetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OverrideBalancerTargetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OverrideBalancerTargetRequest): OverrideBalancerTargetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OverrideBalancerTargetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OverrideBalancerTargetRequest;
    static deserializeBinaryFromReader(message: OverrideBalancerTargetRequest, reader: jspb.BinaryReader): OverrideBalancerTargetRequest;
}

export namespace OverrideBalancerTargetRequest {
    export type AsObject = {
        balancertag: string,
        target: string,
    }
}

export class OverrideBalancerTargetResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OverrideBalancerTargetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OverrideBalancerTargetResponse): OverrideBalancerTargetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OverrideBalancerTargetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OverrideBalancerTargetResponse;
    static deserializeBinaryFromReader(message: OverrideBalancerTargetResponse, reader: jspb.BinaryReader): OverrideBalancerTargetResponse;
}

export namespace OverrideBalancerTargetResponse {
    export type AsObject = {
    }
}

export class AddRuleRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): common_serial_typed_message_pb.TypedMessage | undefined;
    setConfig(value?: common_serial_typed_message_pb.TypedMessage): AddRuleRequest;
    getShouldappend(): boolean;
    setShouldappend(value: boolean): AddRuleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddRuleRequest): AddRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRuleRequest;
    static deserializeBinaryFromReader(message: AddRuleRequest, reader: jspb.BinaryReader): AddRuleRequest;
}

export namespace AddRuleRequest {
    export type AsObject = {
        config?: common_serial_typed_message_pb.TypedMessage.AsObject,
        shouldappend: boolean,
    }
}

export class AddRuleResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddRuleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddRuleResponse): AddRuleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddRuleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddRuleResponse;
    static deserializeBinaryFromReader(message: AddRuleResponse, reader: jspb.BinaryReader): AddRuleResponse;
}

export namespace AddRuleResponse {
    export type AsObject = {
    }
}

export class RemoveRuleRequest extends jspb.Message { 
    getRuletag(): string;
    setRuletag(value: string): RemoveRuleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveRuleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveRuleRequest): RemoveRuleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveRuleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveRuleRequest;
    static deserializeBinaryFromReader(message: RemoveRuleRequest, reader: jspb.BinaryReader): RemoveRuleRequest;
}

export namespace RemoveRuleRequest {
    export type AsObject = {
        ruletag: string,
    }
}

export class RemoveRuleResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveRuleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveRuleResponse): RemoveRuleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveRuleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveRuleResponse;
    static deserializeBinaryFromReader(message: RemoveRuleResponse, reader: jspb.BinaryReader): RemoveRuleResponse;
}

export namespace RemoveRuleResponse {
    export type AsObject = {
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
