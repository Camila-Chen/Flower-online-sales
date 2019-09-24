if [ "$1" == "" ];then
   echo "You forgot to add a 'environment' to the end. (EX: sh ./deployAll.sh test or production)"
   exit 1
fi

cd admin
npm run build
scp -r ./build ubuntu@49.235.3.132:/app/flower-shop-yuxuan/$1/admin

cd ../client
npm run build
scp -r ./build ubuntu@49.235.3.132:/app/flower-shop-yuxuan/$1/client



