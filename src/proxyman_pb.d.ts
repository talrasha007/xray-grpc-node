// package: xray.app.proxyman.command
// file: proxyman.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_protocol_user_pb from "./common/protocol/user_pb";
import * as common_serial_typed_message_pb from "./common/serial/typed_message_pb";
import * as core_config_pb from "./core/config_pb";

export class AddUserOperation extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): common_protocol_user_pb.User | undefined;
    setUser(value?: common_protocol_user_pb.User): AddUserOperation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddUserOperation.AsObject;
    static toObject(includeInstance: boolean, msg: AddUserOperation): AddUserOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddUserOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddUserOperation;
    static deserializeBinaryFromReader(message: AddUserOperation, reader: jspb.BinaryReader): AddUserOperation;
}

export namespace AddUserOperation {
    export type AsObject = {
        user?: common_protocol_user_pb.User.AsObject,
    }
}

export class RemoveUserOperation extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): RemoveUserOperation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveUserOperation.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveUserOperation): RemoveUserOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveUserOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveUserOperation;
    static deserializeBinaryFromReader(message: RemoveUserOperation, reader: jspb.BinaryReader): RemoveUserOperation;
}

export namespace RemoveUserOperation {
    export type AsObject = {
        email: string,
    }
}

export class AddInboundRequest extends jspb.Message { 

    hasInbound(): boolean;
    clearInbound(): void;
    getInbound(): core_config_pb.InboundHandlerConfig | undefined;
    setInbound(value?: core_config_pb.InboundHandlerConfig): AddInboundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddInboundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddInboundRequest): AddInboundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddInboundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddInboundRequest;
    static deserializeBinaryFromReader(message: AddInboundRequest, reader: jspb.BinaryReader): AddInboundRequest;
}

export namespace AddInboundRequest {
    export type AsObject = {
        inbound?: core_config_pb.InboundHandlerConfig.AsObject,
    }
}

export class AddInboundResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddInboundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddInboundResponse): AddInboundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddInboundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddInboundResponse;
    static deserializeBinaryFromReader(message: AddInboundResponse, reader: jspb.BinaryReader): AddInboundResponse;
}

export namespace AddInboundResponse {
    export type AsObject = {
    }
}

export class RemoveInboundRequest extends jspb.Message { 
    getTag(): string;
    setTag(value: string): RemoveInboundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveInboundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveInboundRequest): RemoveInboundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveInboundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveInboundRequest;
    static deserializeBinaryFromReader(message: RemoveInboundRequest, reader: jspb.BinaryReader): RemoveInboundRequest;
}

export namespace RemoveInboundRequest {
    export type AsObject = {
        tag: string,
    }
}

export class RemoveInboundResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveInboundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveInboundResponse): RemoveInboundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveInboundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveInboundResponse;
    static deserializeBinaryFromReader(message: RemoveInboundResponse, reader: jspb.BinaryReader): RemoveInboundResponse;
}

export namespace RemoveInboundResponse {
    export type AsObject = {
    }
}

export class AlterInboundRequest extends jspb.Message { 
    getTag(): string;
    setTag(value: string): AlterInboundRequest;

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): common_serial_typed_message_pb.TypedMessage | undefined;
    setOperation(value?: common_serial_typed_message_pb.TypedMessage): AlterInboundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlterInboundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AlterInboundRequest): AlterInboundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlterInboundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlterInboundRequest;
    static deserializeBinaryFromReader(message: AlterInboundRequest, reader: jspb.BinaryReader): AlterInboundRequest;
}

export namespace AlterInboundRequest {
    export type AsObject = {
        tag: string,
        operation?: common_serial_typed_message_pb.TypedMessage.AsObject,
    }
}

export class AlterInboundResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlterInboundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AlterInboundResponse): AlterInboundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlterInboundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlterInboundResponse;
    static deserializeBinaryFromReader(message: AlterInboundResponse, reader: jspb.BinaryReader): AlterInboundResponse;
}

export namespace AlterInboundResponse {
    export type AsObject = {
    }
}

export class AddOutboundRequest extends jspb.Message { 

    hasOutbound(): boolean;
    clearOutbound(): void;
    getOutbound(): core_config_pb.OutboundHandlerConfig | undefined;
    setOutbound(value?: core_config_pb.OutboundHandlerConfig): AddOutboundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddOutboundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddOutboundRequest): AddOutboundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddOutboundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddOutboundRequest;
    static deserializeBinaryFromReader(message: AddOutboundRequest, reader: jspb.BinaryReader): AddOutboundRequest;
}

export namespace AddOutboundRequest {
    export type AsObject = {
        outbound?: core_config_pb.OutboundHandlerConfig.AsObject,
    }
}

export class AddOutboundResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddOutboundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddOutboundResponse): AddOutboundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddOutboundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddOutboundResponse;
    static deserializeBinaryFromReader(message: AddOutboundResponse, reader: jspb.BinaryReader): AddOutboundResponse;
}

export namespace AddOutboundResponse {
    export type AsObject = {
    }
}

export class RemoveOutboundRequest extends jspb.Message { 
    getTag(): string;
    setTag(value: string): RemoveOutboundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveOutboundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveOutboundRequest): RemoveOutboundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveOutboundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveOutboundRequest;
    static deserializeBinaryFromReader(message: RemoveOutboundRequest, reader: jspb.BinaryReader): RemoveOutboundRequest;
}

export namespace RemoveOutboundRequest {
    export type AsObject = {
        tag: string,
    }
}

export class RemoveOutboundResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveOutboundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveOutboundResponse): RemoveOutboundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveOutboundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveOutboundResponse;
    static deserializeBinaryFromReader(message: RemoveOutboundResponse, reader: jspb.BinaryReader): RemoveOutboundResponse;
}

export namespace RemoveOutboundResponse {
    export type AsObject = {
    }
}

export class AlterOutboundRequest extends jspb.Message { 
    getTag(): string;
    setTag(value: string): AlterOutboundRequest;

    hasOperation(): boolean;
    clearOperation(): void;
    getOperation(): common_serial_typed_message_pb.TypedMessage | undefined;
    setOperation(value?: common_serial_typed_message_pb.TypedMessage): AlterOutboundRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlterOutboundRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AlterOutboundRequest): AlterOutboundRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlterOutboundRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlterOutboundRequest;
    static deserializeBinaryFromReader(message: AlterOutboundRequest, reader: jspb.BinaryReader): AlterOutboundRequest;
}

export namespace AlterOutboundRequest {
    export type AsObject = {
        tag: string,
        operation?: common_serial_typed_message_pb.TypedMessage.AsObject,
    }
}

export class AlterOutboundResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AlterOutboundResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AlterOutboundResponse): AlterOutboundResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AlterOutboundResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AlterOutboundResponse;
    static deserializeBinaryFromReader(message: AlterOutboundResponse, reader: jspb.BinaryReader): AlterOutboundResponse;
}

export namespace AlterOutboundResponse {
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
