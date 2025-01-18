// package: xray.app.proxyman.command
// file: proxyman.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proxyman_pb from "./proxyman_pb";
import * as common_protocol_user_pb from "./common/protocol/user_pb";
import * as common_serial_typed_message_pb from "./common/serial/typed_message_pb";
import * as core_config_pb from "./core/config_pb";

interface IHandlerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addInbound: IHandlerServiceService_IAddInbound;
    removeInbound: IHandlerServiceService_IRemoveInbound;
    alterInbound: IHandlerServiceService_IAlterInbound;
    addOutbound: IHandlerServiceService_IAddOutbound;
    removeOutbound: IHandlerServiceService_IRemoveOutbound;
    alterOutbound: IHandlerServiceService_IAlterOutbound;
}

interface IHandlerServiceService_IAddInbound extends grpc.MethodDefinition<proxyman_pb.AddInboundRequest, proxyman_pb.AddInboundResponse> {
    path: "/xray.app.proxyman.command.HandlerService/AddInbound";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxyman_pb.AddInboundRequest>;
    requestDeserialize: grpc.deserialize<proxyman_pb.AddInboundRequest>;
    responseSerialize: grpc.serialize<proxyman_pb.AddInboundResponse>;
    responseDeserialize: grpc.deserialize<proxyman_pb.AddInboundResponse>;
}
interface IHandlerServiceService_IRemoveInbound extends grpc.MethodDefinition<proxyman_pb.RemoveInboundRequest, proxyman_pb.RemoveInboundResponse> {
    path: "/xray.app.proxyman.command.HandlerService/RemoveInbound";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxyman_pb.RemoveInboundRequest>;
    requestDeserialize: grpc.deserialize<proxyman_pb.RemoveInboundRequest>;
    responseSerialize: grpc.serialize<proxyman_pb.RemoveInboundResponse>;
    responseDeserialize: grpc.deserialize<proxyman_pb.RemoveInboundResponse>;
}
interface IHandlerServiceService_IAlterInbound extends grpc.MethodDefinition<proxyman_pb.AlterInboundRequest, proxyman_pb.AlterInboundResponse> {
    path: "/xray.app.proxyman.command.HandlerService/AlterInbound";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxyman_pb.AlterInboundRequest>;
    requestDeserialize: grpc.deserialize<proxyman_pb.AlterInboundRequest>;
    responseSerialize: grpc.serialize<proxyman_pb.AlterInboundResponse>;
    responseDeserialize: grpc.deserialize<proxyman_pb.AlterInboundResponse>;
}
interface IHandlerServiceService_IAddOutbound extends grpc.MethodDefinition<proxyman_pb.AddOutboundRequest, proxyman_pb.AddOutboundResponse> {
    path: "/xray.app.proxyman.command.HandlerService/AddOutbound";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxyman_pb.AddOutboundRequest>;
    requestDeserialize: grpc.deserialize<proxyman_pb.AddOutboundRequest>;
    responseSerialize: grpc.serialize<proxyman_pb.AddOutboundResponse>;
    responseDeserialize: grpc.deserialize<proxyman_pb.AddOutboundResponse>;
}
interface IHandlerServiceService_IRemoveOutbound extends grpc.MethodDefinition<proxyman_pb.RemoveOutboundRequest, proxyman_pb.RemoveOutboundResponse> {
    path: "/xray.app.proxyman.command.HandlerService/RemoveOutbound";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxyman_pb.RemoveOutboundRequest>;
    requestDeserialize: grpc.deserialize<proxyman_pb.RemoveOutboundRequest>;
    responseSerialize: grpc.serialize<proxyman_pb.RemoveOutboundResponse>;
    responseDeserialize: grpc.deserialize<proxyman_pb.RemoveOutboundResponse>;
}
interface IHandlerServiceService_IAlterOutbound extends grpc.MethodDefinition<proxyman_pb.AlterOutboundRequest, proxyman_pb.AlterOutboundResponse> {
    path: "/xray.app.proxyman.command.HandlerService/AlterOutbound";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proxyman_pb.AlterOutboundRequest>;
    requestDeserialize: grpc.deserialize<proxyman_pb.AlterOutboundRequest>;
    responseSerialize: grpc.serialize<proxyman_pb.AlterOutboundResponse>;
    responseDeserialize: grpc.deserialize<proxyman_pb.AlterOutboundResponse>;
}

export const HandlerServiceService: IHandlerServiceService;

export interface IHandlerServiceServer extends grpc.UntypedServiceImplementation {
    addInbound: grpc.handleUnaryCall<proxyman_pb.AddInboundRequest, proxyman_pb.AddInboundResponse>;
    removeInbound: grpc.handleUnaryCall<proxyman_pb.RemoveInboundRequest, proxyman_pb.RemoveInboundResponse>;
    alterInbound: grpc.handleUnaryCall<proxyman_pb.AlterInboundRequest, proxyman_pb.AlterInboundResponse>;
    addOutbound: grpc.handleUnaryCall<proxyman_pb.AddOutboundRequest, proxyman_pb.AddOutboundResponse>;
    removeOutbound: grpc.handleUnaryCall<proxyman_pb.RemoveOutboundRequest, proxyman_pb.RemoveOutboundResponse>;
    alterOutbound: grpc.handleUnaryCall<proxyman_pb.AlterOutboundRequest, proxyman_pb.AlterOutboundResponse>;
}

export interface IHandlerServiceClient {
    addInbound(request: proxyman_pb.AddInboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddInboundResponse) => void): grpc.ClientUnaryCall;
    addInbound(request: proxyman_pb.AddInboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddInboundResponse) => void): grpc.ClientUnaryCall;
    addInbound(request: proxyman_pb.AddInboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddInboundResponse) => void): grpc.ClientUnaryCall;
    removeInbound(request: proxyman_pb.RemoveInboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveInboundResponse) => void): grpc.ClientUnaryCall;
    removeInbound(request: proxyman_pb.RemoveInboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveInboundResponse) => void): grpc.ClientUnaryCall;
    removeInbound(request: proxyman_pb.RemoveInboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveInboundResponse) => void): grpc.ClientUnaryCall;
    alterInbound(request: proxyman_pb.AlterInboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterInboundResponse) => void): grpc.ClientUnaryCall;
    alterInbound(request: proxyman_pb.AlterInboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterInboundResponse) => void): grpc.ClientUnaryCall;
    alterInbound(request: proxyman_pb.AlterInboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterInboundResponse) => void): grpc.ClientUnaryCall;
    addOutbound(request: proxyman_pb.AddOutboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddOutboundResponse) => void): grpc.ClientUnaryCall;
    addOutbound(request: proxyman_pb.AddOutboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddOutboundResponse) => void): grpc.ClientUnaryCall;
    addOutbound(request: proxyman_pb.AddOutboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddOutboundResponse) => void): grpc.ClientUnaryCall;
    removeOutbound(request: proxyman_pb.RemoveOutboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveOutboundResponse) => void): grpc.ClientUnaryCall;
    removeOutbound(request: proxyman_pb.RemoveOutboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveOutboundResponse) => void): grpc.ClientUnaryCall;
    removeOutbound(request: proxyman_pb.RemoveOutboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveOutboundResponse) => void): grpc.ClientUnaryCall;
    alterOutbound(request: proxyman_pb.AlterOutboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterOutboundResponse) => void): grpc.ClientUnaryCall;
    alterOutbound(request: proxyman_pb.AlterOutboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterOutboundResponse) => void): grpc.ClientUnaryCall;
    alterOutbound(request: proxyman_pb.AlterOutboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterOutboundResponse) => void): grpc.ClientUnaryCall;
}

export class HandlerServiceClient extends grpc.Client implements IHandlerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addInbound(request: proxyman_pb.AddInboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddInboundResponse) => void): grpc.ClientUnaryCall;
    public addInbound(request: proxyman_pb.AddInboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddInboundResponse) => void): grpc.ClientUnaryCall;
    public addInbound(request: proxyman_pb.AddInboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddInboundResponse) => void): grpc.ClientUnaryCall;
    public removeInbound(request: proxyman_pb.RemoveInboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveInboundResponse) => void): grpc.ClientUnaryCall;
    public removeInbound(request: proxyman_pb.RemoveInboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveInboundResponse) => void): grpc.ClientUnaryCall;
    public removeInbound(request: proxyman_pb.RemoveInboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveInboundResponse) => void): grpc.ClientUnaryCall;
    public alterInbound(request: proxyman_pb.AlterInboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterInboundResponse) => void): grpc.ClientUnaryCall;
    public alterInbound(request: proxyman_pb.AlterInboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterInboundResponse) => void): grpc.ClientUnaryCall;
    public alterInbound(request: proxyman_pb.AlterInboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterInboundResponse) => void): grpc.ClientUnaryCall;
    public addOutbound(request: proxyman_pb.AddOutboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddOutboundResponse) => void): grpc.ClientUnaryCall;
    public addOutbound(request: proxyman_pb.AddOutboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddOutboundResponse) => void): grpc.ClientUnaryCall;
    public addOutbound(request: proxyman_pb.AddOutboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AddOutboundResponse) => void): grpc.ClientUnaryCall;
    public removeOutbound(request: proxyman_pb.RemoveOutboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveOutboundResponse) => void): grpc.ClientUnaryCall;
    public removeOutbound(request: proxyman_pb.RemoveOutboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveOutboundResponse) => void): grpc.ClientUnaryCall;
    public removeOutbound(request: proxyman_pb.RemoveOutboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.RemoveOutboundResponse) => void): grpc.ClientUnaryCall;
    public alterOutbound(request: proxyman_pb.AlterOutboundRequest, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterOutboundResponse) => void): grpc.ClientUnaryCall;
    public alterOutbound(request: proxyman_pb.AlterOutboundRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterOutboundResponse) => void): grpc.ClientUnaryCall;
    public alterOutbound(request: proxyman_pb.AlterOutboundRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proxyman_pb.AlterOutboundResponse) => void): grpc.ClientUnaryCall;
}
