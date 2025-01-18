// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proxyman_pb = require('./proxyman_pb.js');
var common_protocol_user_pb = require('./common/protocol/user_pb.js');
var common_serial_typed_message_pb = require('./common/serial/typed_message_pb.js');
var core_config_pb = require('./core/config_pb.js');

function serialize_xray_app_proxyman_command_AddInboundRequest(arg) {
  if (!(arg instanceof proxyman_pb.AddInboundRequest)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.AddInboundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_AddInboundRequest(buffer_arg) {
  return proxyman_pb.AddInboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_AddInboundResponse(arg) {
  if (!(arg instanceof proxyman_pb.AddInboundResponse)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.AddInboundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_AddInboundResponse(buffer_arg) {
  return proxyman_pb.AddInboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_AddOutboundRequest(arg) {
  if (!(arg instanceof proxyman_pb.AddOutboundRequest)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.AddOutboundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_AddOutboundRequest(buffer_arg) {
  return proxyman_pb.AddOutboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_AddOutboundResponse(arg) {
  if (!(arg instanceof proxyman_pb.AddOutboundResponse)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.AddOutboundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_AddOutboundResponse(buffer_arg) {
  return proxyman_pb.AddOutboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_AlterInboundRequest(arg) {
  if (!(arg instanceof proxyman_pb.AlterInboundRequest)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.AlterInboundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_AlterInboundRequest(buffer_arg) {
  return proxyman_pb.AlterInboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_AlterInboundResponse(arg) {
  if (!(arg instanceof proxyman_pb.AlterInboundResponse)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.AlterInboundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_AlterInboundResponse(buffer_arg) {
  return proxyman_pb.AlterInboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_AlterOutboundRequest(arg) {
  if (!(arg instanceof proxyman_pb.AlterOutboundRequest)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.AlterOutboundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_AlterOutboundRequest(buffer_arg) {
  return proxyman_pb.AlterOutboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_AlterOutboundResponse(arg) {
  if (!(arg instanceof proxyman_pb.AlterOutboundResponse)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.AlterOutboundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_AlterOutboundResponse(buffer_arg) {
  return proxyman_pb.AlterOutboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_RemoveInboundRequest(arg) {
  if (!(arg instanceof proxyman_pb.RemoveInboundRequest)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.RemoveInboundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_RemoveInboundRequest(buffer_arg) {
  return proxyman_pb.RemoveInboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_RemoveInboundResponse(arg) {
  if (!(arg instanceof proxyman_pb.RemoveInboundResponse)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.RemoveInboundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_RemoveInboundResponse(buffer_arg) {
  return proxyman_pb.RemoveInboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_RemoveOutboundRequest(arg) {
  if (!(arg instanceof proxyman_pb.RemoveOutboundRequest)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.RemoveOutboundRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_RemoveOutboundRequest(buffer_arg) {
  return proxyman_pb.RemoveOutboundRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_xray_app_proxyman_command_RemoveOutboundResponse(arg) {
  if (!(arg instanceof proxyman_pb.RemoveOutboundResponse)) {
    throw new Error('Expected argument of type xray.app.proxyman.command.RemoveOutboundResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xray_app_proxyman_command_RemoveOutboundResponse(buffer_arg) {
  return proxyman_pb.RemoveOutboundResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HandlerServiceService = exports.HandlerServiceService = {
  addInbound: {
    path: '/xray.app.proxyman.command.HandlerService/AddInbound',
    requestStream: false,
    responseStream: false,
    requestType: proxyman_pb.AddInboundRequest,
    responseType: proxyman_pb.AddInboundResponse,
    requestSerialize: serialize_xray_app_proxyman_command_AddInboundRequest,
    requestDeserialize: deserialize_xray_app_proxyman_command_AddInboundRequest,
    responseSerialize: serialize_xray_app_proxyman_command_AddInboundResponse,
    responseDeserialize: deserialize_xray_app_proxyman_command_AddInboundResponse,
  },
  removeInbound: {
    path: '/xray.app.proxyman.command.HandlerService/RemoveInbound',
    requestStream: false,
    responseStream: false,
    requestType: proxyman_pb.RemoveInboundRequest,
    responseType: proxyman_pb.RemoveInboundResponse,
    requestSerialize: serialize_xray_app_proxyman_command_RemoveInboundRequest,
    requestDeserialize: deserialize_xray_app_proxyman_command_RemoveInboundRequest,
    responseSerialize: serialize_xray_app_proxyman_command_RemoveInboundResponse,
    responseDeserialize: deserialize_xray_app_proxyman_command_RemoveInboundResponse,
  },
  alterInbound: {
    path: '/xray.app.proxyman.command.HandlerService/AlterInbound',
    requestStream: false,
    responseStream: false,
    requestType: proxyman_pb.AlterInboundRequest,
    responseType: proxyman_pb.AlterInboundResponse,
    requestSerialize: serialize_xray_app_proxyman_command_AlterInboundRequest,
    requestDeserialize: deserialize_xray_app_proxyman_command_AlterInboundRequest,
    responseSerialize: serialize_xray_app_proxyman_command_AlterInboundResponse,
    responseDeserialize: deserialize_xray_app_proxyman_command_AlterInboundResponse,
  },
  addOutbound: {
    path: '/xray.app.proxyman.command.HandlerService/AddOutbound',
    requestStream: false,
    responseStream: false,
    requestType: proxyman_pb.AddOutboundRequest,
    responseType: proxyman_pb.AddOutboundResponse,
    requestSerialize: serialize_xray_app_proxyman_command_AddOutboundRequest,
    requestDeserialize: deserialize_xray_app_proxyman_command_AddOutboundRequest,
    responseSerialize: serialize_xray_app_proxyman_command_AddOutboundResponse,
    responseDeserialize: deserialize_xray_app_proxyman_command_AddOutboundResponse,
  },
  removeOutbound: {
    path: '/xray.app.proxyman.command.HandlerService/RemoveOutbound',
    requestStream: false,
    responseStream: false,
    requestType: proxyman_pb.RemoveOutboundRequest,
    responseType: proxyman_pb.RemoveOutboundResponse,
    requestSerialize: serialize_xray_app_proxyman_command_RemoveOutboundRequest,
    requestDeserialize: deserialize_xray_app_proxyman_command_RemoveOutboundRequest,
    responseSerialize: serialize_xray_app_proxyman_command_RemoveOutboundResponse,
    responseDeserialize: deserialize_xray_app_proxyman_command_RemoveOutboundResponse,
  },
  alterOutbound: {
    path: '/xray.app.proxyman.command.HandlerService/AlterOutbound',
    requestStream: false,
    responseStream: false,
    requestType: proxyman_pb.AlterOutboundRequest,
    responseType: proxyman_pb.AlterOutboundResponse,
    requestSerialize: serialize_xray_app_proxyman_command_AlterOutboundRequest,
    requestDeserialize: deserialize_xray_app_proxyman_command_AlterOutboundRequest,
    responseSerialize: serialize_xray_app_proxyman_command_AlterOutboundResponse,
    responseDeserialize: deserialize_xray_app_proxyman_command_AlterOutboundResponse,
  },
};

exports.HandlerServiceClient = grpc.makeGenericClientConstructor(HandlerServiceService);
