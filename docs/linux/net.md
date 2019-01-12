# 网络

## 网络接口配置文件

> 文件位置 /etc/sysconfig/netword-scripts/ifcfg-xxx

* HWADDR #网卡设备 MAC 地址
* TYPE #网络类型
* BOOTPROTO #启用地址协议 --static: 静态协议 --bootp 协议 --dhcp 协议
* DEFROUTE 
* PEERDNS
* PEERROUTES
* IPV4_FAILURE_FATAL
* IPV6INIT
* IPV6_AUTOCONF
* IPV6_DEFROUTE
* IPV6_PEERDNS
* IPV6_PEERROUTES
* IPV6\_FAILURE_FATAL
* NAME #网卡名称
* UUID 
* ONBOOT #系统启动时是否自动加载
* IPADDR #网卡 IP 地址
* NETMASK #子网掩码
* GATEWAY #网卡网关地址
* DNS1 #网卡 DNS 地址

## 网卡接口关闭与激活

```bash
ifdown xxx # 关闭网络
ifup xxx # 启用网络
```