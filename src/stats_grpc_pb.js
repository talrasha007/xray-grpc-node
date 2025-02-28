// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stats_pb = require('./stats_pb.js');

function serialize_xray_app_stats_command_GetStatsRequest(arg) {
  if (!(arg instanceof stats_pb.GetStatsRequest)) {
    throw new Error('Expected argument of type xray.app.stats.command.GetStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_stats_command_GetStatsRequest(buffer_arg) {
  return stats_pb.GetStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_stats_command_GetStatsResponse(arg) {
  if (!(arg instanceof stats_pb.GetStatsResponse)) {
    throw new Error('Expected argument of type xray.app.stats.command.GetStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_stats_command_GetStatsResponse(buffer_arg) {
  return stats_pb.GetStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_stats_command_QueryStatsRequest(arg) {
  if (!(arg instanceof stats_pb.QueryStatsRequest)) {
    throw new Error('Expected argument of type xray.app.stats.command.QueryStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_stats_command_QueryStatsRequest(buffer_arg) {
  return stats_pb.QueryStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_stats_command_QueryStatsResponse(arg) {
  if (!(arg instanceof stats_pb.QueryStatsResponse)) {
    throw new Error('Expected argument of type xray.app.stats.command.QueryStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_stats_command_QueryStatsResponse(buffer_arg) {
  return stats_pb.QueryStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_stats_command_SysStatsRequest(arg) {
  if (!(arg instanceof stats_pb.SysStatsRequest)) {
    throw new Error('Expected argument of type xray.app.stats.command.SysStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_stats_command_SysStatsRequest(buffer_arg) {
  return stats_pb.SysStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_stats_command_SysStatsResponse(arg) {
  if (!(arg instanceof stats_pb.SysStatsResponse)) {
    throw new Error('Expected argument of type xray.app.stats.command.SysStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_stats_command_SysStatsResponse(buffer_arg) {
  return stats_pb.SysStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StatsServiceService = exports.StatsServiceService = {
  getStats: {
    path: '/xray.app.stats.command.StatsService/GetStats',
    requestStream: false,
    responseStream: false,
    requestType: stats_pb.GetStatsRequest,
    responseType: stats_pb.GetStatsResponse,
    requestSerialize: serialize_xray_app_stats_command_GetStatsRequest,
    requestDeserialize: deserialize_xray_app_stats_command_GetStatsRequest,
    responseSerialize: serialize_xray_app_stats_command_GetStatsResponse,
    responseDeserialize: deserialize_xray_app_stats_command_GetStatsResponse,
  },
  getStatsOnline: {
    path: '/xray.app.stats.command.StatsService/GetStatsOnline',
    requestStream: false,
    responseStream: false,
    requestType: stats_pb.GetStatsRequest,
    responseType: stats_pb.GetStatsResponse,
    requestSerialize: serialize_xray_app_stats_command_GetStatsRequest,
    requestDeserialize: deserialize_xray_app_stats_command_GetStatsRequest,
    responseSerialize: serialize_xray_app_stats_command_GetStatsResponse,
    responseDeserialize: deserialize_xray_app_stats_command_GetStatsResponse,
  },
  queryStats: {
    path: '/xray.app.stats.command.StatsService/QueryStats',
    requestStream: false,
    responseStream: false,
    requestType: stats_pb.QueryStatsRequest,
    responseType: stats_pb.QueryStatsResponse,
    requestSerialize: serialize_xray_app_stats_command_QueryStatsRequest,
    requestDeserialize: deserialize_xray_app_stats_command_QueryStatsRequest,
    responseSerialize: serialize_xray_app_stats_command_QueryStatsResponse,
    responseDeserialize: deserialize_xray_app_stats_command_QueryStatsResponse,
  },
  getSysStats: {
    path: '/xray.app.stats.command.StatsService/GetSysStats',
    requestStream: false,
    responseStream: false,
    requestType: stats_pb.SysStatsRequest,
    responseType: stats_pb.SysStatsResponse,
    requestSerialize: serialize_xray_app_stats_command_SysStatsRequest,
    requestDeserialize: deserialize_xray_app_stats_command_SysStatsRequest,
    responseSerialize: serialize_xray_app_stats_command_SysStatsResponse,
    responseDeserialize: deserialize_xray_app_stats_command_SysStatsResponse,
  },
};

exports.StatsServiceClient = grpc.makeGenericClientConstructor(StatsServiceService);
