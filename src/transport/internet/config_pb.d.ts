// package: xray.transport.internet
// file: transport/internet/config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_serial_typed_message_pb from "../../common/serial/typed_message_pb";

export class TransportConfig extends jspb.Message { 
    getProtocol(): TransportProtocol;
    setProtocol(value: TransportProtocol): TransportConfig;
    getProtocolName(): string;
    setProtocolName(value: string): TransportConfig;

    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): common_serial_typed_message_pb.TypedMessage | undefined;
    setSettings(value?: common_serial_typed_message_pb.TypedMessage): TransportConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransportConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TransportConfig): TransportConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransportConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransportConfig;
    static deserializeBinaryFromReader(message: TransportConfig, reader: jspb.BinaryReader): TransportConfig;
}

export namespace TransportConfig {
    export type AsObject = {
        protocol: TransportProtocol,
        protocolName: string,
        settings?: common_serial_typed_message_pb.TypedMessage.AsObject,
    }
}

export class StreamConfig extends jspb.Message { 
    getProtocol(): TransportProtocol;
    setProtocol(value: TransportProtocol): StreamConfig;
    getProtocolName(): string;
    setProtocolName(value: string): StreamConfig;
    clearTransportSettingsList(): void;
    getTransportSettingsList(): Array<TransportConfig>;
    setTransportSettingsList(value: Array<TransportConfig>): StreamConfig;
    addTransportSettings(value?: TransportConfig, index?: number): TransportConfig;
    getSecurityType(): string;
    setSecurityType(value: string): StreamConfig;
    clearSecuritySettingsList(): void;
    getSecuritySettingsList(): Array<common_serial_typed_message_pb.TypedMessage>;
    setSecuritySettingsList(value: Array<common_serial_typed_message_pb.TypedMessage>): StreamConfig;
    addSecuritySettings(value?: common_serial_typed_message_pb.TypedMessage, index?: number): common_serial_typed_message_pb.TypedMessage;

    hasSocketSettings(): boolean;
    clearSocketSettings(): void;
    getSocketSettings(): SocketConfig | undefined;
    setSocketSettings(value?: SocketConfig): StreamConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamConfig.AsObject;
    static toObject(includeInstance: boolean, msg: StreamConfig): StreamConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamConfig;
    static deserializeBinaryFromReader(message: StreamConfig, reader: jspb.BinaryReader): StreamConfig;
}

export namespace StreamConfig {
    export type AsObject = {
        protocol: TransportProtocol,
        protocolName: string,
        transportSettingsList: Array<TransportConfig.AsObject>,
        securityType: string,
        securitySettingsList: Array<common_serial_typed_message_pb.TypedMessage.AsObject>,
        socketSettings?: SocketConfig.AsObject,
    }
}

export class ProxyConfig extends jspb.Message { 
    getTag(): string;
    setTag(value: string): ProxyConfig;
    getTransportlayerproxy(): boolean;
    setTransportlayerproxy(value: boolean): ProxyConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProxyConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ProxyConfig): ProxyConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProxyConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProxyConfig;
    static deserializeBinaryFromReader(message: ProxyConfig, reader: jspb.BinaryReader): ProxyConfig;
}

export namespace ProxyConfig {
    export type AsObject = {
        tag: string,
        transportlayerproxy: boolean,
    }
}

export class SocketConfig extends jspb.Message { 
    getMark(): number;
    setMark(value: number): SocketConfig;
    getTfo(): number;
    setTfo(value: number): SocketConfig;
    getTproxy(): SocketConfig.TProxyMode;
    setTproxy(value: SocketConfig.TProxyMode): SocketConfig;
    getReceiveOriginalDestAddress(): boolean;
    setReceiveOriginalDestAddress(value: boolean): SocketConfig;
    getBindAddress(): Uint8Array | string;
    getBindAddress_asU8(): Uint8Array;
    getBindAddress_asB64(): string;
    setBindAddress(value: Uint8Array | string): SocketConfig;
    getBindPort(): number;
    setBindPort(value: number): SocketConfig;
    getAcceptProxyProtocol(): boolean;
    setAcceptProxyProtocol(value: boolean): SocketConfig;
    getDomainStrategy(): DomainStrategy;
    setDomainStrategy(value: DomainStrategy): SocketConfig;
    getDialerProxy(): string;
    setDialerProxy(value: string): SocketConfig;
    getTcpKeepAliveInterval(): number;
    setTcpKeepAliveInterval(value: number): SocketConfig;
    getTcpKeepAliveIdle(): number;
    setTcpKeepAliveIdle(value: number): SocketConfig;
    getTcpCongestion(): string;
    setTcpCongestion(value: string): SocketConfig;
    getInterface(): string;
    setInterface(value: string): SocketConfig;
    getV6only(): boolean;
    setV6only(value: boolean): SocketConfig;
    getTcpWindowClamp(): number;
    setTcpWindowClamp(value: number): SocketConfig;
    getTcpUserTimeout(): number;
    setTcpUserTimeout(value: number): SocketConfig;
    getTcpMaxSeg(): number;
    setTcpMaxSeg(value: number): SocketConfig;
    getTcpNoDelay(): boolean;
    setTcpNoDelay(value: boolean): SocketConfig;
    getTcpMptcp(): boolean;
    setTcpMptcp(value: boolean): SocketConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SocketConfig.AsObject;
    static toObject(includeInstance: boolean, msg: SocketConfig): SocketConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SocketConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SocketConfig;
    static deserializeBinaryFromReader(message: SocketConfig, reader: jspb.BinaryReader): SocketConfig;
}

export namespace SocketConfig {
    export type AsObject = {
        mark: number,
        tfo: number,
        tproxy: SocketConfig.TProxyMode,
        receiveOriginalDestAddress: boolean,
        bindAddress: Uint8Array | string,
        bindPort: number,
        acceptProxyProtocol: boolean,
        domainStrategy: DomainStrategy,
        dialerProxy: string,
        tcpKeepAliveInterval: number,
        tcpKeepAliveIdle: number,
        tcpCongestion: string,
        pb_interface: string,
        v6only: boolean,
        tcpWindowClamp: number,
        tcpUserTimeout: number,
        tcpMaxSeg: number,
        tcpNoDelay: boolean,
        tcpMptcp: boolean,
    }

    export enum TProxyMode {
    OFF = 0,
    TPROXY = 1,
    REDIRECT = 2,
    }

}

export enum TransportProtocol {
    TCP = 0,
    UDP = 1,
    MKCP = 2,
    WEBSOCKET = 3,
    HTTP = 4,
    DOMAINSOCKET = 5,
}

export enum DomainStrategy {
    AS_IS = 0,
    USE_IP = 1,
    USE_IP4 = 2,
    USE_IP6 = 3,
    USE_IP46 = 4,
    USE_IP64 = 5,
    FORCE_IP = 6,
    FORCE_IP4 = 7,
    FORCE_IP6 = 8,
    FORCE_IP46 = 9,
    FORCE_IP64 = 10,
}
