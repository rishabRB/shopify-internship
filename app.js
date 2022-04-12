const {default: axios} = require('axios');
const express = require('express')


const API_KEY = 'fa14698cf08907476b4e16cf8f324646'
const Admin_Api_accessToken='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'


const app = express();
app.use(express.json())

const date = new Date()
const month= date.getMonth() > 10 ? date.getMonth()+1 : '0'+(date.getMonth()+1)
const year=date.getFullYear()

	
const shopUri=`https://${API_KEY}:${Admin_Api_accessToken}@messoldtech-test.myshopify.com/admin/api/${year}-${month}/products.json`

app.get("/",async(req,res)=>{
  axios.get(shopUri).then((response)=>{
    console.log(response.data)
	res.json(response.data)
  })
  .catch((err)=>{
    console.log(err)
  })
})

app.listen(3000, () => {
});

