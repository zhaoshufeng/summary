# git常用指令

### 一、提交修改（增，改）

1、 提交到暂存区

git add file

2、 提交到版本库

git commit -m 'msg'


### 二、删除

1、 删除本地文件

rm file

2、 删除暂存区或者版本库文件

git rm file

git commit -m 'msg'


### 三、推送到远程（增删改）

git push

git push -u

### 四、从远程抓取

git pull

git pull --allow-unrelated-histories

### 五、多人协作

#### 1. 远程仓库-->本地仓库（克隆）

a）创建远程仓库gitDemo

b）从远程仓库克隆  git clone git@github.com:zhaoshufeng/gitDemo.git （不论远程gitDemo有几个分支，克隆出来的只有一个master分支）

c）增删改查本地仓库文件，提交到分支上   git add 增删改查文件名   git commit -m 备注信息

d）本地仓库分支推送到远程仓库分支  git push -u origin master （其他分支也一样操作）

e）远程仓库查看修改

####  2. 本地仓库-->远程仓库（同步）

a）创建本地仓库gitDemo且git init

b）创建远程仓库

c）本地仓库与远程仓库同步  git remote add origin git@github.com:zhaoshufeng/gitDemo.git  (git remote -v 查看是否同步成功)

d）本地仓库抓取远程仓库内容 git pull origin master --allow-unrelated-histories

e）本地仓库分支推送到远程仓库分支  git push -u origin master （其他分支也一样操作）

f）增删改查本地仓库文件，提交到分支上   git add 增删改查文件名   git commit -m 备注信息

g）查看远程仓库变化


