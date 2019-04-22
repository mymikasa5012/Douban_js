import requests
import execjs
import re


response = requests.get('https://book.douban.com/subject_search?search_text=%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0&cat=1001')
r = re.search('window.__DATA__ = "([^"]+)"', response.text).group(1)
#
# print(execjs.get().name)

# 导入js
with open('test05.js', 'r', encoding='gbk') as f:
    decrypt_js = f.read()
ctx = execjs.compile(decrypt_js)
data = ctx.call('main', r)
for item in data['payload']['items']:
    print(item)