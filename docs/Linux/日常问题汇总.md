# 日常问题汇总

* 普通用户免密码登陆，须将 .ssh 文件夹的权限设置为 700 ，authorized_keys 权限设置为600

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

* 查看核心数

```bash
grep 'model name' /proc/cpuinfo | wc -l
```

* 初始时间和本地时间相差八个小时

```bash
timedatectl // 查看本地时间
rm -fr /etc/localtime
ln -s /usr/share/zoneinfo/Universal /etc/localtime
```

* 关闭 SELinux
	* 修改/etc/selinux/config文件中设置SELINUX=disabled ，然后重启服务器。
	* setenforce 0 # 临时生效

* 后台任务
	* ctrl + z 挂起任务
	* bg 将作业放在后台运行
	* jobs 查看后台运行作业
	* fg 将作业放在前台运行
	* ctrl + c 结束任务


* 查看 http 网络状态

```bash
sudo netstat -anpl | grep 'http'
```