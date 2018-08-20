* 常用压缩格式 `.zip` `.gz` `.bz2`
* 常用压缩格式 `.tar.gz` `.tar.bz2`  

# zip 压缩文件名 源文件
	zip -r 压缩文件名 源文件
	unzip 文件名 //解压缩
	
# gzip 源文件
> 不保留源文件  

	gzip -c 源文件 > 压缩文件 //源文件保留
	gzip -r 目录 //压缩目录下的所有子文件,但是不能压缩目录
	gunzip 压缩文件  == gzip -d 压缩文件  //解压缩文件
	
# bzip2 源文件
> 不能压缩目录， 不保留源文件  

	bzip2 -k 源文件 //压缩之后保留原文件
	bunzip2 滑索文件 == bzip2 -d 压缩文件 //解压缩文件
	
# tar -cvf  打包文件名 源文件

	tar -c  //打包
		-v	//显示过程
		-f	//指定打包后的文件名
	tar -cvf longzls.tar longzls	//打包
	tar -xvf longzls.tar	//解打包
---
	
	tar -jcvf 压缩包名.tar.bz2 源文件 //压缩
	tar -jxvf 压缩包名.tar.bz2	//解压缩
	tar -zcvf 压缩包名.tar.gz 源文件	//压缩
	tar -zxvf 压缩包名.tar.gz //解压缩
	
---

	tar -jxvf 压缩包名.tar.bz2 -C 目标文件	//指定解压缩位置
	tar -zcvf 压缩包名.tar.gz 源文件 源文件 //压缩多个目录或者文件
	tar -ztvf 压缩包名.tar.gz //查看压缩文件，不解压缩