# 使用说明
## 安装依赖库、服务等
- 请确保安装redis、mysql、easticsearch等服务(我安装了elasticsearch-2.4.0,请不要安装过高版本)
  [elasticsearch-2.4.0下载地址](https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/tar/elasticsearch/2.4.6/elasticsearch-2.4.6.tar.gz)
- 安装blog目录下的requirements.text中的python库
## 数据库迁移、静态文件收集
- python manage.py migrate
- python manage.py collectstatic
## 创建超级用户
因为该网站不支持注册用户
- python manage.py createsuperuser
