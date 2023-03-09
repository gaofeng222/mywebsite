# JDBC 快速入门

## 步骤

```bash
 导入 mysql-connector-java-5.1.48 jar包
```

## 完整步骤

```java
public static void main(String[] args) throws Exception {
        //注册驱动
        Class.forName("com.mysql.jdbc.Driver");

        String url = "jdbc:mysql://localhost:3306/mybatis";
        String username = "root";
        String password = "123456";

        //获取链接
        Connection conn = DriverManager.getConnection(url,username,password);

        //定义sql
        String sql = "update tb_user set addr='sichuang' where id=8";

        Statement stat = conn.createStatement();
        //执行sql
        int count = stat.executeUpdate(sql);

        //处理结果
        System.out.println(count);

        //释放资源
        stat.close();
        conn.close();
    }

```

## Connection 详解

```java
public class JDBCDemo_coonect {
    public static void main(String[] args) throws Exception { ////alt+enter
        //注册驱动,不注册也可以，已经自动注册
//        Class.forName("com.mysql.jdbc.Driver");

//        String url = "jdbc:mysql:///:3306/mybatis ";
        String url = "jdbc:mysql://localhost:3306/mybatis?useSSL=false";

        String username = "root";
        String password = "123456";

        //获取链接
        Connection conn = DriverManager.getConnection(url,username,password);

        //定义sql
        String sql1 = "update tb_user set addr='sichuang' where id=8";
        String sql2 = "update tb_user set addr='jianli' where id=8";
        Statement stat = conn.createStatement();

        //开启事务
        conn.setAutoCommit(false);
        //ctrl+alt+t
        try {
            //执行sql
            int count1 = stat.executeUpdate(sql1);
            //处理结果
            System.out.println(count1);
            int i =3/0;
            int count2 = stat.executeUpdate(sql2);
            System.out.println(count2);
            //提交事务
            conn.commit();
        } catch (SQLException throwables) {
            //事务回滚
            conn.rollback();
            throwables.printStackTrace();
        }

        //释放资源
        stat.close();
        conn.close();


    }
}
```

## Statement 详解

```java
package com.heima.jdbc;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * @author gaofeng
 * @date 2023/2/26 - 17:35
 */
public class JDBCDemo_statement{

    @Test
    public void testDML() throws Exception{
        //注册驱动,不注册也可以，已经自动注册
//        Class.forName("com.mysql.jdbc.Driver");

//        String url = "jdbc:mysql:///:3306/mybatis ";
        String url = "jdbc:mysql://localhost:3306/mybatis?useSSL=false";

        String username = "root";
        String password = "123456";

        //获取链接
        Connection conn = DriverManager.getConnection(url,username,password);

        //定义sql
        String sql1 = "update tb_user set addr='sichuang' where id=9";
        Statement stat = conn.createStatement();
        int count1 = stat.executeUpdate(sql1);   //DML成功返回影响的行数DDL 成功也可能是0
        if(count1 > 0){
            //处理结果
            System.out.println("修改成功");
        }else{
            System.out.println("修改失败");
        }

        //释放资源
        stat.close();
        conn.close();
    }
}
```

## ResultSet 详解

```java
package com.heima.jdbc;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * @author gaofeng
 * @date 2023/2/26 - 17:35
 */
public class JDBCDemo_ResultSet {

    @Test
    public void testResultSet() throws Exception{
        //注册驱动,不注册也可以，已经自动注册
//        Class.forName("com.mysql.jdbc.Driver");

//        String url = "jdbc:mysql:///:3306/mybatis ";
        String url = "jdbc:mysql://localhost:3306/mybatis?useSSL=false";

        String username = "root";
        String password = "123456";

        //获取链接
        Connection conn = DriverManager.getConnection(url,username,password);

        //定义sql
        String sql1 = "select * from tb_user";
        Statement stat = conn.createStatement();
        ResultSet rs = stat.executeQuery(sql1);   // 执行DQL语句，返回ResultSet对象
        //处理结果
        //光标向下移动，并且判断是否有数据
        while (rs.next()){
//            int id = rs.getInt(1);
//            String username1 = rs.getString(2);
//            String password1 = rs.getString(3);
//            String gender = rs.getString(4);
//            String addr = rs.getString(5);

            int id = rs.getInt("id");
            String username1 = rs.getString("username");
            String password1 = rs.getString("password");
            String gender = rs.getString("gender");
            String addr = rs.getString("addr");

            System.out.println(id);
            System.out.println(username1);
            System.out.println(password1);
            System.out.println(gender);
            System.out.println(addr);
            System.out.println("-----");
        }

        //释放资源
        stat.close();
        conn.close();
    }


    **
     *  查询tb_user表中的数据,封装为TBuser对象，存储到ArralyList中
     *
     * @throws Exception
     */
    @Test
    public void testResultSet2() throws Exception{
        //注册驱动,不注册也可以，已经自动注册
//        Class.forName("com.mysql.jdbc.Driver");

//        String url = "jdbc:mysql:///:3306/mybatis ";
        String url = "jdbc:mysql://localhost:3306/mybatis?useSSL=false";

        String username = "root";
        String password = "123456";

        //获取链接
        Connection conn = DriverManager.getConnection(url,username,password);

        //定义sql
        String sql1 = "select * from tb_user";
        Statement stat = conn.createStatement();
        ResultSet rs = stat.executeQuery(sql1);   // 执行DQL语句，返回ResultSet对象
        //处理结果
        //创建集合

        List<TBuser> list = new ArrayList<>();
        //光标向下移动，并且判断是否有数据
        while (rs.next()){

            //创建对象

            TBuser tbuser = new TBuser();

            int id = rs.getInt("id");
            String username1 = rs.getString("username");
            String password1 = rs.getString("password");
            String gender = rs.getString("gender");
            String addr = rs.getString("addr");

//            System.out.println(id);
//            System.out.println(username1);
//            System.out.println(password1);
//            System.out.println(gender);
//            System.out.println(addr);
//            System.out.println("-----");

            tbuser.setId(id);
            tbuser.setUsername(username1);
            tbuser.setUsername(password1);
            tbuser.setGender(gender);
            tbuser.setAddr(addr);
           //存入集合
            list.add(tbuser);
        }

        System.out.println(list);
        //[TB_user{id=1, username='123', password='null', gender='m', addr='beijing'}, TB_user{id=2, username='489', password='null', gender='m', addr='shanghai'}, TB_user{id=3, username='789', password='null', gender='n', addr='hubei'}, TB_user{id=4, username='5689', password='null', gender='n', addr='hunan'}, TB_user{id=5, username='123456', password='null', gender='n', addr='chengdu'}, TB_user{id=6, username='789654', password='null', gender='m', addr='hubei'}, TB_user{id=7, username='789654', password='null', gender='m', addr='hubei'}, TB_user{id=8, username='555666', password='null', gender='m', addr='sichuang'}]
        //释放资源
        rs.close();
        stat.close();
        conn.close();
    }
}

```

## 数据库连接池 druid(德鲁伊)

```java
package com.heima.druid;

import com.alibaba.druid.pool.DruidDataSourceFactory;
import com.heima.pojo.TBuser;


import javax.sql.DataSource;
import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * @author gaofeng
 * @date 2023/2/26 - 23:48
 * 数据库连接池演示
 */
public class DruidDemo {
    public static void main(String[] args) throws Exception { //alt anter
        //导入jar
        //定义配置
        //加载地址
        Properties prop = new Properties();
        prop.load(new FileInputStream("jdbc-demo/src/druid.properties"));

        //获取连接池对象
        DataSource datasource = DruidDataSourceFactory.createDataSource(prop);

        Connection connection = datasource.getConnection();

//        System.out.println(connection);
        /**
         * 2月 27, 2023 12:00:16 上午 com.alibaba.druid.pool.DruidDataSource info
         * 信息: {dataSource-1} inited
         * com.mysql.jdbc.JDBC4Connection@568bf312
         */

        //定义sql
        String sql1 = "select * from tb_user";
        Statement stat = connection.createStatement();
        ResultSet rs = stat.executeQuery(sql1);

        List<TBuser> list = new ArrayList<>();

        while (rs.next()){

            //创建对象

            TBuser tbuser = new TBuser();

            int id = rs.getInt("id");
            String username1 = rs.getString("username");
            String password1 = rs.getString("password");
            String gender = rs.getString("gender");
            String addr = rs.getString("addr");

            tbuser.setId(id);
            tbuser.setUsername(username1);
            tbuser.setUsername(password1);
            tbuser.setGender(gender);
            tbuser.setAddr(addr);
            //存入集合
            list.add(tbuser);
        }

        System.out.println(list);
       //释放资源
        rs.close();
        stat.close();
        connection.close();
    }
}
```
