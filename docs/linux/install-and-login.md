# 安装与 SSH 登录

## 准备工作

* 查看 ip
	* ifconfig # minimal 镜像不包括此命令
	* ip addr
	* vi /etc/sysconfig/network-scripts/ifcfg-xxx # 修改网卡配置 ONBOOT=yes，并重启网卡
	* yum install net-tools # 安装 ifconfig 命令
*  替换默认源
	* 安装 wget
	* 源地址：[http://mirrors.163.com/.help/centos.html](http://mirrors.163.com/.help/centos.html)
	* 源文件位置 /etc/yum.repos.d/CentOS-Base.repo

*  安装 vim

## SSH

> Secure Shell 安全外壳协议

* 跨平台

### 服务器安装 SSH 服务

* 安装 SSH yum install openssh-server
* 启动 SSH service sshd start
* 设置开机启动 chkconfig ssh on

### 客户端安装 SSH 工具

* SSH 是典型的 C/S （客户端与服务端） 的交互模式
* windows 平台常用 SSH 软件是 Xshell, Putty, secureCRT
* Linux 平台只需要执行 yum install openssh-clients

### 连接方式

```bash
ssh root@192.168.31.54
```

### SSH config

* config 方便管理多个 SSH
* config 存放在 ~/.ssh/config
* config 配置，配置完成之后直接通过`ssh centos7`连接

```bash
host "centos7"
  HostName 192.168.31.54
  User root
  Port 22
  IdentityFile ./centos7_rsa
```

### SSH 安全免密码登陆： ssh key

* ssh key 采用非对称方式生成一对公钥和私钥
* 私钥放在`~/.ssh`目录下面
* 公钥可以对外开放，放在服务器的`～/.ssh/authorized_keys`
* 使用`ssh-add xx_rsa`将密钥加载到 ssh 服务
* 非 root 用户添加免密码登录，`.ssh`目录权限须改为`700`，`authorized_keys`文件权限须改成`600`

### Linux 平台生成 ssh key

* `ssh-keygen -t rsa`
* `ssh-keygen -t dsa`

* 输入公私钥名称，生成两个文件 xx\_rsa, xx_rsa.pub

### SSH 端口安全

* 修改默认端口号`vim /etc/ssh/sshd_config`, 修改 port 重启 SSH 服务即可
* `service sshd restart`重启 SSH 服务