module.exports=function (template, product){
  let output=template.replace('{{%name%}}', product.name)
  output=output.replace('{{%id%}}', product.id)
  output=output.replace('{{%age%}}', product.age)
  output=output.replace('{{%color%}}', product.color)
  return output;
}