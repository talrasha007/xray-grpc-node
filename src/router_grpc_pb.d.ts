// package: xray.app.router.command
// file: router.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as router_pb from "./router_pb";
import * as common_net_network_pb from "./common/net/network_pb";
import * as common_serial_typed_message_pb from "./common/serial/typed_message_pb";

interface IRoutingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribeRoutingStats: IRoutingServiceService_ISubscribeRoutingStats;
    testRoute: IRoutingServiceService_ITestRoute;
    getBalancerInfo: IRoutingServiceService_IGetBalancerInfo;
    overrideBalancerTarget: IRoutingServiceService_IOverrideBalancerTarget;
    addRule: IRoutingServiceService_IAddRule;
    removeRule: IRoutingServiceService_IRemoveRule;
}

interface IRoutingServiceService_ISubscribeRoutingStats extends grpc.MethodDefinition<router_pb.SubscribeRoutingStatsRequest, router_pb.RoutingContext> {
    path: "/xray.app.router.command.RoutingService/SubscribeRoutingStats";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<router_pb.SubscribeRoutingStatsRequest>;
    requestDeserialize: grpc.deserialize<router_pb.SubscribeRoutingStatsRequest>;
    responseSerialize: grpc.serialize<router_pb.RoutingContext>;
    responseDeserialize: grpc.deserialize<router_pb.RoutingContext>;
}
interface IRoutingServiceService_ITestRoute extends grpc.MethodDefinition<router_pb.TestRouteRequest, router_pb.RoutingContext> {
    path: "/xray.app.router.command.RoutingService/TestRoute";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<router_pb.TestRouteRequest>;
    requestDeserialize: grpc.deserialize<router_pb.TestRouteRequest>;
    responseSerialize: grpc.serialize<router_pb.RoutingContext>;
    responseDeserialize: grpc.deserialize<router_pb.RoutingContext>;
}
interface IRoutingServiceService_IGetBalancerInfo extends grpc.MethodDefinition<router_pb.GetBalancerInfoRequest, router_pb.GetBalancerInfoResponse> {
    path: "/xray.app.router.command.RoutingService/GetBalancerInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<router_pb.GetBalancerInfoRequest>;
    requestDeserialize: grpc.deserialize<router_pb.GetBalancerInfoRequest>;
    responseSerialize: grpc.serialize<router_pb.GetBalancerInfoResponse>;
    responseDeserialize: grpc.deserialize<router_pb.GetBalancerInfoResponse>;
}
interface IRoutingServiceService_IOverrideBalancerTarget extends grpc.MethodDefinition<router_pb.OverrideBalancerTargetRequest, router_pb.OverrideBalancerTargetResponse> {
    path: "/xray.app.router.command.RoutingService/OverrideBalancerTarget";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<router_pb.OverrideBalancerTargetRequest>;
    requestDeserialize: grpc.deserialize<router_pb.OverrideBalancerTargetRequest>;
    responseSerialize: grpc.serialize<router_pb.OverrideBalancerTargetResponse>;
    responseDeserialize: grpc.deserialize<router_pb.OverrideBalancerTargetResponse>;
}
interface IRoutingServiceService_IAddRule extends grpc.MethodDefinition<router_pb.AddRuleRequest, router_pb.AddRuleResponse> {
    path: "/xray.app.router.command.RoutingService/AddRule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<router_pb.AddRuleRequest>;
    requestDeserialize: grpc.deserialize<router_pb.AddRuleRequest>;
    responseSerialize: grpc.serialize<router_pb.AddRuleResponse>;
    responseDeserialize: grpc.deserialize<router_pb.AddRuleResponse>;
}
interface IRoutingServiceService_IRemoveRule extends grpc.MethodDefinition<router_pb.RemoveRuleRequest, router_pb.RemoveRuleResponse> {
    path: "/xray.app.router.command.RoutingService/RemoveRule";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<router_pb.RemoveRuleRequest>;
    requestDeserialize: grpc.deserialize<router_pb.RemoveRuleRequest>;
    responseSerialize: grpc.serialize<router_pb.RemoveRuleResponse>;
    responseDeserialize: grpc.deserialize<router_pb.RemoveRuleResponse>;
}

export const RoutingServiceService: IRoutingServiceService;

export interface IRoutingServiceServer extends grpc.UntypedServiceImplementation {
    subscribeRoutingStats: grpc.handleServerStreamingCall<router_pb.SubscribeRoutingStatsRequest, router_pb.RoutingContext>;
    testRoute: grpc.handleUnaryCall<router_pb.TestRouteRequest, router_pb.RoutingContext>;
    getBalancerInfo: grpc.handleUnaryCall<router_pb.GetBalancerInfoRequest, router_pb.GetBalancerInfoResponse>;
    overrideBalancerTarget: grpc.handleUnaryCall<router_pb.OverrideBalancerTargetRequest, router_pb.OverrideBalancerTargetResponse>;
    addRule: grpc.handleUnaryCall<router_pb.AddRuleRequest, router_pb.AddRuleResponse>;
    removeRule: grpc.handleUnaryCall<router_pb.RemoveRuleRequest, router_pb.RemoveRuleResponse>;
}

export interface IRoutingServiceClient {
    subscribeRoutingStats(request: router_pb.SubscribeRoutingStatsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<router_pb.RoutingContext>;
    subscribeRoutingStats(request: router_pb.SubscribeRoutingStatsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<router_pb.RoutingContext>;
    testRoute(request: router_pb.TestRouteRequest, callback: (error: grpc.ServiceError | null, response: router_pb.RoutingContext) => void): grpc.ClientUnaryCall;
    testRoute(request: router_pb.TestRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.RoutingContext) => void): grpc.ClientUnaryCall;
    testRoute(request: router_pb.TestRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.RoutingContext) => void): grpc.ClientUnaryCall;
    getBalancerInfo(request: router_pb.GetBalancerInfoRequest, callback: (error: grpc.ServiceError | null, response: router_pb.GetBalancerInfoResponse) => void): grpc.ClientUnaryCall;
    getBalancerInfo(request: router_pb.GetBalancerInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.GetBalancerInfoResponse) => void): grpc.ClientUnaryCall;
    getBalancerInfo(request: router_pb.GetBalancerInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.GetBalancerInfoResponse) => void): grpc.ClientUnaryCall;
    overrideBalancerTarget(request: router_pb.OverrideBalancerTargetRequest, callback: (error: grpc.ServiceError | null, response: router_pb.OverrideBalancerTargetResponse) => void): grpc.ClientUnaryCall;
    overrideBalancerTarget(request: router_pb.OverrideBalancerTargetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.OverrideBalancerTargetResponse) => void): grpc.ClientUnaryCall;
    overrideBalancerTarget(request: router_pb.OverrideBalancerTargetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.OverrideBalancerTargetResponse) => void): grpc.ClientUnaryCall;
    addRule(request: router_pb.AddRuleRequest, callback: (error: grpc.ServiceError | null, response: router_pb.AddRuleResponse) => void): grpc.ClientUnaryCall;
    addRule(request: router_pb.AddRuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.AddRuleResponse) => void): grpc.ClientUnaryCall;
    addRule(request: router_pb.AddRuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.AddRuleResponse) => void): grpc.ClientUnaryCall;
    removeRule(request: router_pb.RemoveRuleRequest, callback: (error: grpc.ServiceError | null, response: router_pb.RemoveRuleResponse) => void): grpc.ClientUnaryCall;
    removeRule(request: router_pb.RemoveRuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.RemoveRuleResponse) => void): grpc.ClientUnaryCall;
    removeRule(request: router_pb.RemoveRuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.RemoveRuleResponse) => void): grpc.ClientUnaryCall;
}

export class RoutingServiceClient extends grpc.Client implements IRoutingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public subscribeRoutingStats(request: router_pb.SubscribeRoutingStatsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<router_pb.RoutingContext>;
    public subscribeRoutingStats(request: router_pb.SubscribeRoutingStatsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<router_pb.RoutingContext>;
    public testRoute(request: router_pb.TestRouteRequest, callback: (error: grpc.ServiceError | null, response: router_pb.RoutingContext) => void): grpc.ClientUnaryCall;
    public testRoute(request: router_pb.TestRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.RoutingContext) => void): grpc.ClientUnaryCall;
    public testRoute(request: router_pb.TestRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.RoutingContext) => void): grpc.ClientUnaryCall;
    public getBalancerInfo(request: router_pb.GetBalancerInfoRequest, callback: (error: grpc.ServiceError | null, response: router_pb.GetBalancerInfoResponse) => void): grpc.ClientUnaryCall;
    public getBalancerInfo(request: router_pb.GetBalancerInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.GetBalancerInfoResponse) => void): grpc.ClientUnaryCall;
    public getBalancerInfo(request: router_pb.GetBalancerInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.GetBalancerInfoResponse) => void): grpc.ClientUnaryCall;
    public overrideBalancerTarget(request: router_pb.OverrideBalancerTargetRequest, callback: (error: grpc.ServiceError | null, response: router_pb.OverrideBalancerTargetResponse) => void): grpc.ClientUnaryCall;
    public overrideBalancerTarget(request: router_pb.OverrideBalancerTargetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.OverrideBalancerTargetResponse) => void): grpc.ClientUnaryCall;
    public overrideBalancerTarget(request: router_pb.OverrideBalancerTargetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.OverrideBalancerTargetResponse) => void): grpc.ClientUnaryCall;
    public addRule(request: router_pb.AddRuleRequest, callback: (error: grpc.ServiceError | null, response: router_pb.AddRuleResponse) => void): grpc.ClientUnaryCall;
    public addRule(request: router_pb.AddRuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.AddRuleResponse) => void): grpc.ClientUnaryCall;
    public addRule(request: router_pb.AddRuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.AddRuleResponse) => void): grpc.ClientUnaryCall;
    public removeRule(request: router_pb.RemoveRuleRequest, callback: (error: grpc.ServiceError | null, response: router_pb.RemoveRuleResponse) => void): grpc.ClientUnaryCall;
    public removeRule(request: router_pb.RemoveRuleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.RemoveRuleResponse) => void): grpc.ClientUnaryCall;
    public removeRule(request: router_pb.RemoveRuleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.RemoveRuleResponse) => void): grpc.ClientUnaryCall;
}
