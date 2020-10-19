/**
 * Created by gary.duan on 2017/12/19
 */
import Welcome from './modules/Welcome';
import CheryMonitor from './modules/map/CheryMonitor'; //大屏监控
/* 用户管理 */
import UserCenterApp from './modules/UserCenterApp';
import UserManage from './modules/UserCenter/UserManage'; //用户管理
import UserManageAll from './modules/UserCenter/UserManageAll'; //用户管理全部
import UserRegBind from './modules/UserCenter/UserRegBind'; //用户注册并绑定
import OwnerInformation from './modules/UserCenter/OwnerInformation' //车主信息管理
import PersonalCenter from './modules/UserCenter/PersonalCenter' //个人信息管理
/* 车辆管理 */
import VehicleManageApp from './modules/VehicleManageApp';
import VehicleList from './modules/VehicleManage/VehicleList'; //车辆列表
import AgencyAlter from './modules/VehicleManage/AgencyAlter'; //购车经销商变更
import VehFoundation from './modules/VehicleManage/VehFoundation'; //基础信息管理
import MutipleRegister from './modules/VehicleManage/MutipleRegister'; //批量登记车辆类型
import VehicleAlarmInfo from './modules/VehicleManage/VehicleAlarmInfo' //车辆报警信息
import FvVehicleAlarmInfo from './modules/VehicleManage/FvVehicleAlarmInfo' //燃油车车辆报警信息
import FailureDataCar from './modules/VehicleManage/FailureDataCar' //燃油车车辆报警信息
import SosWarning from './modules/VehicleManage/SosWarning' //燃油车车辆报警信息
import WarningDetail from './modules/VehicleManage/WarningDetail' //  SOS BCALL报警详情
import BcallWarning from './modules/VehicleManage/BcallWarning' //燃油车车辆报警信息
import OmsAlarmList from './modules/VehicleManage/OmsAlarmList' //OMS监控报警

// 蓝牙基础信息管理
import BluetoothManage from './modules/BluetoothManage/BluetoothManage';
import BluetoothInfo from './modules/BluetoothManage/BluetoothInfo/BluetoothInfo' // 蓝牙基础信息

// 转发服务管理 forwardingServiceManagement
import ForwardingService from './modules/ForwardingService/ForwardingService';
import ForwardingManage from './modules/ForwardingService/ForwardingManage' // 蓝牙基础信息

/* T-BOX设备管理 */
import TboxDeviceManageApp from './modules/TboxDeviceManageApp';
import DeviceList from './modules/TboxDeviceManage/DeviceList'; //设备列表
import SetParameter from './modules/TboxDeviceManage/SetParameter'; //参数设置
import ReadyTboxUnLoginAlarm from './modules/TboxDeviceManage/ReadyTboxUnLoginAlarm'; //Ready&Tbox累积未登录报警
import DeviceBaseInfo from './modules/TboxDeviceManage/DeviceBaseInfo'; //设备基础信息管理
import TboxRegisterNSearch from './modules/TboxDeviceManage/TboxRegisterNSearch'; //TBOX注册查询
import tBoxRegVerify from './modules/TboxDeviceManage/tBoxRegVerify'; //TBOX注册校验
import DeviceConfig from './modules/TboxDeviceManage/DeviceConfig'; //参数查询
import FuelCarParameterSetting from './modules/TboxDeviceManage/FuelCarParameterSetting'; // 燃油车参数设置

// 电子围栏监控
import ElectronicMonitorFenceApp from './modules/ElectronicMonitorFenceApp';
import ElectronicFenSetList from './modules/ElectronicMonitor/ElectronicFenSetList'; // 电子围栏设置
import PoliceVehManagement from './modules/ElectronicMonitor/PoliceVehManagement'; // 报警车辆管理
import SelectLocationMap from './modules/ElectronicMonitor/selectLocationMap'; // 地图选点



/* 产线检测 */
import ProlineDetectionApp from './modules/ProlineDetectionApp';
import ProlineCheck from './modules/ProlineDetection/ProlineCheck'; //产线检测
import ProlineRemote from './modules/RemoteSetManage/RemoteSetting1'; //产线远控检测
import ProlineCheckQuery from './modules/ProlineDetection/ProlineCheckQuery'; //产线检测历史
import TraditionalData from './modules/ProlineDetection/TraditionalData'; //产线传统车数据
import VehicleCheckQuery from './modules/ProlineDetection/VehicleCheckQuery'; //车辆原始数据
import ErrorMessageCheck from './modules/ProlineDetection/ErrorMessageCheck'; //错误报文解析
import AbnormalRegister from './modules/ProlineDetection/AbnormalRegister'; //异常登录查询
import DetectionList from './modules/ProlineDetection/DetectionList'

/* 远程控制 */
import RemoteSetApp from './modules/RemoteSetApp';
import RemoteHistory from './modules/RemoteSetManage/RemoteHistory'; //远程历史查询
import RemoteSetting from './modules/RemoteSetManage/RemoteSetting1'; //远程控制
import ControlStartUp from './modules/RemoteSetManage/ControlStartUp'; //限制启动管理
import SocketTest from './modules/RemoteSetManage/SocketTest';
/* 服务网点管理 */
import ServiceNetManage from './modules/ServiceNetApp';
import ServiceNetMsg from './modules/ServiceNetManage/ServiceNetMsg'; //服务网点管理
import ServiceNetImport from './modules/ServiceNetManage/ServiceNetImport'; //服务网点导入
import OfflineActAudit from './modules/ServiceNetManage/OfflineActAudit'; //线下活动审核

/* 系统管理 */
import SystemManageApp from './modules/SystemManageApp';
import UserQuery from './modules/SystemManage/UserQuery'; //账户管理
import RoleQuery from './modules/SystemManage/RoleQuery'; //角色管理
import Organization from './modules/SystemManage/Organization'; //组织结构管理
import MenuQuery from './modules/SystemManage/MenuQuery'; //菜单管理
import ResourceQuery from './modules/SystemManage/ResourceQuery'; //权限资源管理
import ManualCatalogConfig from './modules/SystemManage/ManualCatalogConfig' //配置手册管理
/* OTA */
import OTAUpgradeApp from './modules/OTAUpgradeApp';
import VehUpgrade from './modules/OTAUpgrade/VehUpgrade'; //车辆升级
import VersionList from './modules/OTAUpgrade/VersionList'; //版本管理
import UpgradeHistory from './modules/OTAUpgrade/UpgradeHistory'; //升级历史
import APPTaskManagement from './modules/OTAUpgrade/APPTaskManagement';
/*车辆位置监控*/
import PositionApp from './modules/PositionApp';
import Position from './modules/position/Position'; //追踪定位
import Trace from './modules/position/Trace'; //轨迹回放
/*新能源车辆状态监控*/
import VehicleStatusApp from './modules/VehicleStatusApp';
import VehicleCallPolice from './modules/vehicleStatus/VehicleCallPolice'; //车况报警管理
import VehOperationData from './modules/vehicleStatus/VehOperationData'; //数据导出管理
import VehicleStatusSearch from './modules/vehicleStatus/VehicleStatusSearch'; //车辆状态查询
import VehicleStatusLatest from './modules/vehicleStatus/VehicleStatusSearch/VehicleStatusLatest'; //车辆实时状态
import VehicleStatusHistory from './modules/vehicleStatus/VehicleStatusSearch/VehicleStatusHistory'; //历史状态
import VehicleStatusSoloCallPolice from './modules/vehicleStatus/VehicleStatusSearch/VehicleStatusSoloCallPolice'; //实时报警
import VehicleStatusFaultCount from './modules/vehicleStatus/VehicleStatusSearch/VehicleStatusFaultCount'; //状态统计
import MeterAlertCheck from './modules/vehicleStatus/MeterAlertCheck'; //警情数据
/* 电子围栏 */
import ElectFenceApp from './modules/ElectFenceApp';
import electronicFence from './modules/electronic/electronicFence'; //电子围栏管理
import vehicleFemce from './modules/electronic/vehicleFemce'; //车辆围栏管理
import fenceCallPolice from './modules/electronic/fenceCallPolice'; //电子围栏报警
import FVfenceCallPolice from './modules/electronic/FVfenceCallPolice'; //燃油车电子围栏报警
import vehicleFemceConfig from './modules/electronic/vehicleFemceConfig'; //车辆围栏配置

/*报表统计*/
import StatisticApp from './modules/StatisticApp'
import VehicleStatistic from './modules/statistic/VehicleStatistic' //车辆信息统计
import EquipmentStatistic from './modules/statistic/EquipmentStatistic' //设备信息统计
import SIMStatistic from './modules/statistic/SIMStatistic' //SIM卡信息统计
import OwnerStatistic from './modules/statistic/OwnerStatistic' //车主信息统计
import VehicleDataStatistic from './modules/statistic/VehicleDataStatistic' //车辆数据统计
import VehicleMileageStatistic from './modules/statistic/VehicleMileageStatistic' //2018年车辆里程统计
import EVDataStatic from './modules/statistic/EVDataStatic' //新能源车辆数据

/* 运营活动 */
import OperationActiveApp from './modules/OperationActiveApp';
import OperationActiveList from './modules/OperationActive/OperationActiveList' //运营活动列表

/* 流量运营管理 */
import FlowManageApp from './modules/FlowManageApp';
import SimList from './modules/FlowManage/SimList'; //SIM卡列表
import FlowManage from './modules/FlowManage/FlowManage'; //流量包管理
import VehToNetManage from './modules/FlowManage/VehToNetManage'; //车联网服务管理
import SimInformation from './modules/FlowManage/SimInformation.vue'; //SIM卡信息管理
import ServiceItemManage from './modules/FlowManage/ServiceItemManage.vue'; //服务项管理
import GprsPoolQuery from './modules/FlowManage/GprsPoolQuery'; //流量池管理
import PackageManagement from './modules/FlowManage/PackageManagement'; //套餐
import TrafficManagement from './modules/FlowManage/TrafficManagement'; //流量包分配
import OrderManagement from './modules/FlowManage/OrderManagement'; //订单管理

/* 维保预约管理 */
import MaintenManageApp from './modules/MaintenManageApp';
import MaintenAppointment from './modules/MaintenManage/MaintenAppointment'; //维保预约
import MaintenAppointmentAll from './modules/MaintenManage/MaintenAppointmentAll'; //维保预约全部
import MaintenRecorder from './modules/MaintenManage/MaintenRecorder'; //维保记录
import MaintenRecorderAll from './modules/MaintenManage/MaintenRecorderAll'; //维保记录全部
import MaintenRemind from './modules/MaintenManage/MaintenRemind'; //车辆保养提醒

/* 试乘试驾管理 */
import TestDriverMangeApp from './modules/TestDriverMangeApp';
import TestDriverList from './modules/TestDriverMange/TestDriverList'; //试乘试驾车列表
import TestDriverOrderAll from './modules/TestDriverMange/TestDriverOrderAll'; //试乘试驾车报名列表全部
import TestDriverOrder from './modules/TestDriverMange/TestDriverOrder'; //试乘试驾报名列表

/*基础信息管理*/
import VehicleApp from './modules/VehicleApp.vue';
import VehicleInfo from './modules/vehicle/VehicleInfo.vue'; //车辆信息管理
import BtInfoOrg from './modules/vehicle/BtInfoOrg.vue'; //蓝牙信息管理
import UserActionRecord from './modules/vehicle/UserActionRecord.vue' //用户操作记录
import PushManagement from "./modules/vehicle/PushManagement.vue" //消息推送管理

/*地标上报车辆*/
import LandmarkVehApp from './modules/landmarkVehApp';
import LandmarkReportVeh from './modules/landmarkReportVeh/LandmarkReportVeh'; //地标上报车辆

/* 售后管理 */
import AfterSale from './modules/AfterSaleApp';
import TboxReplace from './modules/afterSaleMgt/TboxReplace'; //Tbox更换
import TBoxService from './modules/afterSaleMgt/TBoxService'; //TBox更换历史

/* Mno管理 */
import Mno from './modules/MnoApp';
import GprsRealQuery from './modules/mno/GprsRealQuery';

/* 蓝牙质检管理 */
import BtQuality from './modules/btQualityApp';
import qualityAccount from './modules/btQuality/qualityAccount'; //质检账户管理
import btWhiteList from './modules/btQuality/btWhiteList'; //蓝牙白名单

/* 经销商账号管理 */
import DealerManage from './modules/dealerManageApp';
import ActAssociated from './modules/dealerManage/ActAssociated'; //账号与经销商管理
import DealerUserQuery from './modules/dealerManage/dealerUserQuery'; //经销商账户管理
import dealerVehicleInfo from './modules/dealerManage/dealerVehicleInfo' //车辆划拨管理

/* 数据下载管理 */
import DataDownloadApp from './modules/DataDownloadApp';
import AddDownlTasks from './modules/datadownload/AddDownlTasks';
import ExportDownlTasks from './modules/datadownload/ExportDownlTasks';

/*应用商城*/
import AppStoreManagement from './modules/AppStoreManagement';
import AndroidVersion from './modules/AppStoreManagement/AndroidVersion';
import ApkResourceBundle from './modules/AppStoreManagement/ApkResourceBundle';

/*售后检测管理*/
import AfterSaleTestApp from './modules/AfterSaleTestApp';
import AfterSaleVehTest from './modules/AfterSaleTest/AfterSaleVehTest';

/*驾驶行为分析*/
import DrivingBehaviorApp from './modules/DrivingBehaviorApp';
import DrivingAnalysisList from './modules/DrivingManage/DrivingAnalysisList'; //驾驶行为列表

/*车机消息管理*/
import LocomotiveMessageApp from './modules/LocomotiveMessageApp';
import MessageContentManage from './modules/LocomotiveMessageManage/MessageContentManage'; //车机消息内容管理
import MessageTypeConfig from './modules/LocomotiveMessageManage/MessageTypeConfig'; //车机消息类型管理
import AppMessageManagement from './modules/LocomotiveMessageManage/AppMessageManagement'; //App消息管理

const routes = [{
        path: '/',
        name: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: "login",
        component: resolve => require(['./modules/Login'], resolve)
    },
    {
        path: '/RetrieveByMail',
        name: "RetrieveByMail",
        component: resolve => require(['./modules/RetrieveByMail'], resolve)
    },
    {
        path: '/home',
        name: "home",
        meta: {
            requireAuth: true
        },
        component: resolve => require(['./modules/home/Home'], resolve),
        children: [{
                path: "/welcome",
                component: Welcome
            },
            {
                path: "/map-monitor/CheryMonitor",
                name: "map",
                component: CheryMonitor
            },
            /* 用户管理 */
            // import UserCenterApp from './modules/UserCenterApp';
            // import UserManage from './modules/UserCenter/UserManage'; //用户管理
            // import UserRegBind from './modules/UserCenter/UserRegBind'; //用户注册并绑定
            // import OwnerInformation from './modules/UserCenter/OwnerInformation' //车主信息管理
            // import PersonalCenter from './modules/UserCenter/PersonalCenter' //个人信息管理
            /* 用户管理 */
            {
                path: "/UserCenter",
                name: "UserCenter",
                component: UserCenterApp,
                children: [{
                        name: 'UserManage',
                        path: 'UserManage',
                        meta: {
                            topResourceName: "UserCenter"
                        },
                        component: UserManage
                    },
                    {
                        name: 'UserManageAll',
                        path: 'UserManageAll',
                        meta: {
                            topResourceName: "UserCenter"
                        },
                        component: UserManageAll
                    },
                    {
                        name: 'UserRegBind',
                        path: 'UserRegBind',
                        meta: {
                            topResourceName: "UserCenter"
                        },
                        component: UserRegBind
                    },
                    {
                        name: 'OwnerInformation',
                        path: 'OwnerInformation',
                        meta: {
                            topResourceName: "UserCenter"
                        },
                        component: OwnerInformation
                    },

                ]
            },

            /*蓝牙基础信息管理*/
            {
                path: "/BluetoothManage",
                name: "BluetoothManage",
                component: BluetoothManage,
                children: [
                    {
                        name: 'BluetoothInfo',
                        path: 'BluetoothInfo',
                        meta: {
                            topResourceName: "BluetoothManage"
                        },
                        component: BluetoothInfo
                    },
                ]
            },

            /*转发服务管理*/
            {
                path: "/ForwardingService",
                name: "ForwardingService",
                component: ForwardingService,
                children: [
                    {
                        name: 'ForwardingManage',
                        path: 'ForwardingManage',
                        meta: {
                            topResourceName: "ForwardingService"
                        },
                        component: ForwardingManage
                    },
                ]
            },

            /* 车辆管理 */
            {
                path: "/VehicleManage",
                name: "VehicleManage",
                component: VehicleManageApp,
                children: [{
                        name: 'VehicleList',
                        path: 'VehicleList',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: VehicleList
                    },
                    {
                        name: 'AgencyAlter',
                        path: 'AgencyAlter',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: AgencyAlter
                    },
                    {
                        name: 'VehFoundation',
                        path: 'VehFoundation',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: VehFoundation
                    },
                    {
                        name: 'MutipleRegister',
                        path: 'MutipleRegister',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: MutipleRegister
                    },
                    {
                        name: 'VehicleAlarmInfo',
                        path: 'VehicleAlarmInfo',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: VehicleAlarmInfo
                    },
                    {
                        name: 'FvVehicleAlarmInfo',
                        path: 'FvVehicleAlarmInfo',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: FvVehicleAlarmInfo
                    },
                    {
                        name: 'FailureDataCar',
                        path: 'FailureDataCar',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: FailureDataCar
                    },
                    {
                        name: 'sosWarning',
                        path: 'sosWarning',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: SosWarning
                    },
                    {
                        name: 'warningDetail',
                        path: 'warningDetail',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: WarningDetail
                    },
                    {
                        name: 'bcallAlarmList',
                        path: 'bcallAlarmList',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: BcallWarning
                    },
                    {
                        name: 'omsAlarmControl',
                        path: 'omsAlarmControl',
                        meta: {
                            topResourceName: "VehicleManage"
                        },
                        component: OmsAlarmList
                    }
                ]
            },
            /* T-BOX设备管理 */
            {
                path: "/TboxDeviceManage",
                name: "TboxDeviceManage",
                component: TboxDeviceManageApp,
                children: [{
                        name: 'DeviceList',
                        path: 'DeviceList',
                        meta: {
                            topResourceName: "TboxDeviceManage"
                        },
                        component: DeviceList
                    },
                    {
                        name: 'SetParameter',
                        path: 'SetParameter',
                        meta: {
                            topResourceName: "TboxDeviceManage"
                        },
                        component: SetParameter
                    },
                    {
                        name: 'DeviceBaseInfo',
                        path: 'DeviceBaseInfo',
                        meta: {
                            topResourceName: "TboxDeviceManage"
                        },
                        component: DeviceBaseInfo
                    },

                    // TBOX注册查询
                    {
                        name: 'TboxRegisterNSearch',
                        path: 'TboxRegQuery',
                        meta: {
                            topResourceName: "TboxDeviceManage"
                        },
                        component: TboxRegisterNSearch
                    },

                    // Ready&Tbox累积未登录报警
                    {
                        name: 'UnLoginAlarmList',
                        path: 'UnLoginAlarmList',
                        meta: {
                            topResourceName: "TboxDeviceManage"
                        },
                        component: ReadyTboxUnLoginAlarm
                    },
                    {
                        name: 'tBoxRegVerify',
                        path: 'tBoxRegVerify',
                        meta: {
                            topResourceName: "TboxDeviceManage"
                        },
                        component: tBoxRegVerify
                    },
                    {
                        name: 'DeviceConfig',
                        path: 'DeviceConfig',
                        meta: {
                            topResourceName: "TboxDeviceManage"
                        },
                        component: DeviceConfig
                    },
                    {
                        name: 'FuelCarParameterSetting',
                        path: 'FuelCarParameterSetting',
                        meta: {
                            topResourceName: "TboxDeviceManage"
                        },
                        component: FuelCarParameterSetting
                    },
                ]
            },

            /* 电子围栏监控 */
            {
                path: "/ElectronicMonitor",
                name: "ElectronicMonitor",
                component: ElectronicMonitorFenceApp,
                children: [
                    // 电子围栏设置
                    {
                        name: 'ElectnFenSetList',
                        path: 'ElectnFenSetList',
                        meta: {
                            topResourceName: "ElectronicMonitor"
                        },
                        component: ElectronicFenSetList
                    },
                    // 车辆报警管理
                    {
                        name: 'PoliceVehManagement',
                        path: 'PoliceVehManagement',
                        meta: {
                            topResourceName: "ElectronicMonitor"
                        },
                        component: PoliceVehManagement
                    },
                    // 地图选点
                    {
                        name: 'selectLocationMap',
                        path: 'selectLocationMap',
                        meta: {
                            topResourceName: "ElectronicMonitor"
                        },
                        component: SelectLocationMap
                    },

                ]
            },


            /* 产线检测 */
            {
                path: "/ProlineDetection",
                name: "ProlineDetection",
                component: ProlineDetectionApp,
                children: [{
                        name: 'ProlineCheck',
                        path: 'ProlineCheck',
                        meta: {
                            topResourceName: "ProlineDetection"
                        },
                        component: ProlineCheck
                    },
                    {
                        name: 'ProlineRemote',
                        path: 'ProlineRemote',
                        meta: {
                            topResourceName: "ProlineDetection"
                        },
                        component: ProlineRemote
                    },
                    {
                        name: 'ProlineCheckQuery',
                        path: 'ProlineCheckQuery',
                        meta: {
                            topResourceName: "ProlineDetection"
                        },
                        component: ProlineCheckQuery
                    },
                    {
                        name: 'VehicleCheckQuery',
                        path: 'VehicleCheckQuery',
                        meta: {
                            topResourceName: "ProlineDetection"
                        },
                        component: VehicleCheckQuery
                    },
                    {
                        name: 'ErrorMessageCheck',
                        path: 'ErrorMessageCheck',
                        meta: {
                            topResourceName: "ProlineDetection"
                        },
                        component: ErrorMessageCheck
                    },
                    {
                        name: 'TraditionalData',
                        path: 'TraditionalData',
                        meta: {
                            topResourceName: "ProlineDetection"
                        },
                        component: TraditionalData
                    },
                    {
                        name: 'AbnormalRegister',
                        path: 'AbnormalRegister',
                        meta: {
                            topResourceName: "ProlineDetection"
                        },
                        component: AbnormalRegister,
                    },
                    {
                        name: 'DetectionList',
                        path: 'DetectionList',
                        meta: {
                            topResourceName: "ProlineDetection"
                        },
                        component: DetectionList
                    },
                ]
            },
            /* 远程控制 */
            {
                path: "/RemoteSetManage",
                name: "RemoteSetManage",
                component: RemoteSetApp,
                children: [{
                        name: 'RemoteHistory',
                        path: 'RemoteHistory',
                        meta: {
                            topResourceName: "RemoteSetManage"
                        },
                        component: RemoteHistory
                    },
                    {
                        name: 'RemoteSetting',
                        path: 'RemoteSetting',
                        meta: {
                            topResourceName: "RemoteSetManage"
                        },
                        component: RemoteSetting
                    },
                    {
                        name: 'ControlStartUp',
                        path: 'ControlStartUp',
                        meta: {
                            topResourceName: "RemoteSetManage"
                        },
                        component: ControlStartUp
                    },
                    {
                        name: 'SocketTest',
                        path: 'SocketTest',
                        meta: {
                            topResourceName: "RemoteSetManage"
                        },
                        component: SocketTest
                    },
                ]
            },
            /* 服务网点管理 */
            {
                path: "/ServiceNetManage",
                name: "ServiceNetManage",
                component: ServiceNetManage,
                children: [{
                        name: 'ServiceNetMsg',
                        path: 'ServiceNetMsg',
                        meta: {
                            topResourceName: "ServiceNetManage"
                        },
                        component: ServiceNetMsg
                    },
                    {
                        name: 'ServiceNetImport',
                        path: 'ServiceNetImport',
                        meta: {
                            topResourceName: "ServiceNetManage"
                        },
                        component: ServiceNetImport
                    },
                    {
                        name: 'OfflineActAudit',
                        path: 'OfflineActAudit',
                        meta: {
                            topResourceName: "ServiceNetManage"
                        },
                        component: OfflineActAudit
                    },
                ]
            },
            /* 系统管理 */
            {
                path: "/foundation",
                name: "foundation",
                component: SystemManageApp,
                children: [{
                        name: "UserQuery",
                        path: "UserQuery",
                        meta: {
                            topResourceName: "foundation"
                        },
                        component: UserQuery
                    },
                    {
                        name: "RoleQuery",
                        path: "RoleQuery",
                        meta: {
                            topResourceName: "foundation"
                        },
                        component: RoleQuery
                    },
                    {
                        name: "Organization",
                        path: "Organization",
                        meta: {
                            topResourceName: "foundation"
                        },
                        component: Organization
                    },
                    {
                        name: "MenuQuery",
                        path: "MenuQuery",
                        meta: {
                            topResourceName: "foundation"
                        },
                        component: MenuQuery
                    },
                    {
                        name: "ResourceQuery",
                        path: "ResourceQuery",
                        meta: {
                            topResourceName: "foundation"
                        },
                        component: ResourceQuery
                    },
                    {
                        name: "ManualCatalogConfig",
                        path: "ManualCatalogConfig",
                        meta: {
                            topResourceName: "foundation"
                        },
                        component: ManualCatalogConfig
                    }
                ]
            },
            /* OTA */
            {
                path: "/OTAUpgrade",
                name: "OTAUpgrade",
                component: OTAUpgradeApp,
                children: [{
                        name: 'VehUpgrade',
                        path: 'VehUpgrade',
                        meta: {
                            topResourceName: "OTAUpgrade"
                        },
                        component: VehUpgrade
                    },
                    {
                        name: 'VersionList',
                        path: 'VersionList',
                        meta: {
                            topResourceName: "OTAUpgrade"
                        },
                        component: VersionList
                    },
                    {
                        name: 'UpgradeHistory',
                        path: 'UpgradeHistory',
                        meta: {
                            topResourceName: "OTAUpgrade"
                        },
                        component: UpgradeHistory
                    },
                    {
                        name: 'APPTaskManagement',
                        path: 'APPTaskManagement',
                        meta: {
                            topResourceName: "OTAUpgrade"
                        },
                        component: APPTaskManagement
                    }
                ]
            },
            /*车辆位置监控*/
            {
                path: "/location",
                name: "location",
                component: PositionApp,
                children: [{
                        name: 'Position',
                        path: 'Position',
                        meta: {
                            topResourceName: "location"
                        },
                        component: Position
                    },
                    {
                        name: 'Trace',
                        path: 'Trace',
                        meta: {
                            topResourceName: "location"
                        },
                        component: Trace
                    },
                ]
            },
            /*车辆状态监控*/
            {
                path: "/status",
                name: "status",
                component: VehicleStatusApp,
                meta: {
                    topResourceName: "status"
                },
                children: [{
                        path: 'VehicleStatusSearch',
                        meta: {
                            topResourceName: "status"
                        },
                        component: VehicleStatusSearch,
                        children: [{
                                name: "VehicleStatusLatest",
                                path: "VehicleStatusLatest",
                                meta: {
                                    topResourceName: "status"
                                },
                                component: VehicleStatusLatest
                            },
                            {
                                name: "VehicleStatusHistory",
                                path: "VehicleStatusHistory",
                                meta: {
                                    topResourceName: "status"
                                },
                                component: VehicleStatusHistory
                            },
                            {
                                name: "VehicleStatusSoloCallPolice",
                                path: "VehicleStatusSoloCallPolice",
                                meta: {
                                    topResourceName: "status"
                                },
                                component: VehicleStatusSoloCallPolice
                            },
                            {
                                name: "VehicleStatusFaultCount",
                                path: "VehicleStatusFaultCount",
                                meta: {
                                    topResourceName: "status"
                                },
                                component: VehicleStatusFaultCount
                            },
                        ]
                    },
                    {
                        name: 'VehicleCallPolice',
                        path: 'VehicleCallPolice',
                        meta: {
                            topResourceName: "status"
                        },
                        component: VehicleCallPolice
                    },
                    {
                        name: 'VehOperationData',
                        path: 'VehOperationData',
                        meta: {
                            topResourceName: "status"
                        },
                        component: VehOperationData
                    },
                    {
                        name: 'MeterAlertCheck',
                        path: 'MeterAlertCheck',
                        meta: {
                            topResourceName: "status"
                        },
                        component: MeterAlertCheck
                    }
                ]
            },
            /* 电子围栏 */
            {
                path: "/electronic",
                name: "electronic",
                meta: {
                    topResourceName: "electronic"
                },
                component: ElectFenceApp,
                children: [{
                        name: 'electronicFence',
                        path: 'electronicFence',
                        meta: {
                            topResourceName: "electronic"
                        },
                        component: electronicFence
                    },
                    {
                        name: 'vehicleFemce',
                        path: 'vehicleFemce',
                        meta: {
                            topResourceName: "electronic"
                        },
                        component: vehicleFemce
                    },
                    {
                        name: 'fenceCallPolice',
                        path: 'fenceCallPolice',
                        meta: {
                            topResourceName: "electronic"
                        },
                        component: fenceCallPolice
                    },
                    {
                        name: 'FVfenceCallPolice',
                        path: 'FVfenceCallPolice',
                        meta: {
                            topResourceName: "electronic"
                        },
                        component: FVfenceCallPolice
                    },
                    {
                        name: 'vehicleFemceConfig',
                        path: 'vehicleFemceConfig',
                        meta: {
                            topResourceName: "electronic"
                        },
                        component: vehicleFemceConfig
                    },
                ]
            },
            /* 报表管理 */
            {
                path: '/statistic',
                name: "statistic",
                component: StatisticApp,
                children: [{
                        name: 'VehicleStatistic',
                        path: 'VehicleStatistic',
                        meta: {
                            topResourceName: "statistic"
                        },
                        component: VehicleStatistic
                    },
                    {
                        name: 'EquipmentStatistic',
                        path: 'EquipmentStatistic',
                        meta: {
                            topResourceName: "statistic"
                        },
                        component: EquipmentStatistic
                    },
                    {
                        name: 'SIMStatistic',
                        path: 'SIMStatistic',
                        meta: {
                            topResourceName: "statistic"
                        },
                        component: SIMStatistic
                    },
                    {
                        name: 'OwnerStatistic',
                        path: 'OwnerStatistic',
                        meta: {
                            topResourceName: "statistic"
                        },
                        component: OwnerStatistic
                    },
                    {
                        name: 'VehicleDataStatistic',
                        path: 'VehicleDataStatistic',
                        meta: {
                            topResourceName: "statistic"
                        },
                        component: VehicleDataStatistic
                    },
                    {
                        name: 'VehicleMileageStatistic',
                        path: 'VehicleMileageStatistic',
                        meta: {
                            topResourceName: "statistic"
                        },
                        component: VehicleMileageStatistic
                    },
                    {
                        name: 'EVDataStatic',
                        path: 'EVDataStatic',
                        meta: {
                            topResourceName: "statistic"
                        },
                        component: EVDataStatic
                    },
                ]
            },
            /* 运营活动 */
            {
                path: '/OperationActiveApp',
                name: "OperationActiveApp",
                meta: {
                    topResourceName: "OperationActiveApp"
                },
                component: OperationActiveApp,
                children: [{
                    name: 'OperationActiveList',
                    path: 'OperationActiveList',
                    meta: {
                        topResourceName: "OperationActiveApp"
                    },
                    component: OperationActiveList
                }, ]
            },
            /* 流量运营管理 */
            {
                path: '/FlowManageApp',
                name: "FlowManageApp",
                meta: {
                    topResourceName: "FlowManageApp"
                },
                component: FlowManageApp,
                children: [{
                        name: 'SimList',
                        path: 'SimList',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: SimList
                    },
                    {
                        name: 'FlowManage',
                        path: 'FlowManage',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: FlowManage
                    },
                    {
                        name: 'VehToNetManage',
                        path: 'VehToNetManage',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: VehToNetManage
                    },
                    {
                        name: 'SimInformation',
                        path: 'SimInformation',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: SimInformation
                    },
                    {
                        name: 'ServiceItemManage',
                        path: 'ServiceItemManage',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: ServiceItemManage
                    },
                    {
                        name: 'GprsPoolQuery',
                        path: 'GprsPoolQuery',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: GprsPoolQuery
                    },
                    {
                        name: 'PackageManagement',
                        path: 'PackageManagement',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: PackageManagement
                    },
                    {
                        name: 'TrafficManagement',
                        path: 'TrafficManagement',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: TrafficManagement
                    },
                    {
                        name: 'OrderManagement',
                        path: 'OrderManagement',
                        meta: {
                            topResourceName: "FlowManageApp"
                        },
                        component: OrderManagement
                    }
                ]
            },
            /* 维保管理 */
            {
                path: '/MaintenManage',
                name: "MaintenManage",
                meta: {
                    topResourceName: "MaintenManage"
                },
                component: MaintenManageApp,
                children: [{
                        name: 'MaintenAppointment',
                        path: 'MaintenAppointment',
                        meta: {
                            topResourceName: "MaintenManage"
                        },
                        component: MaintenAppointment
                    },
                    {
                        name: 'MaintenAppointmentAll',
                        path: 'MaintenAppointmentAll',
                        meta: {
                            topResourceName: "MaintenManage"
                        },
                        component: MaintenAppointmentAll
                    },
                    {
                        name: 'MaintenRecorder',
                        path: 'MaintenRecorder',
                        meta: {
                            topResourceName: "MaintenManage"
                        },
                        component: MaintenRecorder
                    },
                    {
                        name: 'MaintenRecorderAll',
                        path: 'MaintenRecorderAll',
                        meta: {
                            topResourceName: "MaintenManage"
                        },
                        component: MaintenRecorderAll
                    },
                    {
                        name: 'MaintenRemind',
                        path: 'MaintenRemind',
                        meta: {
                            topResourceName: "MaintenManage"
                        },
                        component: MaintenRemind
                    },
                ]
            },
            /* 试乘试驾管理 */
            {
                path: '/TestDriverMange',
                name: "TestDriverMange",
                meta: {
                    topResourceName: "TestDriverMange"
                },
                component: TestDriverMangeApp,
                children: [{
                        name: 'TestDriverList',
                        path: 'TestDriverList',
                        meta: {
                            topResourceName: "TestDriverMange"
                        },
                        component: TestDriverList
                    }, {
                        name: 'TestDriverOrderAll',
                        path: 'TestDriverOrderAll',
                        meta: {
                            topResourceName: "TestDriverMange"
                        },
                        component: TestDriverOrderAll
                    },
                    {
                        name: 'TestDriverOrder',
                        path: 'TestDriverOrder',
                        meta: {
                            topResourceName: "TestDriverMange"
                        },
                        component: TestDriverOrder
                    },
                ]
            },
            /*基础信息管理*/
            {
                path: "/vehicle",
                name: "vehicle",
                component: VehicleApp,
                meta: {
                    topResourceName: "vehicle"
                },
                children: [{
                        name: 'vehicleInfo',
                        path: 'vehicleInfo',
                        meta: {
                            topResourceName: "vehicle"
                        },
                        component: VehicleInfo
                    },
                    {
                        name: 'BtInfoOrg',
                        path: 'BtInfoOrg',
                        meta: {
                            topResourceName: "vehicle"
                        },
                        component: BtInfoOrg
                    },
                    {
                        name: 'UserActionRecord',
                        path: 'UserActionRecord',
                        meta: {
                            topResourceName: "vehicle"
                        },
                        component: UserActionRecord
                    },
                    {
                        name: 'PushManagement',
                        path: 'PushManagement',
                        meta: {
                            topResourceName: "vehicle"
                        },
                        component: PushManagement
                    }
                ]
            },
            /*地标上报车辆*/
            {
                path: "/landmarkReportVeh",
                name: "landmarkReportVeh",
                meta: {
                    topResourceName: "landmarkReportVeh"
                },
                component: LandmarkVehApp,
                children: [{
                    name: 'LandmarkReportVeh',
                    path: 'LandmarkReportVeh',
                    meta: {
                        topResourceName: "landmarkReportVeh"
                    },
                    component: LandmarkReportVeh
                }, ]
            },
            /*售后管理*/
            {
                path: "/afterSale",
                name: "afterSale",
                meta: {
                    topResourceName: "afterSale"
                },
                component: AfterSale,
                children: [{
                        name: 'TboxReplace',
                        path: 'TboxReplace',
                        meta: {
                            topResourceName: "afterSale"
                        },
                        component: TboxReplace
                    },
                    {
                        name: 'TBoxService',
                        path: 'TBoxService',
                        meta: {
                            topResourceName: "afterSale"
                        },
                        component: TBoxService
                    },
                ]
            },
            // /*MNO管理*/
            //     { path: "/mno", name:"mno",meta:{topResourceName:"mno"},component: Mno, children:[
            //         { name:'GprsRealQuery', path:'GprsRealQuery', meta:{topResourceName:"mno"},component:GprsRealQuery },
            //         { name:'GprsPoolQuery', path:'GprsPoolQuery',meta:{topResourceName:"mno"}, component:GprsPoolQuery },
            //     ]},
            /*蓝牙质检管理*/
            {
                path: "/btQuality",
                name: "btQuality",
                meta: {
                    topResourceName: "btQuality"
                },
                component: BtQuality,
                children: [{
                        name: 'qualityAccount',
                        path: 'qualityAccount',
                        meta: {
                            topResourceName: "btQuality"
                        },
                        component: qualityAccount
                    },
                    {
                        name: 'btWhiteList',
                        path: 'btWhiteList',
                        meta: {
                            topResourceName: "btQuality"
                        },
                        component: btWhiteList
                    },
                ]
            },
            /* 经销商账号管理 */
            {
                path: "/dealerManager",
                name: "dealerManager",
                meta: {
                    topResourceName: "dealerManager"
                },
                component: DealerManage,
                children: [{
                        name: 'dealerUserQuery',
                        path: 'dealerUserQuery',
                        meta: {
                            topResourceName: "dealerManager"
                        },
                        component: DealerUserQuery
                    },
                    {
                        name: 'ActAssociated',
                        path: 'ActAssociated',
                        meta: {
                            topResourceName: "dealerManager"
                        },
                        component: ActAssociated
                    },
                    {
                        name: 'dealerVehicleInfo',
                        path: 'dealerVehicleInfo',
                        meta: {
                            topResourceName: "dealerManager"
                        },
                        component: dealerVehicleInfo
                    },

                ]
            },
            /* 数据下载管理 */
            {
                path: "/datadownload",
                name: "datadownload",
                meta: {
                    topResourceName: "datadownload"
                },
                component: DataDownloadApp,
                children: [{
                        name: 'AddDownlTasks',
                        path: 'AddDownlTasks',
                        meta: {
                            topResourceName: "datadownload"
                        },
                        component: AddDownlTasks
                    },
                    {
                        name: 'ExportDownlTasks',
                        path: 'ExportDownlTasks',
                        meta: {
                            topResourceName: "datadownload"
                        },
                        component: ExportDownlTasks
                    },

                ]
            },
            /* 售后检测管理*/
            {
                path: "/AfterSaleTest",
                name: "AfterSaleTest",
                meta: {
                    topResourceName: "AfterSaleTest"
                },
                component: AfterSaleTestApp,
                children: [{
                    name: 'AfterSaleVehTest',
                    path: 'AfterSaleVehTest',
                    meta: {
                        topResourceName: "AfterSaleTest"
                    },
                    component: AfterSaleVehTest
                }]
            },
            /* 车机消息管理*/
            {
                path: "/LocomotiveMessageManage",
                name: "LocomotiveMessageManage",
                meta: {
                    topResourceName: "LocomotiveMessageManage"
                },
                component: LocomotiveMessageApp,
                children: [{
                        name: 'MessageContentManage',
                        path: 'MessageContentManage',
                        meta: {
                            topResourceName: "LocomotiveMessageManage"
                        },
                        component: MessageContentManage
                    },
                    {
                        name: 'MessageTypeConfig',
                        path: 'MessageTypeConfig',
                        meta: {
                            topResourceName: "LocomotiveMessageManage"
                        },
                        component: MessageTypeConfig
                    },
                    {
                        name: 'AppMessageManagement',
                        path: 'AppMessageManagement',
                        meta: {
                            topResourceName: "LocomotiveMessageManage"
                        },
                        component: AppMessageManagement,
                    },
                ]
            },

            /* 驾驶行为分析管理*/
            {
                path: "/DrivingManage",
                name: "DrivingManage",
                meta: {
                    topResourceName: "DrivingManage"
                },
                component: DrivingBehaviorApp,
                children: [{
                    name: 'DrivingAnalysisList',
                    path: 'DrivingAnalysisList',
                    meta: {
                        topResourceName: "DrivingManage"
                    },
                    component: DrivingAnalysisList
                }]
            },
            /* 应用商城 */
            {
                path: "/AppStoreManagement",
                name: "AppStoreManagement",
                component: AppStoreManagement,
                children: [{
                        name: 'AndroidVersion',
                        path: 'AndroidVersion',
                        meta: {
                            topResourceName: "AppStoreManagement"
                        },
                        component: AndroidVersion
                    },
                    {
                        name: 'ApkResourceBundle',
                        path: 'ApkResourceBundle',
                        meta: {
                            topResourceName: "AppStoreManagement"
                        },
                        component: ApkResourceBundle
                    },

                ]
            },
            /* 个人中心 */
            {
                path: "/personalCenter",
                name: "personalCenter",
                meta: {
                    topResourceName: "personalCenter"
                },
                component: PersonalCenter
            },


            {
                path: '*',
                redirect: '/welcome'
            }
        ],

    },

];

export default routes;