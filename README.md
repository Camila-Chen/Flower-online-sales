deploy:
sh deploy.sh production C:/MyWork/essential/oneplus.pem

scp -r -i C:/MyWork/essential/oneplus.pem ubuntu@ec2-18-162-118-80.ap-east-1.compute.amazonaws.com:/app/flower-shop-yuxuan/production/fs-online/server/tmp C:/Games/tmp
