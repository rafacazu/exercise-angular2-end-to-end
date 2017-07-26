import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Product } from '../adminShared/product';

@Injectable()

export class ProductAdminService {

    createPost(prod: Product){
        let storageRef = firebase.storage().ref();
        storageRef.child(`product_images/${prod.imgTitle}`).putString(prod.img, 'base64')
            .then((snapshot)=>{
                let url = snapshot.metadata.downloadURLs[0];
                let dbRef = firebase.database().ref('products/');
                let newProd = dbRef.push();
                newProd.set({
                    title: prod.name,
                    content: prod.description,
                    imgTitle: prod.imgTitle,
                    img: url,
                    price: prod.price,
                    id: newProd.key
                })
            })
            .catch (error =>{
                alert(`failed upload: ${error}`);
            })
    }

    editProduct(update: Product){
        let dbRef = firebase.database().ref('products/').child(update.id)
            .update({
                title: update.name,
                content: update.description,
                price: update.price
            });
            alert("post updated");
    }

    removeProduct(deleteProduct: Product){
         let dbRef = firebase.database().ref('products/').child(deleteProduct.id).remove();
         alert('post deleted');
         let imageRef = firebase.storage().ref().child(`product_images/${deleteProduct.imgTitle}`).delete()
         .then(function(){
             alert(`${deleteProduct.imgTitle} was deleted from storage`);
         }).catch(function(error){
             alert(`Error - Unable to delete ${deleteProduct.imgTitle} - ${error}`);
         })
    }
}

