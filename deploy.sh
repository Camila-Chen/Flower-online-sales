if [ "$1" == "" ];then
   echo "You forgot to add a 'environment' to the end. (EX: sh ./deployAll.sh test or production)"
   exit 1
fi

if [ "$2" == "" ]; then
   echo "You forgot to add the pem path to the end."
   exit 1
fi

cd admin
npm run build
scp -r -i $2 ./build ubuntu@ec2-18-162-118-80.ap-east-1.compute.amazonaws.com:/app/flower-shop-yuxuan/$1/admin

cd ../client
npm run build
scp -r -i $2 ./build ubuntu@ec2-18-162-118-80.ap-east-1.compute.amazonaws.com:/app/flower-shop-yuxuan/$1/client



