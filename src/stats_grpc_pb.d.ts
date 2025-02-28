// package: xray.app.stats.command
// file: stats.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as stats_pb from "./stats_pb";

interface IStatsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getStats: IStatsServiceService_IGetStats;
    getStatsOnline: IStatsServiceService_IGetStatsOnline;
    queryStats: IStatsServiceService_IQueryStats;
    getSysStats: IStatsServiceService_IGetSysStats;
}

interface IStatsServiceService_IGetStats extends grpc.MethodDefinition<stats_pb.GetStatsRequest, stats_pb.GetStatsResponse> {
    path: "/xray.app.stats.command.StatsService/GetStats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stats_pb.GetStatsRequest>;
    requestDeserialize: grpc.deserialize<stats_pb.GetStatsRequest>;
    responseSerialize: grpc.serialize<stats_pb.GetStatsResponse>;
    responseDeserialize: grpc.deserialize<stats_pb.GetStatsResponse>;
}
interface IStatsServiceService_IGetStatsOnline extends grpc.MethodDefinition<stats_pb.GetStatsRequest, stats_pb.GetStatsResponse> {
    path: "/xray.app.stats.command.StatsService/GetStatsOnline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stats_pb.GetStatsRequest>;
    requestDeserialize: grpc.deserialize<stats_pb.GetStatsRequest>;
    responseSerialize: grpc.serialize<stats_pb.GetStatsResponse>;
    responseDeserialize: grpc.deserialize<stats_pb.GetStatsResponse>;
}
interface IStatsServiceService_IQueryStats extends grpc.MethodDefinition<stats_pb.QueryStatsRequest, stats_pb.QueryStatsResponse> {
    path: "/xray.app.stats.command.StatsService/QueryStats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stats_pb.QueryStatsRequest>;
    requestDeserialize: grpc.deserialize<stats_pb.QueryStatsRequest>;
    responseSerialize: grpc.serialize<stats_pb.QueryStatsResponse>;
    responseDeserialize: grpc.deserialize<stats_pb.QueryStatsResponse>;
}
interface IStatsServiceService_IGetSysStats extends grpc.MethodDefinition<stats_pb.SysStatsRequest, stats_pb.SysStatsResponse> {
    path: "/xray.app.stats.command.StatsService/GetSysStats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stats_pb.SysStatsRequest>;
    requestDeserialize: grpc.deserialize<stats_pb.SysStatsRequest>;
    responseSerialize: grpc.serialize<stats_pb.SysStatsResponse>;
    responseDeserialize: grpc.deserialize<stats_pb.SysStatsResponse>;
}

export const StatsServiceService: IStatsServiceService;

export interface IStatsServiceServer extends grpc.UntypedServiceImplementation {
    getStats: grpc.handleUnaryCall<stats_pb.GetStatsRequest, stats_pb.GetStatsResponse>;
    getStatsOnline: grpc.handleUnaryCall<stats_pb.GetStatsRequest, stats_pb.GetStatsResponse>;
    queryStats: grpc.handleUnaryCall<stats_pb.QueryStatsRequest, stats_pb.QueryStatsResponse>;
    getSysStats: grpc.handleUnaryCall<stats_pb.SysStatsRequest, stats_pb.SysStatsResponse>;
}

export interface IStatsServiceClient {
    getStats(request: stats_pb.GetStatsRequest, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    getStats(request: stats_pb.GetStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    getStats(request: stats_pb.GetStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    getStatsOnline(request: stats_pb.GetStatsRequest, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    getStatsOnline(request: stats_pb.GetStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    getStatsOnline(request: stats_pb.GetStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    queryStats(request: stats_pb.QueryStatsRequest, callback: (error: grpc.ServiceError | null, response: stats_pb.QueryStatsResponse) => void): grpc.ClientUnaryCall;
    queryStats(request: stats_pb.QueryStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_pb.QueryStatsResponse) => void): grpc.ClientUnaryCall;
    queryStats(request: stats_pb.QueryStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_pb.QueryStatsResponse) => void): grpc.ClientUnaryCall;
    getSysStats(request: stats_pb.SysStatsRequest, callback: (error: grpc.ServiceError | null, response: stats_pb.SysStatsResponse) => void): grpc.ClientUnaryCall;
    getSysStats(request: stats_pb.SysStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_pb.SysStatsResponse) => void): grpc.ClientUnaryCall;
    getSysStats(request: stats_pb.SysStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_pb.SysStatsResponse) => void): grpc.ClientUnaryCall;
}

export class StatsServiceClient extends grpc.Client implements IStatsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getStats(request: stats_pb.GetStatsRequest, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public getStats(request: stats_pb.GetStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public getStats(request: stats_pb.GetStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public getStatsOnline(request: stats_pb.GetStatsRequest, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public getStatsOnline(request: stats_pb.GetStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public getStatsOnline(request: stats_pb.GetStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_pb.GetStatsResponse) => void): grpc.ClientUnaryCall;
    public queryStats(request: stats_pb.QueryStatsRequest, callback: (error: grpc.ServiceError | null, response: stats_pb.QueryStatsResponse) => void): grpc.ClientUnaryCall;
    public queryStats(request: stats_pb.QueryStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_pb.QueryStatsResponse) => void): grpc.ClientUnaryCall;
    public queryStats(request: stats_pb.QueryStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_pb.QueryStatsResponse) => void): grpc.ClientUnaryCall;
    public getSysStats(request: stats_pb.SysStatsRequest, callback: (error: grpc.ServiceError | null, response: stats_pb.SysStatsResponse) => void): grpc.ClientUnaryCall;
    public getSysStats(request: stats_pb.SysStatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stats_pb.SysStatsResponse) => void): grpc.ClientUnaryCall;
    public getSysStats(request: stats_pb.SysStatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stats_pb.SysStatsResponse) => void): grpc.ClientUnaryCall;
}
