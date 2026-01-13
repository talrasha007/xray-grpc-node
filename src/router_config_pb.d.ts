// package: xray.app.router
// file: router_config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_serial_typed_message_pb from "./common/serial/typed_message_pb";
import * as common_net_port_pb from "./common/net/port_pb";
import * as common_net_network_pb from "./common/net/network_pb";

export class Domain extends jspb.Message { 
    getType(): Domain.Type;
    setType(value: Domain.Type): Domain;
    getValue(): string;
    setValue(value: string): Domain;
    clearAttributeList(): void;
    getAttributeList(): Array<Domain.Attribute>;
    setAttributeList(value: Array<Domain.Attribute>): Domain;
    addAttribute(value?: Domain.Attribute, index?: number): Domain.Attribute;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Domain.AsObject;
    static toObject(includeInstance: boolean, msg: Domain): Domain.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Domain, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Domain;
    static deserializeBinaryFromReader(message: Domain, reader: jspb.BinaryReader): Domain;
}

export namespace Domain {
    export type AsObject = {
        type: Domain.Type,
        value: string,
        attributeList: Array<Domain.Attribute.AsObject>,
    }


    export class Attribute extends jspb.Message { 
        getKey(): string;
        setKey(value: string): Attribute;

        hasBoolValue(): boolean;
        clearBoolValue(): void;
        getBoolValue(): boolean;
        setBoolValue(value: boolean): Attribute;

        hasIntValue(): boolean;
        clearIntValue(): void;
        getIntValue(): number;
        setIntValue(value: number): Attribute;

        getTypedValueCase(): Attribute.TypedValueCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Attribute.AsObject;
        static toObject(includeInstance: boolean, msg: Attribute): Attribute.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Attribute, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Attribute;
        static deserializeBinaryFromReader(message: Attribute, reader: jspb.BinaryReader): Attribute;
    }

    export namespace Attribute {
        export type AsObject = {
            key: string,
            boolValue: boolean,
            intValue: number,
        }

        export enum TypedValueCase {
            TYPED_VALUE_NOT_SET = 0,
            BOOL_VALUE = 2,
            INT_VALUE = 3,
        }

    }


    export enum Type {
    PLAIN = 0,
    REGEX = 1,
    DOMAIN = 2,
    FULL = 3,
    }

}

export class CIDR extends jspb.Message { 
    getIp(): Uint8Array | string;
    getIp_asU8(): Uint8Array;
    getIp_asB64(): string;
    setIp(value: Uint8Array | string): CIDR;
    getPrefix(): number;
    setPrefix(value: number): CIDR;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CIDR.AsObject;
    static toObject(includeInstance: boolean, msg: CIDR): CIDR.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CIDR, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CIDR;
    static deserializeBinaryFromReader(message: CIDR, reader: jspb.BinaryReader): CIDR;
}

export namespace CIDR {
    export type AsObject = {
        ip: Uint8Array | string,
        prefix: number,
    }
}

export class GeoIP extends jspb.Message { 
    getCountryCode(): string;
    setCountryCode(value: string): GeoIP;
    clearCidrList(): void;
    getCidrList(): Array<CIDR>;
    setCidrList(value: Array<CIDR>): GeoIP;
    addCidr(value?: CIDR, index?: number): CIDR;
    getReverseMatch(): boolean;
    setReverseMatch(value: boolean): GeoIP;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoIP.AsObject;
    static toObject(includeInstance: boolean, msg: GeoIP): GeoIP.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoIP, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoIP;
    static deserializeBinaryFromReader(message: GeoIP, reader: jspb.BinaryReader): GeoIP;
}

export namespace GeoIP {
    export type AsObject = {
        countryCode: string,
        cidrList: Array<CIDR.AsObject>,
        reverseMatch: boolean,
    }
}

export class GeoIPList extends jspb.Message { 
    clearEntryList(): void;
    getEntryList(): Array<GeoIP>;
    setEntryList(value: Array<GeoIP>): GeoIPList;
    addEntry(value?: GeoIP, index?: number): GeoIP;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoIPList.AsObject;
    static toObject(includeInstance: boolean, msg: GeoIPList): GeoIPList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoIPList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoIPList;
    static deserializeBinaryFromReader(message: GeoIPList, reader: jspb.BinaryReader): GeoIPList;
}

export namespace GeoIPList {
    export type AsObject = {
        entryList: Array<GeoIP.AsObject>,
    }
}

export class GeoSite extends jspb.Message { 
    getCountryCode(): string;
    setCountryCode(value: string): GeoSite;
    clearDomainList(): void;
    getDomainList(): Array<Domain>;
    setDomainList(value: Array<Domain>): GeoSite;
    addDomain(value?: Domain, index?: number): Domain;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoSite.AsObject;
    static toObject(includeInstance: boolean, msg: GeoSite): GeoSite.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoSite, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoSite;
    static deserializeBinaryFromReader(message: GeoSite, reader: jspb.BinaryReader): GeoSite;
}

export namespace GeoSite {
    export type AsObject = {
        countryCode: string,
        domainList: Array<Domain.AsObject>,
    }
}

export class GeoSiteList extends jspb.Message { 
    clearEntryList(): void;
    getEntryList(): Array<GeoSite>;
    setEntryList(value: Array<GeoSite>): GeoSiteList;
    addEntry(value?: GeoSite, index?: number): GeoSite;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeoSiteList.AsObject;
    static toObject(includeInstance: boolean, msg: GeoSiteList): GeoSiteList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeoSiteList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeoSiteList;
    static deserializeBinaryFromReader(message: GeoSiteList, reader: jspb.BinaryReader): GeoSiteList;
}

export namespace GeoSiteList {
    export type AsObject = {
        entryList: Array<GeoSite.AsObject>,
    }
}

export class RoutingRule extends jspb.Message { 

    hasTag(): boolean;
    clearTag(): void;
    getTag(): string;
    setTag(value: string): RoutingRule;

    hasBalancingTag(): boolean;
    clearBalancingTag(): void;
    getBalancingTag(): string;
    setBalancingTag(value: string): RoutingRule;
    getRuleTag(): string;
    setRuleTag(value: string): RoutingRule;
    clearDomainList(): void;
    getDomainList(): Array<Domain>;
    setDomainList(value: Array<Domain>): RoutingRule;
    addDomain(value?: Domain, index?: number): Domain;
    clearGeoipList(): void;
    getGeoipList(): Array<GeoIP>;
    setGeoipList(value: Array<GeoIP>): RoutingRule;
    addGeoip(value?: GeoIP, index?: number): GeoIP;

    hasPortList(): boolean;
    clearPortList(): void;
    getPortList(): common_net_port_pb.PortList | undefined;
    setPortList(value?: common_net_port_pb.PortList): RoutingRule;
    clearNetworksList(): void;
    getNetworksList(): Array<common_net_network_pb.Network>;
    setNetworksList(value: Array<common_net_network_pb.Network>): RoutingRule;
    addNetworks(value: common_net_network_pb.Network, index?: number): common_net_network_pb.Network;
    clearSourceGeoipList(): void;
    getSourceGeoipList(): Array<GeoIP>;
    setSourceGeoipList(value: Array<GeoIP>): RoutingRule;
    addSourceGeoip(value?: GeoIP, index?: number): GeoIP;

    hasSourcePortList(): boolean;
    clearSourcePortList(): void;
    getSourcePortList(): common_net_port_pb.PortList | undefined;
    setSourcePortList(value?: common_net_port_pb.PortList): RoutingRule;
    clearUserEmailList(): void;
    getUserEmailList(): Array<string>;
    setUserEmailList(value: Array<string>): RoutingRule;
    addUserEmail(value: string, index?: number): string;
    clearInboundTagList(): void;
    getInboundTagList(): Array<string>;
    setInboundTagList(value: Array<string>): RoutingRule;
    addInboundTag(value: string, index?: number): string;
    clearProtocolList(): void;
    getProtocolList(): Array<string>;
    setProtocolList(value: Array<string>): RoutingRule;
    addProtocol(value: string, index?: number): string;

    getAttributesMap(): jspb.Map<string, string>;
    clearAttributesMap(): void;
    getDomainMatcher(): string;
    setDomainMatcher(value: string): RoutingRule;

    getTargetTagCase(): RoutingRule.TargetTagCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RoutingRule.AsObject;
    static toObject(includeInstance: boolean, msg: RoutingRule): RoutingRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RoutingRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RoutingRule;
    static deserializeBinaryFromReader(message: RoutingRule, reader: jspb.BinaryReader): RoutingRule;
}

export namespace RoutingRule {
    export type AsObject = {
        tag: string,
        balancingTag: string,
        ruleTag: string,
        domainList: Array<Domain.AsObject>,
        geoipList: Array<GeoIP.AsObject>,
        portList?: common_net_port_pb.PortList.AsObject,
        networksList: Array<common_net_network_pb.Network>,
        sourceGeoipList: Array<GeoIP.AsObject>,
        sourcePortList?: common_net_port_pb.PortList.AsObject,
        userEmailList: Array<string>,
        inboundTagList: Array<string>,
        protocolList: Array<string>,

        attributesMap: Array<[string, string]>,
        domainMatcher: string,
    }

    export enum TargetTagCase {
        TARGET_TAG_NOT_SET = 0,
        TAG = 1,
        BALANCING_TAG = 12,
    }

}

export class BalancingRule extends jspb.Message { 
    getTag(): string;
    setTag(value: string): BalancingRule;
    clearOutboundSelectorList(): void;
    getOutboundSelectorList(): Array<string>;
    setOutboundSelectorList(value: Array<string>): BalancingRule;
    addOutboundSelector(value: string, index?: number): string;
    getStrategy(): string;
    setStrategy(value: string): BalancingRule;

    hasStrategySettings(): boolean;
    clearStrategySettings(): void;
    getStrategySettings(): common_serial_typed_message_pb.TypedMessage | undefined;
    setStrategySettings(value?: common_serial_typed_message_pb.TypedMessage): BalancingRule;
    getFallbackTag(): string;
    setFallbackTag(value: string): BalancingRule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BalancingRule.AsObject;
    static toObject(includeInstance: boolean, msg: BalancingRule): BalancingRule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BalancingRule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BalancingRule;
    static deserializeBinaryFromReader(message: BalancingRule, reader: jspb.BinaryReader): BalancingRule;
}

export namespace BalancingRule {
    export type AsObject = {
        tag: string,
        outboundSelectorList: Array<string>,
        strategy: string,
        strategySettings?: common_serial_typed_message_pb.TypedMessage.AsObject,
        fallbackTag: string,
    }
}

export class StrategyWeight extends jspb.Message { 
    getRegexp(): boolean;
    setRegexp(value: boolean): StrategyWeight;
    getMatch(): string;
    setMatch(value: string): StrategyWeight;
    getValue(): number;
    setValue(value: number): StrategyWeight;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StrategyWeight.AsObject;
    static toObject(includeInstance: boolean, msg: StrategyWeight): StrategyWeight.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StrategyWeight, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StrategyWeight;
    static deserializeBinaryFromReader(message: StrategyWeight, reader: jspb.BinaryReader): StrategyWeight;
}

export namespace StrategyWeight {
    export type AsObject = {
        regexp: boolean,
        match: string,
        value: number,
    }
}

export class StrategyLeastLoadConfig extends jspb.Message { 
    clearCostsList(): void;
    getCostsList(): Array<StrategyWeight>;
    setCostsList(value: Array<StrategyWeight>): StrategyLeastLoadConfig;
    addCosts(value?: StrategyWeight, index?: number): StrategyWeight;
    clearBaselinesList(): void;
    getBaselinesList(): Array<number>;
    setBaselinesList(value: Array<number>): StrategyLeastLoadConfig;
    addBaselines(value: number, index?: number): number;
    getExpected(): number;
    setExpected(value: number): StrategyLeastLoadConfig;
    getMaxrtt(): number;
    setMaxrtt(value: number): StrategyLeastLoadConfig;
    getTolerance(): number;
    setTolerance(value: number): StrategyLeastLoadConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StrategyLeastLoadConfig.AsObject;
    static toObject(includeInstance: boolean, msg: StrategyLeastLoadConfig): StrategyLeastLoadConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StrategyLeastLoadConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StrategyLeastLoadConfig;
    static deserializeBinaryFromReader(message: StrategyLeastLoadConfig, reader: jspb.BinaryReader): StrategyLeastLoadConfig;
}

export namespace StrategyLeastLoadConfig {
    export type AsObject = {
        costsList: Array<StrategyWeight.AsObject>,
        baselinesList: Array<number>,
        expected: number,
        maxrtt: number,
        tolerance: number,
    }
}

export class Config extends jspb.Message { 
    getDomainStrategy(): Config.DomainStrategy;
    setDomainStrategy(value: Config.DomainStrategy): Config;
    clearRuleList(): void;
    getRuleList(): Array<RoutingRule>;
    setRuleList(value: Array<RoutingRule>): Config;
    addRule(value?: RoutingRule, index?: number): RoutingRule;
    clearBalancingRuleList(): void;
    getBalancingRuleList(): Array<BalancingRule>;
    setBalancingRuleList(value: Array<BalancingRule>): Config;
    addBalancingRule(value?: BalancingRule, index?: number): BalancingRule;

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
        domainStrategy: Config.DomainStrategy,
        ruleList: Array<RoutingRule.AsObject>,
        balancingRuleList: Array<BalancingRule.AsObject>,
    }

    export enum DomainStrategy {
    ASIS = 0,
    USEIP = 1,
    IPIFNONMATCH = 2,
    IPONDEMAND = 3,
    }

}
