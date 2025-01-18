// package: xray.core
// file: core/config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_serial_typed_message_pb from "../common/serial/typed_message_pb";
import * as transport_global_config_pb from "../transport/global/config_pb";

export class Config extends jspb.Message { 
    clearInboundList(): void;
    getInboundList(): Array<InboundHandlerConfig>;
    setInboundList(value: Array<InboundHandlerConfig>): Config;
    addInbound(value?: InboundHandlerConfig, index?: number): InboundHandlerConfig;
    clearOutboundList(): void;
    getOutboundList(): Array<OutboundHandlerConfig>;
    setOutboundList(value: Array<OutboundHandlerConfig>): Config;
    addOutbound(value?: OutboundHandlerConfig, index?: number): OutboundHandlerConfig;
    clearAppList(): void;
    getAppList(): Array<common_serial_typed_message_pb.TypedMessage>;
    setAppList(value: Array<common_serial_typed_message_pb.TypedMessage>): Config;
    addApp(value?: common_serial_typed_message_pb.TypedMessage, index?: number): common_serial_typed_message_pb.TypedMessage;

    hasTransport(): boolean;
    clearTransport(): void;
    getTransport(): transport_global_config_pb.Config | undefined;
    setTransport(value?: transport_global_config_pb.Config): Config;
    clearExtensionList(): void;
    getExtensionList(): Array<common_serial_typed_message_pb.TypedMessage>;
    setExtensionList(value: Array<common_serial_typed_message_pb.TypedMessage>): Config;
    addExtension$(value?: common_serial_typed_message_pb.TypedMessage, index?: number): common_serial_typed_message_pb.TypedMessage;

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
        inboundList: Array<InboundHandlerConfig.AsObject>,
        outboundList: Array<OutboundHandlerConfig.AsObject>,
        appList: Array<common_serial_typed_message_pb.TypedMessage.AsObject>,
        transport?: transport_global_config_pb.Config.AsObject,
        extensionList: Array<common_serial_typed_message_pb.TypedMessage.AsObject>,
    }
}

export class InboundHandlerConfig extends jspb.Message { 
    getTag(): string;
    setTag(value: string): InboundHandlerConfig;

    hasReceiverSettings(): boolean;
    clearReceiverSettings(): void;
    getReceiverSettings(): common_serial_typed_message_pb.TypedMessage | undefined;
    setReceiverSettings(value?: common_serial_typed_message_pb.TypedMessage): InboundHandlerConfig;

    hasProxySettings(): boolean;
    clearProxySettings(): void;
    getProxySettings(): common_serial_typed_message_pb.TypedMessage | undefined;
    setProxySettings(value?: common_serial_typed_message_pb.TypedMessage): InboundHandlerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InboundHandlerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: InboundHandlerConfig): InboundHandlerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InboundHandlerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InboundHandlerConfig;
    static deserializeBinaryFromReader(message: InboundHandlerConfig, reader: jspb.BinaryReader): InboundHandlerConfig;
}

export namespace InboundHandlerConfig {
    export type AsObject = {
        tag: string,
        receiverSettings?: common_serial_typed_message_pb.TypedMessage.AsObject,
        proxySettings?: common_serial_typed_message_pb.TypedMessage.AsObject,
    }
}

export class OutboundHandlerConfig extends jspb.Message { 
    getTag(): string;
    setTag(value: string): OutboundHandlerConfig;

    hasSenderSettings(): boolean;
    clearSenderSettings(): void;
    getSenderSettings(): common_serial_typed_message_pb.TypedMessage | undefined;
    setSenderSettings(value?: common_serial_typed_message_pb.TypedMessage): OutboundHandlerConfig;

    hasProxySettings(): boolean;
    clearProxySettings(): void;
    getProxySettings(): common_serial_typed_message_pb.TypedMessage | undefined;
    setProxySettings(value?: common_serial_typed_message_pb.TypedMessage): OutboundHandlerConfig;
    getExpire(): number;
    setExpire(value: number): OutboundHandlerConfig;
    getComment(): string;
    setComment(value: string): OutboundHandlerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutboundHandlerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: OutboundHandlerConfig): OutboundHandlerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutboundHandlerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutboundHandlerConfig;
    static deserializeBinaryFromReader(message: OutboundHandlerConfig, reader: jspb.BinaryReader): OutboundHandlerConfig;
}

export namespace OutboundHandlerConfig {
    export type AsObject = {
        tag: string,
        senderSettings?: common_serial_typed_message_pb.TypedMessage.AsObject,
        proxySettings?: common_serial_typed_message_pb.TypedMessage.AsObject,
        expire: number,
        comment: string,
    }
}
