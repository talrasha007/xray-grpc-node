// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var router_pb = require('./router_pb.js');
var common_net_network_pb = require('./common/net/network_pb.js');
var common_serial_typed_message_pb = require('./common/serial/typed_message_pb.js');

function serialize_xray_app_router_command_AddRuleRequest(arg) {
  if (!(arg instanceof router_pb.AddRuleRequest)) {
    throw new Error('Expected argument of type xray.app.router.command.AddRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_AddRuleRequest(buffer_arg) {
  return router_pb.AddRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_AddRuleResponse(arg) {
  if (!(arg instanceof router_pb.AddRuleResponse)) {
    throw new Error('Expected argument of type xray.app.router.command.AddRuleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_AddRuleResponse(buffer_arg) {
  return router_pb.AddRuleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_GetBalancerInfoRequest(arg) {
  if (!(arg instanceof router_pb.GetBalancerInfoRequest)) {
    throw new Error('Expected argument of type xray.app.router.command.GetBalancerInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_GetBalancerInfoRequest(buffer_arg) {
  return router_pb.GetBalancerInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_GetBalancerInfoResponse(arg) {
  if (!(arg instanceof router_pb.GetBalancerInfoResponse)) {
    throw new Error('Expected argument of type xray.app.router.command.GetBalancerInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_GetBalancerInfoResponse(buffer_arg) {
  return router_pb.GetBalancerInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_OverrideBalancerTargetRequest(arg) {
  if (!(arg instanceof router_pb.OverrideBalancerTargetRequest)) {
    throw new Error('Expected argument of type xray.app.router.command.OverrideBalancerTargetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_OverrideBalancerTargetRequest(buffer_arg) {
  return router_pb.OverrideBalancerTargetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_OverrideBalancerTargetResponse(arg) {
  if (!(arg instanceof router_pb.OverrideBalancerTargetResponse)) {
    throw new Error('Expected argument of type xray.app.router.command.OverrideBalancerTargetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_OverrideBalancerTargetResponse(buffer_arg) {
  return router_pb.OverrideBalancerTargetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_RemoveRuleRequest(arg) {
  if (!(arg instanceof router_pb.RemoveRuleRequest)) {
    throw new Error('Expected argument of type xray.app.router.command.RemoveRuleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_RemoveRuleRequest(buffer_arg) {
  return router_pb.RemoveRuleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_RemoveRuleResponse(arg) {
  if (!(arg instanceof router_pb.RemoveRuleResponse)) {
    throw new Error('Expected argument of type xray.app.router.command.RemoveRuleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_RemoveRuleResponse(buffer_arg) {
  return router_pb.RemoveRuleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_RoutingContext(arg) {
  if (!(arg instanceof router_pb.RoutingContext)) {
    throw new Error('Expected argument of type xray.app.router.command.RoutingContext');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_RoutingContext(buffer_arg) {
  return router_pb.RoutingContext.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_SubscribeRoutingStatsRequest(arg) {
  if (!(arg instanceof router_pb.SubscribeRoutingStatsRequest)) {
    throw new Error('Expected argument of type xray.app.router.command.SubscribeRoutingStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_SubscribeRoutingStatsRequest(buffer_arg) {
  return router_pb.SubscribeRoutingStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_router_command_TestRouteRequest(arg) {
  if (!(arg instanceof router_pb.TestRouteRequest)) {
    throw new Error('Expected argument of type xray.app.router.command.TestRouteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_router_command_TestRouteRequest(buffer_arg) {
  return router_pb.TestRouteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoutingServiceService = exports.RoutingServiceService = {
  subscribeRoutingStats: {
    path: '/xray.app.router.command.RoutingService/SubscribeRoutingStats',
    requestStream: false,
    responseStream: true,
    requestType: router_pb.SubscribeRoutingStatsRequest,
    responseType: router_pb.RoutingContext,
    requestSerialize: serialize_xray_app_router_command_SubscribeRoutingStatsRequest,
    requestDeserialize: deserialize_xray_app_router_command_SubscribeRoutingStatsRequest,
    responseSerialize: serialize_xray_app_router_command_RoutingContext,
    responseDeserialize: deserialize_xray_app_router_command_RoutingContext,
  },
  testRoute: {
    path: '/xray.app.router.command.RoutingService/TestRoute',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.TestRouteRequest,
    responseType: router_pb.RoutingContext,
    requestSerialize: serialize_xray_app_router_command_TestRouteRequest,
    requestDeserialize: deserialize_xray_app_router_command_TestRouteRequest,
    responseSerialize: serialize_xray_app_router_command_RoutingContext,
    responseDeserialize: deserialize_xray_app_router_command_RoutingContext,
  },
  getBalancerInfo: {
    path: '/xray.app.router.command.RoutingService/GetBalancerInfo',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.GetBalancerInfoRequest,
    responseType: router_pb.GetBalancerInfoResponse,
    requestSerialize: serialize_xray_app_router_command_GetBalancerInfoRequest,
    requestDeserialize: deserialize_xray_app_router_command_GetBalancerInfoRequest,
    responseSerialize: serialize_xray_app_router_command_GetBalancerInfoResponse,
    responseDeserialize: deserialize_xray_app_router_command_GetBalancerInfoResponse,
  },
  overrideBalancerTarget: {
    path: '/xray.app.router.command.RoutingService/OverrideBalancerTarget',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.OverrideBalancerTargetRequest,
    responseType: router_pb.OverrideBalancerTargetResponse,
    requestSerialize: serialize_xray_app_router_command_OverrideBalancerTargetRequest,
    requestDeserialize: deserialize_xray_app_router_command_OverrideBalancerTargetRequest,
    responseSerialize: serialize_xray_app_router_command_OverrideBalancerTargetResponse,
    responseDeserialize: deserialize_xray_app_router_command_OverrideBalancerTargetResponse,
  },
  addRule: {
    path: '/xray.app.router.command.RoutingService/AddRule',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.AddRuleRequest,
    responseType: router_pb.AddRuleResponse,
    requestSerialize: serialize_xray_app_router_command_AddRuleRequest,
    requestDeserialize: deserialize_xray_app_router_command_AddRuleRequest,
    responseSerialize: serialize_xray_app_router_command_AddRuleResponse,
    responseDeserialize: deserialize_xray_app_router_command_AddRuleResponse,
  },
  removeRule: {
    path: '/xray.app.router.command.RoutingService/RemoveRule',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.RemoveRuleRequest,
    responseType: router_pb.RemoveRuleResponse,
    requestSerialize: serialize_xray_app_router_command_RemoveRuleRequest,
    requestDeserialize: deserialize_xray_app_router_command_RemoveRuleRequest,
    responseSerialize: serialize_xray_app_router_command_RemoveRuleResponse,
    responseDeserialize: deserialize_xray_app_router_command_RemoveRuleResponse,
  },
};

exports.RoutingServiceClient = grpc.makeGenericClientConstructor(RoutingServiceService);
