# mysql 数据库相关操作

DDL(对数据库/表的操作)

## 查询数据库

```bash
show databases;
```

## 新增一个数据库

```bash
create database if not exists db2;
```

## 删除一个数据库

```bash
drop database if exists db2;
```

## 查看当前使用的数据库

```bash
select database;
```

## 使用数据库

```bash
use 数据库名称
```

## 查询表

```bash
show tables;
```

## 查询表结构

```bash
desc 表名称;
```

## 创建一个表

```bash
mysql> create table tb_stu(
    -> id int,
    -> username varchar(20),
    -> password varchar(20)
    -> );
```
