

do{ var son = +prompt('Hurmatli foydalanuvchi son kiriting: ')

} while(son <= 0 && son !== !isNaN(son))


var daraja = +prompt('Hurmatli foydalanuvchi daraja kiriting: ')

daraja = !isNaN(daraja) && daraja > 0 ? daraja : daraja=2


alert('Javob ' + (son**daraja))


do{ var zina = +prompt('Zinalar sonini kiriting: ')
}while(zina <= 0 )

zina = !isNaN(zina) ? zina : zina = 5


do{var zinaBelgisi = prompt('Zina belgisini kiriting: ') 
}while(zinaBelgisi == '')
 

do{var oxirgiBelgisi = prompt('Oxirgi belgini kiriting: ') 
}while(oxirgiBelgisi == '') {

    console.info(oxirgiBelgisi)
}
  
for(let i=1; i<zina; i++){   

   oxirgiBelgisi = zinaBelgisi + oxirgiBelgisi
       
   console.info(oxirgiBelgisi)
}