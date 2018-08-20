# mysql 常见问题

**mysql server has gone away**

设置文件最大的大小

```sql
mysql> show global variables like 'max_allowed_packet';
+--------------------+---------+
| Variable_name      | Value   |
+--------------------+---------+
| max_allowed_packet | 1048576 |
+--------------------+---------+
1 row in set (0.00 sec)

mysql> set global max_allowed_packet=1024*1024*16;
mysql> show global variables like 'max_allowed_packet';

+--------------------+----------+
| Variable_name      | Value    |
+--------------------+----------+
| max_allowed_packet | 16777216 |
+--------------------+----------+
1 row in set (0.00 sec)
```