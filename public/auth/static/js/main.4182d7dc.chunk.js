(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){},22:function(e){e.exports={id:6,nome:"M\xe1scara Facial de Coco Yes To Coconut",fornecedor:"WALGREENS",altura:"17 cm ",largura:"13 cm",profundidade:"0,2 cm",peso:"50 g",valorCompra:"15,00",valorVenda:"35,00",imagens:"http://res.cloudinary.com/lucaspedroso/image/upload/v1559421471/qsygycpccpvhpdletnvz.jpg",categorias:null,obs:"https://www.amazon.com/Yes-Coconut-Paper-Mask-Pack/dp/B01H3FB7UQ",quantidade:""}},23:function(e){e.exports=[{nome:"Acre",sigla:"AC"},{nome:"Alagoas",sigla:"AL"},{nome:"Amap\xe1",sigla:"AP"},{nome:"Amazonas",sigla:"AM"},{nome:"Bahia",sigla:"BA"},{nome:"Cear\xe1",sigla:"CE"},{nome:"Distrito Federal",sigla:"DF"},{nome:"Esp\xedrito Santo",sigla:"ES"},{nome:"Goi\xe1s",sigla:"GO"},{nome:"Maranh\xe3o",sigla:"MA"},{nome:"Mato Grosso",sigla:"MT"},{nome:"Mato Grosso do Sul",sigla:"MS"},{nome:"Minas Gerais",sigla:"MG"},{nome:"Par\xe1",sigla:"PA"},{nome:"Para\xedba",sigla:"PB"},{nome:"Paran\xe1",sigla:"PR"},{nome:"Pernambuco",sigla:"PE"},{nome:"Piau\xed",sigla:"PI"},{nome:"Rio de Janeiro",sigla:"RJ"},{nome:"Rio Grande do Norte",sigla:"RN"},{nome:"Rio Grande do Sul",sigla:"RS"},{nome:"Rond\xf4nia",sigla:"RO"},{nome:"Roraima",sigla:"RR"},{nome:"Santa Catarina",sigla:"SC"},{nome:"S\xe3o Paulo",sigla:"SP"},{nome:"Sergipe",sigla:"SE"},{nome:"Tocantins",sigla:"TO"}]},24:function(e,a,t){e.exports=t(54)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),s=t(1),o=t(2),i=t(5),m=t(3),u=t(4),d=t(7),p=t.n(d),h=t(6),g=t(47),E=l.a.createContext(),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={products:localStorage.prod?JSON.parse(localStorage.prod):[]},t.handleStates=function(e,a,n){return e&&e.preventDefault(),console.log(e.target.value),t.setState(Object(h.a)({},a,n)),!1},t.addProduct=function(e){var a=e.e;a&&a.preventDefault(),delete e.e,e.quantity=1;var n=t.state.products;n.push(e),t.setState({products:n}),t.productsToLocalStorage()},t.incrementProduct=function(e,a){e.preventDefault();var n=t.state.products;n[a].quantity+=1,t.setState({products:n})},t.deleteProduct=function(e,a){e.preventDefault();var n=t.state.products;return n=n.filter(function(e,t){return t!==a}),t.setState({products:n},function(){t.productsToLocalStorage()}),!1},t.productsToLocalStorage=function(e){var a=t.state.products;localStorage.setItem("prod",g.stringify(a))},t.setChange=function(e){e.preventDefault();var a=e.target,n=a.name,l=a.value;t.setState(Object(h.a)({},n,l))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e={state:this.state,handleStates:this.handleStates,deleteProduct:this.deleteProduct,addProduct:this.addProduct,setChange:this.setChange};return l.a.createElement(E.Provider,{value:e},this.props.children)}}]),a}(n.Component),f=E.Consumer,b=function(e){var a=e.name,t=e.price,n=e.image,r=e.id,c=e.quantidade;return l.a.createElement(f,null,function(e){var s=e.addProduct,o=r+"_prod",i=c?l.a.createElement(function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"grid_meta"},l.a.createElement("div",{className:"product_price"},l.a.createElement("div",{className:"grid-price "},l.a.createElement("span",{className:"money "},"R$ ",t)))),l.a.createElement("div",{className:"shoe single-item hvr-outline-out"},l.a.createElement("button",{className:"btn btn-add",onClick:function(e){return s({e:e,price:t,name:a,id:r,image:n})}},l.a.createElement("img",{src:"/images/plus-cart.svg",alt:""}))))},null):l.a.createElement(l.a.Fragment,null," Produto em falta ",l.a.createElement("a",{href:"/product/"+r}," Avise-me ")," ");return l.a.createElement("div",{key:o,className:"col-md-4 product-item"},l.a.createElement("div",{className:"product-shoe-info shoe"},l.a.createElement("div",{className:"men-pro-item"},l.a.createElement("div",{className:"men-thumb-item"},l.a.createElement("img",{className:"product-image-home",src:n,alt:""}),l.a.createElement("div",{className:"men-cart-pro"},l.a.createElement("div",{className:"inner-men-cart-pro"},l.a.createElement("a",{href:"/product/"+r,className:"link-product-add-cart"},"Quick View"))),l.a.createElement("span",{className:"product-new-top"},"New")),l.a.createElement("div",{className:"item-info-product"},l.a.createElement("h4",null,l.a.createElement("a",{href:"/product/"+r}," ",a," ")),l.a.createElement("div",{className:"info-product-price"},i),l.a.createElement("div",{className:"clearfix"})))))})},N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={products:[]},t.apiCaller=function(){var e=window.counter?window.counter:"",a="/products/api/".concat(e);p.a.get(a).then(function(e){e.data?t.setState({data:e.data}):t.setState({data:null})}).catch(function(e){t.setState({data:null})})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.search&&window.search.length?this.setState({data:window.search}):this.apiCaller()}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("div",{className:"row"},e&&e.map(function(e){return l.a.createElement(b,{key:e.id,name:e.nome,id:e.id,price:e.valorVenda,image:e.imagens,quantidade:e.quantidade})}),!e&&l.a.createElement("div",null," We got an error, try reload the page "))}}]),a}(n.Component),S=function(e){var a=e.name,t=e.price,n=e.deleteProduct,r=e.item_id;return l.a.createElement("div",{className:"cart-item"},l.a.createElement("div",{className:"name"}," ",a," "),l.a.createElement("div",{className:"price"},l.a.createElement("span",null,"R$",t),l.a.createElement("button",{className:"cart-item_btn-icon",onClick:function(e){return n(e,r)}},l.a.createElement("img",{src:"/images/cancel.svg",alt:""}))))},O=t(10),w=t.n(O),j=(t(49),function(e){var a=e.css,t=e.label,n=e.name,r=e.handleInput,c=e.required,s=e.placeholder;c=!!c,a=a?"".concat(a," input-text_wrapper"):"input-text_wrapper col-sm-12";var o=t?l.a.createElement("label",null," ",t," "):null;return l.a.createElement("div",{className:a},o,l.a.createElement("input",{type:"text",name:n,onChange:r,required:c,placeholder:s}))}),y=function(e){var a=e.css,t=e.label,n=e.name,r=e.handleInput,c=e.required,s=e.options;return c=!!c,s=s||[],a=a?"".concat(a," input-text_wrapper"):"input-text_wrapper",l.a.createElement("div",{className:a},l.a.createElement("label",null," ",t," "),l.a.createElement("div",{className:"select-wrapper form-group"},l.a.createElement("select",{name:n,className:"form-control",onChange:r,required:c},s.map(function(e,a){return l.a.createElement("option",{key:a+"-option",value:e.sigla}," ",e.sigla," ")}))))},C=function(e){var a=e.css,t=e.label,n=e.name,r=e.handleInput,c=e.required;return c=!!c,a=a?"".concat(a," input-text_wrapper"):"input-text_wrapper col-sm-12",l.a.createElement("div",{className:a},l.a.createElement("label",null," ",t," "),l.a.createElement("input",{type:"password",name:n,onChange:r,required:c}))},I=function(e){var a=e.css,t=e.label,n=e.name,r=e.handleInput,c=e.required;return a=a?"".concat(a," input-text_wrapper"):"input-text_wrapper col-sm-12",l.a.createElement("div",{className:a},l.a.createElement("label",{className:"label-input"}," ",t," "),l.a.createElement("input",{type:"email",name:n,onChange:r,required:c}))},k=function(e){var a=e.css,t=e.label,n=e.name,r=e.handleInput,c=e.required;return a=a?"".concat(a," input-text_wrapper"):"input-text_wrapper col-sm-12",l.a.createElement("div",{className:a},l.a.createElement("label",null," ",t," "),l.a.createElement(w.a,{mask:"(99) 99999-9999",name:n,type:"tel",maskChar:null,onChange:r,required:c}))},q=function(e){var a=e.css,t=e.label,n=e.name,r=e.handleInput,c=e.required;return a=a?"".concat(a," input-text_wrapper"):"input-text_wrapper col-sm-12",l.a.createElement("div",{className:a},l.a.createElement("label",null," ",t," ",l.a.createElement("small",null,"(dd/mm/aaaa)")," "),l.a.createElement(w.a,{mask:"99/99/9999",name:n,type:"tel",maskChar:null,onChange:r,required:c}))},D=function(e){var a=e.css,t=e.label,n=e.name,r=e.handleInput,c=e.required;return a=a?"".concat(a," input-text_wrapper"):"input-text_wrapper col-sm-12",l.a.createElement("div",{className:a},l.a.createElement("label",null," ",t," "),l.a.createElement(w.a,{mask:"999.999.999-99",name:n,type:"tel",maskChar:null,onChange:r,required:c}))},x=function(e){var a=e.css,t=e.label,n=e.name,r=e.handleInput,c=e.required;a=a?"".concat(a," input-text_wrapper"):"input-text_wrapper col-sm-12";var s=t?l.a.createElement("label",null," ",t," "):null;return l.a.createElement("div",{className:a},s,l.a.createElement(w.a,{alwaysShowMask:!0,mask:"99.999-999",name:n,type:"tel",maskChar:null,onChange:r,required:c}))},P=function(e){var a=e.css,t=e.label,n=e.action,r=e.disabled;return a=a?"".concat(a," button_wrapper"):"button_wrapper col-sm-12",l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:a},l.a.createElement("button",{disabled:r,onClick:n||null}," ",t," ")))},A=function(e){var a=e.label,t=e.value,n=e.handleInput,r=e.disabled;return l.a.createElement("div",{className:"btn-wrapper"},l.a.createElement("button",{value:t,onClick:n,disabled:r},a))},_=function(){return"_"+Math.random().toString(36).substr(2,9)},M=function(e){var a=e.results;a=a||[];var t=_(),n=a.length?l.a.createElement("h5",null," Frete "):null;return l.a.createElement(f,null,function(e){console.log(e);var r=e.handleStates;return l.a.createElement(l.a.Fragment,null,l.a.createElement("hr",null),n,l.a.createElement("div",{key:t,style:{display:"flex"},className:"cart-list m-bottom-30"},a.map(function(e,a){var t=40010===e.Codigo?"Sedex":"PAC";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{key:_(),style:{width:"50%"}},l.a.createElement("strong",null,t)," ",l.a.createElement("br",null),"Valor R$",e.Valor," ",l.a.createElement("br",null),"Prazo: ",e.PrazoEntrega," dias",l.a.createElement(A,{value:"1",label:t,handleInput:r})),l.a.createElement("div",null))})))})},F=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={cep:"",btnDisabled:!1,btnLabel:"Calcular Frete"},t.handleChange=function(e){e.preventDefault();var a=e.target,n=a.name,l=a.value;t.setState(Object(h.a)({},n,l),function(){console.log(t.state)})},t.calcDeliveryHandler=function(e){t.setState({btnDisabled:!0,btnLabel:"Buscando..."}),e.preventDefault();var a=t.state.cep;a=(a=a.replace(/\./g,"")).replace(/-/g,"");var n="http://localhost:4003/api/frete/1/".concat(a,"/");return p.a.get(n).then(function(e){var a=e.data;t.setState({deliveryData:a,btnDisabled:!1,btnLabel:"Calcular Frete"})}).catch(function(e){}),!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"cart-finalize"},l.a.createElement("div",{className:"item-wrapper"},l.a.createElement(x,{css:"w-100",name:"cep",label:"",placeholder:"CEP",handleInput:this.handleChange,required:!0})),l.a.createElement("div",{className:"item-wrapper"},l.a.createElement(P,{css:"w-100",label:this.state.btnLabel,action:this.calcDeliveryHandler,disabled:this.state.btnDisabled}))),l.a.createElement("div",{className:"info-wrapper"},this.state.deliveryData&&l.a.createElement(M,{results:this.state.deliveryData})))}}]),a}(n.Component),L=function(e){for(var a="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,l=0;l<e;l++)a+=t.charAt(Math.floor(Math.random()*n));return a},R=function(e,a){var t=document.getElementById(a);return t?Object(r.render)(e,t):null},T=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={active:!1},t.toggleCart=function(e){return e.preventDefault(),t.setState({active:!t.state.active}),!1},t.hideCart=function(e){e.preventDefault(),t.setState({active:!1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.active?"cart-list_menu active":"cart-list_menu";return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:this.toggleCart,className:"btn btn-cart"},l.a.createElement("img",{src:"/images/shopping-cart.svg",alt:""})),l.a.createElement("div",{className:e},l.a.createElement("button",{className:"btn close-cart",onClick:this.hideCart},l.a.createElement("img",{src:"/images/cancel.svg",alt:""}),"Fechar"),l.a.createElement(f,null,function(e){var a=e.state.products,t=e.deleteProduct;if(a.length){var n=0;return l.a.createElement("div",{className:"cart-box"},a.map(function(e,a){return n+=parseFloat(e.price),l.a.createElement(S,{deleteProduct:t,key:L(4),name:e.name,item_id:a,price:e.price,image:e.image,id:e.id})}),l.a.createElement(F,null),l.a.createElement("div",{className:"cart-finalize"},l.a.createElement("span",null,"Total: R$",n)," ",l.a.createElement("span",null,"|")," ",l.a.createElement("a",{href:"/checkout"},"Finalizar")))}return"Cart is empty"})))}}]),a}(n.Component),B=t(22),z=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={mainImage:B.imagens},t.changeImage=function(e){e.preventDefault(),t.setState({mainImage:e.target.src})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.mainImage;return l.a.createElement("div",{className:"images"},l.a.createElement("figure",{className:"main-image"},l.a.createElement("img",{src:e,alt:""})),l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,l.a.createElement("img",{src:"http://res.cloudinary.com/lucaspedroso/image/upload/v1559421268/wmih1qdpxwnnjmvfkllx.jpg",alt:"product 1",onClick:this.changeImage})),l.a.createElement("li",null,l.a.createElement("img",{src:"http://res.cloudinary.com/lucaspedroso/image/upload/v1559421471/qsygycpccpvhpdletnvz.jpg",alt:"product 2",onClick:this.changeImage})),l.a.createElement("li",null,l.a.createElement("img",{src:"http://res.cloudinary.com/lucaspedroso/image/upload/v1559422184/bmo6benpf8bjjinoszrz.png",alt:"product 3",onClick:this.changeImage}))))}}]),a}(n.Component),G=(t(50),function(){return l.a.createElement("div",{className:"section-product"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"product-box"},l.a.createElement("div",{className:"title"},"Tal Produto"),l.a.createElement(z,null))))}),J=function(e){var a=document.getElementById("cart");return console.log(a),a?Object(r.createPortal)(l.a.createElement(T,null),a):null},K=function(e){var a=e.pageData,t=document.getElementById("products"),n=document.getElementById("single-product");return n?n?Object(r.createPortal)(l.a.createElement(G,null),n):null:t?Object(r.createPortal)(l.a.createElement(N,{startArgs:a}),t):null},U=function(){return l.a.createElement(v,null,l.a.createElement("div",{className:"app"},l.a.createElement(J,null),l.a.createElement(K,{pageData:"somedata"})))},V="http://localhost:4003",H="".concat(V,"/login"),Y="".concat(V,"/sign-up"),Q=("".concat(V,"/recover"),l.a.createContext()),W=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={isLoading:!1,message:""},t.handleStates=function(e,a,n){return e&&e.preventDefault(),t.setState(Object(h.a)({},a,n)),!1},t.handleInputs=function(e){e.preventDefault();var a=e.target,n=a.value,l=a.name;t.setState(Object(h.a)({},l,n))},t.handleSubmit=function(e){t.setState({isLoading:!0,message:""}),e.preventDefault();var a=t.state;p.a.post(H,a).then(function(e){200===e.data.code?(localStorage.clear(),localStorage.setItem("TOKEN_KEY",e.data.token),document.cookie=e.data.token,setTimeout(function(){window.location.href=e.data.url},2e3)):t.setState({message:e.data.message}),t.setState({isLoading:!1})}).catch(function(e){t.setState({message:"Algo deu errado, por favor tente mais tarde"}),t.setState({isLoading:!1})})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e={state:this.state,handleStates:this.handleStates,handleInputs:this.handleInputs,handleSubmit:this.handleSubmit};return l.a.createElement(Q.Provider,{value:e},this.props.children)}}]),a}(n.Component),$=Q.Consumer,X=function(e){var a=e.message;return l.a.createElement("div",{className:"loading-wrapper"},a)},Z=(t(21),{width:"80%"}),ee=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement($,null,function(e){var a=e.handleInputs,t=e.handleSubmit,n=e.state,r=n.message,c=n.isLoading?l.a.createElement(X,{message:"Verificando..."}):null;return l.a.createElement("div",{className:"login"},c,l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"left_label"},l.a.createElement("h1",null,"MUSE"),l.a.createElement("small",null," ",window.loginLabel," "))),l.a.createElement("div",{className:"login-box right"},l.a.createElement("h2",null," Login "),l.a.createElement("form",{style:Z,className:"form pattern-form",onSubmit:t},l.a.createElement(I,{required:!0,name:"email",label:"Email",handleInput:a}),l.a.createElement(C,{required:!0,name:"password",label:"Senha",handleInput:a}),l.a.createElement(P,{label:"Entrar"}),l.a.createElement("div",{className:"col-sm-12 danger"},r),l.a.createElement("div",{className:"col-sm-12 options"},l.a.createElement("a",{href:"/sign-up"},"Ainda n\xe3o tenho cadastro"),l.a.createElement("a",{href:"/forgot-password"},"Esqueci minha senha")))))})}}]),a}(n.Component),ae=function(){return l.a.createElement(W,null,l.a.createElement(ee,null))},te=l.a.createContext(),ne=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={message:"",isLoading:!1},t.handleStates=function(e,a,n){return e&&e.preventDefault(),t.setState(Object(h.a)({},a,n)),!1},t.handleInputs=function(e){e.preventDefault();var a=e.target,n=a.value,l=a.name;t.setState(Object(h.a)({},l,n))},t.handleSubmit=function(e){e.preventDefault(),t.setState({isLoading:!0});var a=t.state,n={nome:"".concat(a.nome," ").concat(a.sobrenome),email:a.email,cpf:a.cpf,rua:"".concat(a.rua," ").concat(a.numero," ").concat(a.complemento),bairro:a.bairro,cidade:a.cidade,estado:a.estado,cep:a.cep,password:a.password};return p.a.post(Y,n).then(function(e){var a=e.data,n=a.code,l=a.message;200===n?(localStorage.setItem("token",e.data.token),setTimeout(function(){window.location.url=e.data.url},2e3)):t.setState({message:l}),t.setState({isLoading:!t.state.isLoading})}).catch(function(e){console.log(e),t.setState({message:"Algo deu errado, por favor tente mais tarde"})}),!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e={state:this.state,handleStates:this.handleStates,handleInputs:this.handleInputs,handleSubmit:this.handleSubmit};return l.a.createElement(te.Provider,{value:e},this.props.children)}}]),a}(n.Component),le=te.Consumer,re=t(23),ce=function(e){return l.a.createElement(le,null,function(e){var a=e.handleSubmit,t=e.state,n=t.isLoading,r=t.message,c=r?"col-sm-12 danger":"col-sm-12",s=n?l.a.createElement(X,{message:"Enviando seus dados"}):null;return l.a.createElement(l.a.Fragment,null,s,l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"left"},"MUSE"),l.a.createElement("div",{className:"login-box right"},l.a.createElement("h2",{className:"form-title"}," Sign Up "),l.a.createElement("form",{className:"form pattern-form",onSubmit:a},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("h2",null," Informa\xe7\xf5es pessoais ")),l.a.createElement(j,{css:"col-sm-6",name:"nome",label:"Nome:",handleInput:e.handleInputs,required:!0}),l.a.createElement(j,{css:"col-sm-6",name:"sobrenome",label:"Sobrenome:",handleInput:e.handleInputs,required:!0}),l.a.createElement(I,{name:"email",label:"E-mail:",handleInput:e.handleInputs,required:!0}),l.a.createElement(D,{css:"col-sm-6",name:"cpf",label:"CPF:",handleInput:e.handleInputs,required:!0}),l.a.createElement(q,{css:"col-sm-6",name:"nascimento",label:"Data de Nascimento:",handleInput:e.handleInputs,required:!0}),l.a.createElement(k,{css:"col-sm-6",name:"phone",label:"Telefone:",handleInput:e.handleInputs,required:!0}),l.a.createElement(k,{css:"col-sm-6",name:"whatsapp",label:"WhatsApp:",handleInput:e.handleInputs}),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("h2",null,"Endere\xe7o")),l.a.createElement(j,{css:"col-sm-8",name:"rua",label:"Rua:",handleInput:e.handleInputs,required:!0}),l.a.createElement(j,{css:"col-sm-4",name:"numero",label:"N\xba:",handleInput:e.handleInputs,required:!0}),l.a.createElement(j,{css:"col-sm-4",name:"complemento",label:"Complemento:",handleInput:e.handleInputs}),l.a.createElement(j,{css:"col-sm-8 bairro",name:"bairro",label:"Bairro:",handleInput:e.handleInputs,required:!0}),l.a.createElement(j,{css:"col-sm-12 cidade",name:"cidade",label:"Cidade:",handleInput:e.handleInputs,required:!0}),l.a.createElement(y,{css:"col-sm-6 estado",options:re,name:"estado",label:"Estado:",handleInput:e.handleInputs,required:!0}),l.a.createElement(j,{css:"col-sm-6 cep",name:"cep",label:"CEP:",handleInput:e.handleInputs,required:!0}),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",null,"Informa\xe7\xf5es de Acesso")),l.a.createElement(C,{name:"password",label:"Senha:",handleInput:e.handleInputs,required:!0}),l.a.createElement(C,{name:"confirm-password",label:"Confirmar Senha:",handleInput:e.handleInputs,required:!0}),l.a.createElement(P,{label:"Entrar"}),l.a.createElement("div",{className:c},r),l.a.createElement("div",{className:"col-sm-12 options"},"ou",l.a.createElement("hr",null),l.a.createElement("a",{href:"/login",className:"link"}," J\xe1 sou cadastrado")))))))})},se=function(){return l.a.createElement(ne,null,l.a.createElement(ce,null))},oe=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={message:"",disabled:!0},t.handleSubmit=function(e){e.preventDefault();var a={};return a.email=t.state.email,p.a.post("/recovery",{data:a}).then(function(e){t.setState({message:e})}).catch(function(e){console.log(e),t.setState({message:"Ops! Estamos com algum problema nos nossos servidores, tente mais tarde"})}),!1},t.handleChange=function(e){e.preventDefault();var a=e.target,n=a.value,l=a.name;t.setState(Object(h.a)({},l,n)),t.isEmail()},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"isEmail",value:function(){/\S+@\S+\.\S+/.test(this.state.email)?this.setState({disabled:!1}):this.setState({disabled:!0})}},{key:"render",value:function(){var e=this.handleSubmit,a=this.handleChange;return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"left"},"MUSE"),l.a.createElement("div",{className:"login-box right"},l.a.createElement("h2",{className:"form-title"}," Recuperar senha "),l.a.createElement("form",{className:"form",onSubmit:e},l.a.createElement("div",{className:"row"},l.a.createElement(I,{name:"email",label:"E-mail:",handleInput:a,required:!0}),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("button",{disabled:this.state.disabled},"Recuperar")),l.a.createElement("div",{className:"col-sm-12 danger"},this.state.message),l.a.createElement("div",{className:"col-sm-12 options"},"ou",l.a.createElement("hr",null),l.a.createElement("a",{href:"/login",className:"link"}," J\xe1 sou cadastrado"),l.a.createElement("a",{href:"/signup",className:"link"}," Quero me cadastrar "))))))}}]),a}(n.Component),ie=t(11),me=function(e){var a=e.message;return l.a.createElement("div",{className:"modal-message flex-center"},a)},ue=(t(51),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={nome:"",email:"",status:""},t.submitForm=function(e){e.preventDefault();var a={name:t.state.nome,email:t.state.email};return p.a.post("/subscribe",{data:a}).then(function(e){t.setState({message:"Obrigado, em breve voc\xea receber\xe1 nossas novidades em seu email",status:!0})}).catch(function(e){t.setState({message:"Estamos com algum problema, tente mais tarde",status:!0})}),!1},t.handleInput=function(e){e.preventDefault(),t.setState(Object(h.a)({},e.target.name,e.target.value))},t.closeComponent=function(e){e.preventDefault();var a=c.a.findDOMNode(Object(ie.a)(t)).parentNode;c.a.unmountComponentAtNode(a)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.status?l.a.createElement(me,{message:this.state.message}):null,a=this.state.status?"/images/cancel-white.svg":"/images/cancel.svg";return l.a.createElement("div",{className:"modal-wrapper_lead"},l.a.createElement("div",{className:"box"},l.a.createElement("button",{className:"cancel",onClick:this.closeComponent},l.a.createElement("img",{src:a,alt:""})),e,l.a.createElement("div",{className:"box_left"},l.a.createElement("span",null,"MUSE")),l.a.createElement("div",{className:"box_right"},l.a.createElement("h2",null,"Receba dicas e novidades "),l.a.createElement("form",{className:"box-content pattern-form",onSubmit:this.submitForm},l.a.createElement("div",{className:"form-group"},l.a.createElement(j,{name:"nome",label:"Nome:",handleInput:this.handleInput,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement(I,{name:"email",label:"Email:",handleInput:this.handleInput,required:!0})),l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("button",{className:"btn btn-primary"},"Cadastrar"))))))}}]),a}(n.Component)),de=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={active:!1},t.toggleSearch=function(e){e.preventDefault(),t.setState({active:!t.state.active})},t.submitSearch=function(e){return e.preventDefault(),p.a.get("/search").then(function(e){console.log(e)}).catch(function(e){console.log(e)}),!1},t.handleChange=function(e){e.preventDefault();var a=e.target,n=a.value,l=a.name;t.setState(Object(h.a)({},l,n))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.active?"search_wrapper active":"search_wrapper";return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"btn",onClick:this.toggleSearch},l.a.createElement("img",{src:"/images/search.svg",alt:""})),l.a.createElement("form",{className:e,method:"GET",action:"/busca"},l.a.createElement("div",{className:"search-box"},l.a.createElement("input",{type:"text",name:"terms",onChange:this.handleChange,placeholder:"Digite aqui sua busca",autofocus:!0}),l.a.createElement("button",{className:"btn btn-submit-search"},l.a.createElement("img",{src:"/images/search.svg",alt:""})))))}}]),a}(n.Component),pe=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={active:!1},t.toggleMenu=function(e){e.preventDefault(),t.setState({active:!t.state.active})},t.hideMenu=function(e){e.preventDefault(),t.setState({active:!1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.active?"menu-nav_section flex-center":"menu-nav_section";return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{id:"",className:"btn",onClick:this.toggleMenu},l.a.createElement("img",{src:"/images/menu.svg",alt:""})),l.a.createElement("div",{className:e},l.a.createElement("button",{className:"btn btn-close-menu",onClick:this.hideMenu},l.a.createElement("img",{src:"/images/cancel.svg",alt:""})),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/sobre"},"Sobre")),l.a.createElement("li",null,l.a.createElement("a",{href:"/busca"},"Produtos")),l.a.createElement("li",null,l.a.createElement("a",{href:"/contato"},"Contato"))))))}}]),a}(n.Component),he=(t(52),function(e){return l.a.createElement("a",{href:"/login",className:"btn"},l.a.createElement("img",{src:"/images/login.svg",alt:""}))}),ge=function(e){return document.cookie="jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",localStorage.removeItem("TOKEN_KEY")},Ee=function(e){return l.a.createElement(l.a.Fragment,null,"Bem vindo(a) ",e.name,l.a.createElement("a",{href:"/logout",onClick:ge,className:"btn btn-logout"},l.a.createElement("span",null,"Sair"),l.a.createElement("img",{src:"/images/logout.svg",alt:"Sair",Title:"Sair"})))},ve=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={logged:!1,name:""},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a={mode:"no-cors",headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN_KEY")),"Access-Control-Allow-Headers":"*"}};p.a.get("/api/verifyToken",a).then(function(a){if(a.data.isProtected){var t=a.data.data.user.name;e.setState({logged:!0,name:t})}}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.logged?l.a.createElement(Ee,{name:this.state.name}):l.a.createElement(he,null))}}]),a}(n.Component);t(53);R(l.a.createElement(ae,null),"login"),R(l.a.createElement(se,null),"signup"),R(l.a.createElement(U,null),"root"),R(l.a.createElement(oe,null),"recovery"),R(l.a.createElement(ue,null),"modal-lead"),R(l.a.createElement(de,null),"search-btn"),R(l.a.createElement(pe,null),"menu-nav"),R(l.a.createElement(ve,null),"profile")}},[[24,1,2]]]);
//# sourceMappingURL=main.4182d7dc.chunk.js.map