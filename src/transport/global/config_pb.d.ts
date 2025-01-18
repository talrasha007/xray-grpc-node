// package: xray.transport
// file: transport/global/config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as transport_internet_config_pb from "../../transport/internet/config_pb";

export class Config extends jspb.Message { 
    clearTransportSettingsList(): void;
    getTransportSettingsList(): Array<transport_internet_config_pb.TransportConfig>;
    setTransportSettingsList(value: Array<transport_internet_config_pb.TransportConfig>): Config;
    addTransportSettings(value?: transport_internet_config_pb.TransportConfig, index?: number): transport_internet_config_pb.TransportConfig;

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
        transportSettingsList: Array<transport_internet_config_pb.TransportConfig.AsObject>,
    }
}
