# linux 挂载

## mount

```bash
# 查看系统已挂载的设备
mount
# 自动挂载  依据/etc/fstab配置文件
mount -a
```

* 在特定分区上建立 xfs 文件系统`mkfs.xfs /dev/vdb`
* 挂载命令格式 `mount [-t 文件系统] [-o 特殊选项] 设备文件名 挂载点`
* 卸载命令`umount 设备文件名`或者 `umount 挂载点`
* 设置开机自动挂载，编辑`/etc/fstab`文件


## fdisk 分区命令

* 查看当前分区`fdisk -l`

## df 命令

* 查看目录挂载点`df \home`